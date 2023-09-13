import fs from 'fs' 
import path from 'path'
import axios from "axios";

function toB64(imgPath: string): string {
    const data = fs.readFileSync(path.resolve(imgPath)); 
    return Buffer.from(data).toString('base64');
}

export type CodeformerType = {
    image: string; 
    scale?: number; 
    fidelity?: number;
    bg?: boolean; 
    face?: boolean; 
}

export class Codeformer {
    private url: string;
    private apiKey: string | null;

    constructor(apiKey: string | null = null) {
        this.url = "https://api.segmind.com/v1/codeformer";
            this.apiKey = apiKey;
    }

    async generate(data: CodeformerType) {
        if (this.apiKey === null) throw new Error("Not authenticated. Please add API Key."); 
        if (data.image === "") {
            throw new Error("Please enter image file location"); 
        }

        data = {
            image: toB64(data.image|| "https://www.segmind.com/codeformer_input.png"), 
            scale: data.scale || 1, 
            fidelity: data.fidelity || 0.5,
            bg: data.bg || true, 
            face: data.face || true 
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


