import fs from 'fs' 
import path from 'path'
import axios from "axios";

function toB64(imgPath: string): string {
    const data = fs.readFileSync(path.resolve(imgPath)); 
    return Buffer.from(data).toString('base64');
}

export type BgRemovalType = {
    image: string; 
    method?: string; 
}

export class BgRemoval {
    private url: string;
    private apiKey: string | null;

    constructor(apiKey: string | null = null) {
        this.url = "https://api.segmind.com/v1/bg-removal";
            this.apiKey = apiKey;
    }

    async generate(data: BgRemovalType) {
        if (this.apiKey === null) throw new Error("Not authenticated. Please add API Key."); 
        if (data.image === "") {
            throw new Error("Please enter image file location"); 
        }

        data = {
            image: toB64(data.image|| "https://www.segmind.com/codeformer_input.png"), 
            method: data.method || "object" 
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



