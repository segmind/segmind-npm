import fs from 'fs' 
import path from 'path'
import axios from "axios";

function toB64(imgPath: string): string {
    const data = fs.readFileSync(path.resolve(imgPath)); 
    return Buffer.from(data).toString('base64');
}

export type EsrganType = {
    image: string; 
    scale?: number; 
}

export class Esrgan {
    private url: string;
    private apiKey: string | null;

    constructor(apiKey: string | null = null) {
        this.url = "https://api.segmind.com/v1/esrgan";
        this.apiKey = apiKey;
    }

    async generate(data: EsrganType) {
        if (this.apiKey === null) throw new Error("Not authenticated. Please add API Key."); 
        if (data.image === "") throw new Error("Please enter a valid image path");

        data = {
            image: toB64(data.image || "https://www.segmind.com/butterfly.png"), 
            scale: data.scale || 2
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




