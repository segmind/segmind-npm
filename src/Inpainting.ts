import fs from 'fs' 
import path from 'path'
import axios from "axios";

function toB64(imgPath: string): string {
    const data = fs.readFileSync(path.resolve(imgPath)); 
    return Buffer.from(data).toString('base64');
}

export type InpaintingType = {
    image?: string; 
    mask?: string; 
    prompt: string,
    negativePrompt?: string,
    samples?: number,
    scheduler?: string,
    num_inference_steps?: number,
    guidance_scale?: number,
    strength?: number, 
    seed?: number | null,
    img_width?: number, 
    img_height?: number, 
}

export class Inpainting {
    private url: string;
    private apiKey: string | null;

    constructor(apiKey: string | null = null) {
        this.url = "https://api.segmind.com/v1/sd1.5-inpainting";
        this.apiKey = apiKey;
    }

    async generate(data: InpaintingType) {
        if (this.apiKey === null) throw new Error("Not authenticated. Please add API Key."); 
        if (data.prompt === "") throw new Error("Please enter a prompt"); 

        data = {
            image: toB64(data.image || "https://www.segmind.com/inpainting-input-image.jpeg"), 
            mask: toB64(data.mask || "https://www.segmind.com/inpainting-input-mask.jpeg"), 
            prompt: data.prompt, 
            negativePrompt: data.negativePrompt || "out of frame, duplicate, watermark, signature, text, error, deformed" ,
            samples: data.samples || 1, 
            scheduler: data.scheduler || "UniPC", 
            num_inference_steps: data.num_inference_steps || 20,
            guidance_scale: data.guidance_scale || 7.5,
            seed: data.seed || Math.floor(Math.random() * 1000000000),
            strength: data.strength || 1, 
            img_width: data.img_width || 512, 
            img_height: data.img_height || 512, 
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


