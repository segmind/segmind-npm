var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/SDXL.ts
import axios from "axios";
var SDXL = class {
  constructor(apiKey = null) {
    this.url = "https://api.segmind.com/v1/sdxl1.0-txt2img";
    this.apiKey = apiKey;
  }
  generate(data) {
    return __async(this, null, function* () {
      if (this.apiKey === null)
        throw new Error("Not authenticated. Please add API Key.");
      if (data.prompt === "")
        throw new Error("Please enter a prompt");
      data = {
        prompt: data.prompt,
        negativePrompt: data.negativePrompt || "out of frame, duplicate, watermark, signature, text, error, deformed",
        samples: data.samples || 1,
        style: data.style || "base",
        scheduler: data.scheduler || "UniPC",
        num_inference_steps: data.num_inference_steps || 20,
        guidance_scale: data.guidance_scale || 7.5,
        seed: Math.floor(Math.random() * 1e9),
        strength: data.strength || 0.75,
        img_width: data.img_width || 1024,
        img_height: data.img_height || 1024,
        refiner: data.refiner || true,
        high_noise_fraction: data.high_noise_fraction || 0.8,
        base64: data.base64 || false
      };
      return axios({
        url: this.url,
        data: JSON.stringify(data),
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": `${this.apiKey}`
        }
      });
    });
  }
};
export {
  SDXL
};
