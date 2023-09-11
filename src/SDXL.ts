import axios from "axios";

export class SDXL {
  private url: string;
  private apiKey: string | null;

  constructor(apiKey: string | null = null) {
    this.url = "https://api.segmind.com/v1/sdxl1.0-txt2img";
    this.apiKey = apiKey;
    console.log("instantiatie class")
  }

  generate( data: {
    prompt: string,
    negativePrompt?: string,
    style?: string, 
    samples?: number,
    scheduler?: string,
    num_inference_steps?: number,
    guidance_scale?: number,
    seed?: number | null,
    strength?: number
    img_height?: number,
    img_width?: number,
    refiner?: boolean, 
    high_noise_fraction?: number; 
    base64?: boolean

  }){

      if (this.apiKey === null) throw new Error("Not authenticated. Please add API Key."); 

    data.negativePrompt = data.negativePrompt || "out of frame, duplicate, watermark, signature, text, error, deformed" ,
    data.samples = data.samples || 1; 
    data.style = data.style || "base"; 
    data.scheduler = data.scheduler || "UniPC"; 
    data.num_inference_steps = data.num_inference_steps || 20,
    data.guidance_scale = data.guidance_scale || 7.5,
    data.seed = Math.floor(Math.random() * 1000000000),
    data.strength= data.strength || 0.75; 
    data.img_width = data.img_width || 1024; 
    data.img_height = data.img_height || 1024; 
    data.refiner = data.refiner || true; 
    data.high_noise_fraction = data.high_noise_fraction || 0.8; 
    data.base64 = data.base64 || false;

    //segmind api calls
        axios({
            url: this.url, 
            data: JSON.stringify(data), 
            method: 'post', 
            headers: {
                'Content-Type': 'application/json', 
                'x-api-key': `${this.apiKey}`
            }
        })
          .then((response) => console.log(response.data))
  }
}
