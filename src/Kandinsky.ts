import axios from "axios";

export type KandinskyType = {
    prompt: string,
    negativePrompt?: string,
    samples?: number,
    num_inference_steps?: number,
    seed?: number | null,
    img_height?: number,
    img_width?: number,
    prior_steps?: number, 
    base64?: boolean
}

export class Kandinsky {
  private url: string;
  private apiKey: string | null;

  constructor(apiKey: string | null = null) {
    this.url = "https://api.segmind.com/v1/kandinsky2.2-txt2img";
    this.apiKey = apiKey;
  }

  async generate(data: KandinskyType) {
    if (this.apiKey === null) throw new Error("Not authenticated. Please add API Key."); 
    if (data.prompt === "") throw new Error("Please enter a prompt"); 
    
    data = {
        prompt: data.prompt, 
        negativePrompt: data.negativePrompt || "out of frame, duplicate, watermark, signature, text, error, deformed" ,
        samples: data.samples || 1, 
        num_inference_steps: data.num_inference_steps || 20,
        seed: data.seed || Math.floor(Math.random() * 1000000000),
        img_width: data.img_width || 1024, 
        img_height: data.img_height || 1024, 
        prior_steps: data.prior_steps || 25, 
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


