import fs from 'fs' 
import path from 'path'
import axios from "axios";

function toB64(imgPath: string): string {
    const data = fs.readFileSync(path.resolve(imgPath)); 
    return Buffer.from(data).toString('base64');
}

export type SDOutpaintType = {
    image?: string;
    prompt: string;
    negativePrompt?: string;
    scheduler?: string;
    num_inference_steps?: number;
    img_width?: number;
    img_height?: number;
    scale?: number;
    strength?: number;
    offset_x?: number;
    offset_y?: number;
    guidance_scale?: number;
    mask_expand?: number;
    seed?: number | null;
}

export class SDOutpaint {
    private url: string;
    private apiKey: string | null;

    constructor(apiKey: string | null = null) {
        this.url = "https://api.segmind.com/v1/sd1.5-outpaint";
            this.apiKey = apiKey;
    }

    async generate(data: SDOutpaintType) {
        if (this.apiKey === null) throw new Error("Not authenticated. Please add API Key."); 
        if (data.prompt === "") throw new Error("Please enter a prompt"); 

        data = {
            image: toB64(data.image || 'https://www.segmind.com/image5.png'),
            prompt: data.prompt || "streets in italy",
            negativePrompt: data.negativePrompt || "NONE",
            scheduler: data.scheduler || "DDIM",
            num_inference_steps: data.num_inference_steps || 25,
            img_width: data.img_width || 1024,
            img_height: data.img_height || 1024,
            scale: data.scale || 1,
            strength: data.strength || 1,
            offset_x: data.offset_x || 256,
            offset_y: data.offset_y || 256,
            guidance_scale: data.guidance_scale || 7.5,
            mask_expand: data.mask_expand || 8,
            seed: data.seed || Math.floor(Math.random() * 1000000000),
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



