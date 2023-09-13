import axios from "axios";

export type QRGeneratorType = {
    prompt: string,
    negativePrompt?: string,
    samples?: number,
    scheduler?: string,
    num_inference_steps?: number,
    guidance_scale?: number,
    seed?: number | null,
    presets?: string, 
    control_scale?: number, 
    control_start?: number, 
    control_end?: number, 
    qr_text?: string, 
    invert?: boolean, 
    size?: number, 
    base64?: boolean
}

export class QRGenerator {
    private url: string;
    private apiKey: string | null;

    constructor(apiKey: string | null = null) {
        this.url = "https://api.segmind.com/v1/qrsd1.5-txt2img";
            this.apiKey = apiKey;
    }

    async generate(data: QRGeneratorType) {
        if (this.apiKey === null) throw new Error("Not authenticated. Please add API Key."); 
        if (data.prompt === "") throw new Error("Please enter a prompt"); 

        data = {
            prompt: data.prompt, 
            negativePrompt: data.negativePrompt || "out of frame, duplicate, watermark, signature, text, error, deformed" ,
            samples: data.samples || 1, 
            scheduler: data.scheduler || "UniPC", 
            num_inference_steps: data.num_inference_steps || 20,
            guidance_scale: data.guidance_scale || 7.5,
            seed: data.seed || Math.floor(Math.random() * 1000000000),
            presets: data.presets || "presetOne", 
            control_scale: data.control_scale || 1.8, 
            control_start: data.control_start || 0.19, 
            control_end: data.control_end || 1, 
            qr_text: data.qr_text || "www.segmind.com", 
            invert: data.invert || false, 
            size: data.size || 768, 
            base64: data.base64 || false,
        }

        //segmind api calls
        return axios({
            url: this.url, 
            data: JSON.stringify(data), 
            method: 'post', 
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json', 
                'x-api-key': `${this.apiKey}`
            }
        })
    }
}

