import fs from 'fs' 
import path from 'path'
import axios from "axios";

function toB64(imgPath: string): string {
    const data = fs.readFileSync(path.resolve(imgPath)); 
    return Buffer.from(data).toString('base64');
}

export type SegmentAnythingType = {
    image: string; 
}

export class SegmentAnything {
    private url: string;
    private apiKey: string | null;

    constructor(apiKey: string | null = null) {
        this.url = "https://api.segmind.com/v1/sam-img2img";
            this.apiKey = apiKey;
    }

    async generate(data: SegmentAnythingType) {
        if (this.apiKey === null) throw new Error("Not authenticated. Please add API Key."); 
        if (data.image === "") {
            throw new Error("Please enter image file location"); 
        }

        data = {
            image: toB64(data.image|| "https://www.segmind.com/kitchen.jpg"), 
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




