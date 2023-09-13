import fs from 'fs' 
import path from 'path'
import axios from "axios";

function toB64(imgPath: string): string {
    const data = fs.readFileSync(path.resolve(imgPath)); 
    return Buffer.from(data).toString('base64');
}

export type ControlnetType = {
    image?: string; 
    prompt: string,
    negativePrompt?: string,
    samples?: number,
    scheduler?: string,
    num_inference_steps?: number,
    guidance_scale?: number,
    strength?: number, 
    seed?: number | null,
    base64?: boolean
}

export class Controlnet {
    private url: string;
    private apiKey: string | null;

    constructor(apiKey: string | null = null, 
            type: "openpose"
            | "softedge"
            | "depth"
            | "canny"
            | "scribble") {

        this.url = `https://api.segmind.com/v1/sd1.5-controlnet-${type}`;
        this.apiKey = apiKey;

    }

    async generate(data: ControlnetType) {
        if (this.apiKey === null) throw new Error("Not authenticated. Please add API Key."); 
        if (data.prompt === "") throw new Error("Please enter a prompt"); 

        data = {
            image: toB64(data.image || "https://www.segmind.com/fasion2.jpeg"), 
            prompt: data.prompt, 
            negativePrompt: data.negativePrompt || "out of frame, duplicate, watermark, signature, text, error, deformed" ,
            samples: data.samples || 1, 
            scheduler: data.scheduler || "UniPC", 
            num_inference_steps: data.num_inference_steps || 20,
            guidance_scale: data.guidance_scale || 7.5,
            seed: data.seed || Math.floor(Math.random() * 1000000000),
            strength: data.strength || 1, 
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

