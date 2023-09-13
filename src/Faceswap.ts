import fs from 'fs' 
import path from 'path'
import axios from "axios";

function toB64(imgPath: string): string {
    const data = fs.readFileSync(path.resolve(imgPath)); 
    return Buffer.from(data).toString('base64');
}

export type FaceswapType = {
    input_face_image: string; 
    output_face_image: string; 
    file_type?: string
}

export class Faceswap {
    private url: string;
    private apiKey: string | null;

    constructor(apiKey: string | null = null) {
        this.url = "https://api.segmind.com/v1/sd2.1-faceswapper";
            this.apiKey = apiKey;
    }

    async generate(data: FaceswapType) {
        if (this.apiKey === null) throw new Error("Not authenticated. Please add API Key."); 
        if (data.input_face_image === "" || data.output_face_image === "") {
            throw new Error("Please enter image file location"); 
        }

        data = {
            input_face_image: toB64(data.input_face_image || "https://www.segmind.com/elon.jpg"), 
            output_face_image: toB64(data.output_face_image || "https://www.segmind.com/burn.gif"), 
            file_type: data.file_type || "gif", 
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



