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
        seed: data.seed || Math.floor(Math.random() * 1e9),
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
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-api-key": `${this.apiKey}`
        }
      });
    });
  }
};

// src/Flat2D.ts
import axios2 from "axios";
var Flat2D = class {
  constructor(apiKey = null) {
    this.url = "https://api.segmind.com/v1/sd1.5-flat2d";
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
        num_inference_steps: data.num_inference_steps || 20,
        seed: data.seed || Math.floor(Math.random() * 1e9),
        img_width: data.img_width || 1024,
        img_height: data.img_height || 1024,
        scheduler: data.scheduler || "dpmpp_2m",
        guidance_scale: data.guidance_scale || 7.5,
        base64: data.base64 || false
      };
      return axios2({
        url: this.url,
        data: JSON.stringify(data),
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-api-key": `${this.apiKey}`
        }
      });
    });
  }
};

// src/526Mix.ts
import axios3 from "axios";
var Mix526 = class {
  constructor(apiKey = null) {
    this.url = "https://api.segmind.com/v1/sd1.5-526mix";
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
        num_inference_steps: data.num_inference_steps || 20,
        seed: data.seed || Math.floor(Math.random() * 1e9),
        img_width: data.img_width || 1024,
        img_height: data.img_height || 1024,
        scheduler: data.scheduler || "dpmpp_2m",
        guidance_scale: data.guidance_scale || 7.5,
        base64: data.base64 || false
      };
      return axios3({
        url: this.url,
        data: JSON.stringify(data),
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-api-key": `${this.apiKey}`
        }
      });
    });
  }
};

// src/AllInOnePixel.ts
import axios4 from "axios";
var AllInOnePixel = class {
  constructor(apiKey = null) {
    this.url = "https://api.segmind.com/v1/sd1.5-allinonepixel";
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
        num_inference_steps: data.num_inference_steps || 20,
        seed: data.seed || Math.floor(Math.random() * 1e9),
        img_width: data.img_width || 1024,
        img_height: data.img_height || 1024,
        scheduler: data.scheduler || "dpmpp_2m",
        guidance_scale: data.guidance_scale || 7.5,
        base64: data.base64 || false
      };
      return axios4({
        url: this.url,
        data: JSON.stringify(data),
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-api-key": `${this.apiKey}`
        }
      });
    });
  }
};

// src/BgRemoval.ts
import fs from "fs";
import path from "path";
import axios5 from "axios";
function toB64(imgPath) {
  const data = fs.readFileSync(path.resolve(imgPath));
  return Buffer.from(data).toString("base64");
}
var BgRemoval = class {
  constructor(apiKey = null) {
    this.url = "https://api.segmind.com/v1/bg-removal";
    this.apiKey = apiKey;
  }
  generate(data) {
    return __async(this, null, function* () {
      if (this.apiKey === null)
        throw new Error("Not authenticated. Please add API Key.");
      if (data.image === "") {
        throw new Error("Please enter image file location");
      }
      data = {
        image: toB64(data.image || "https://www.segmind.com/codeformer_input.png"),
        method: data.method || "object"
      };
      return axios5({
        url: this.url,
        data: JSON.stringify(data),
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-api-key": `${this.apiKey}`
        }
      });
    });
  }
};

// src/Cartoon.ts
import axios6 from "axios";
var Cartoon = class {
  constructor(apiKey = null) {
    this.url = "https://api.segmind.com/v1/sd1.5-disneyB";
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
        num_inference_steps: data.num_inference_steps || 20,
        seed: data.seed || Math.floor(Math.random() * 1e9),
        img_width: data.img_width || 1024,
        img_height: data.img_height || 1024,
        scheduler: data.scheduler || "dpmpp_2m",
        guidance_scale: data.guidance_scale || 7.5,
        base64: data.base64 || false
      };
      return axios6({
        url: this.url,
        data: JSON.stringify(data),
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-api-key": `${this.apiKey}`
        }
      });
    });
  }
};

// src/Codeformer.ts
import fs2 from "fs";
import path2 from "path";
import axios7 from "axios";
function toB642(imgPath) {
  const data = fs2.readFileSync(path2.resolve(imgPath));
  return Buffer.from(data).toString("base64");
}
var Codeformer = class {
  constructor(apiKey = null) {
    this.url = "https://api.segmind.com/v1/codeformer";
    this.apiKey = apiKey;
  }
  generate(data) {
    return __async(this, null, function* () {
      if (this.apiKey === null)
        throw new Error("Not authenticated. Please add API Key.");
      if (data.image === "") {
        throw new Error("Please enter image file location");
      }
      data = {
        image: toB642(data.image || "https://www.segmind.com/codeformer_input.png"),
        scale: data.scale || 1,
        fidelity: data.fidelity || 0.5,
        bg: data.bg || true,
        face: data.face || true
      };
      return axios7({
        url: this.url,
        data: JSON.stringify(data),
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-api-key": `${this.apiKey}`
        }
      });
    });
  }
};

// src/Colorful.ts
import axios8 from "axios";
var Colorful = class {
  constructor(apiKey = null) {
    this.url = "https://api.segmind.com/v1/sd1.5-colorful";
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
        num_inference_steps: data.num_inference_steps || 20,
        seed: data.seed || Math.floor(Math.random() * 1e9),
        img_width: data.img_width || 1024,
        img_height: data.img_height || 1024,
        scheduler: data.scheduler || "dpmpp_2m",
        guidance_scale: data.guidance_scale || 7.5,
        base64: data.base64 || false
      };
      return axios8({
        url: this.url,
        data: JSON.stringify(data),
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-api-key": `${this.apiKey}`
        }
      });
    });
  }
};

// src/Controlnet.ts
import fs3 from "fs";
import path3 from "path";
import axios9 from "axios";
function toB643(imgPath) {
  const data = fs3.readFileSync(path3.resolve(imgPath));
  return Buffer.from(data).toString("base64");
}
var Controlnet = class {
  constructor(apiKey = null, type) {
    this.url = `https://api.segmind.com/v1/sd1.5-controlnet-${type}`;
    this.apiKey = apiKey;
  }
  generate(data) {
    return __async(this, null, function* () {
      if (this.apiKey === null)
        throw new Error("Not authenticated. Please add API Key.");
      if (data.prompt === "")
        throw new Error("Please enter a prompt");
      data = {
        image: toB643(data.image || "https://www.segmind.com/fasion2.jpeg"),
        prompt: data.prompt,
        negativePrompt: data.negativePrompt || "out of frame, duplicate, watermark, signature, text, error, deformed",
        samples: data.samples || 1,
        scheduler: data.scheduler || "UniPC",
        num_inference_steps: data.num_inference_steps || 20,
        guidance_scale: data.guidance_scale || 7.5,
        seed: data.seed || Math.floor(Math.random() * 1e9),
        strength: data.strength || 1,
        base64: data.base64 || false
      };
      return axios9({
        url: this.url,
        data: JSON.stringify(data),
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-api-key": `${this.apiKey}`
        }
      });
    });
  }
};

// src/CuteRichStyle.ts
import axios10 from "axios";
var CuteRichStyle = class {
  constructor(apiKey = null) {
    this.url = "https://api.segmind.com/v1/sd1.5-cuterichstyle";
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
        num_inference_steps: data.num_inference_steps || 20,
        seed: data.seed || Math.floor(Math.random() * 1e9),
        img_width: data.img_width || 1024,
        img_height: data.img_height || 1024,
        scheduler: data.scheduler || "dpmpp_2m",
        guidance_scale: data.guidance_scale || 7.5,
        base64: data.base64 || false
      };
      return axios10({
        url: this.url,
        data: JSON.stringify(data),
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-api-key": `${this.apiKey}`
        }
      });
    });
  }
};

// src/CyberRealistic.ts
import axios11 from "axios";
var CyberRealistic = class {
  constructor(apiKey = null) {
    this.url = "https://api.segmind.com/v1/sd1.5-cyberrealistic";
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
        num_inference_steps: data.num_inference_steps || 20,
        seed: data.seed || Math.floor(Math.random() * 1e9),
        img_width: data.img_width || 1024,
        img_height: data.img_height || 1024,
        scheduler: data.scheduler || "dpmpp_2m",
        guidance_scale: data.guidance_scale || 7.5,
        base64: data.base64 || false
      };
      return axios11({
        url: this.url,
        data: JSON.stringify(data),
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-api-key": `${this.apiKey}`
        }
      });
    });
  }
};

// src/DeepSpacedDiffusion.ts
import axios12 from "axios";
var DeepSpacedDiffusion = class {
  constructor(apiKey = null) {
    this.url = "https://api.segmind.com/v1/sd1.5-deepspacediffusion";
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
        num_inference_steps: data.num_inference_steps || 20,
        seed: data.seed || Math.floor(Math.random() * 1e9),
        img_width: data.img_width || 1024,
        img_height: data.img_height || 1024,
        scheduler: data.scheduler || "dpmpp_2m",
        guidance_scale: data.guidance_scale || 7.5,
        base64: data.base64 || false
      };
      return axios12({
        url: this.url,
        data: JSON.stringify(data),
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-api-key": `${this.apiKey}`
        }
      });
    });
  }
};

// src/Dreamshaper.ts
import axios13 from "axios";
var Dreamshaper = class {
  constructor(apiKey = null) {
    this.url = "https://api.segmind.com/v1/sd1.5-dreamshaper";
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
        num_inference_steps: data.num_inference_steps || 20,
        seed: data.seed || Math.floor(Math.random() * 1e9),
        img_width: data.img_width || 1024,
        img_height: data.img_height || 1024,
        scheduler: data.scheduler || "dpmpp_2m",
        guidance_scale: data.guidance_scale || 7.5,
        base64: data.base64 || false
      };
      return axios13({
        url: this.url,
        data: JSON.stringify(data),
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-api-key": `${this.apiKey}`
        }
      });
    });
  }
};

// src/DvArch.ts
import axios14 from "axios";
var DvArch = class {
  constructor(apiKey = null) {
    this.url = "https://api.segmind.com/v1/sd1.5-dvrach";
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
        num_inference_steps: data.num_inference_steps || 20,
        seed: data.seed || Math.floor(Math.random() * 1e9),
        img_width: data.img_width || 1024,
        img_height: data.img_height || 1024,
        scheduler: data.scheduler || "dpmpp_2m",
        guidance_scale: data.guidance_scale || 7.5,
        base64: data.base64 || false
      };
      return axios14({
        url: this.url,
        data: JSON.stringify(data),
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-api-key": `${this.apiKey}`
        }
      });
    });
  }
};

// src/EdgeOfRealism.ts
import axios15 from "axios";
var EdgeOfRealism = class {
  constructor(apiKey = null) {
    this.url = "https://api.segmind.com/v1/sd1.5-edgeofrealism";
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
        num_inference_steps: data.num_inference_steps || 20,
        seed: data.seed || Math.floor(Math.random() * 1e9),
        img_width: data.img_width || 1024,
        img_height: data.img_height || 1024,
        scheduler: data.scheduler || "dpmpp_2m",
        guidance_scale: data.guidance_scale || 7.5,
        base64: data.base64 || false
      };
      return axios15({
        url: this.url,
        data: JSON.stringify(data),
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-api-key": `${this.apiKey}`
        }
      });
    });
  }
};

// src/EpicRealism.ts
import axios16 from "axios";
var EpicRealism = class {
  constructor(apiKey = null) {
    this.url = "https://api.segmind.com/v1/sd1.5-epicrealism";
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
        num_inference_steps: data.num_inference_steps || 20,
        seed: data.seed || Math.floor(Math.random() * 1e9),
        img_width: data.img_width || 1024,
        img_height: data.img_height || 1024,
        scheduler: data.scheduler || "dpmpp_2m",
        guidance_scale: data.guidance_scale || 7.5,
        base64: data.base64 || false
      };
      return axios16({
        url: this.url,
        data: JSON.stringify(data),
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-api-key": `${this.apiKey}`
        }
      });
    });
  }
};

// src/Esrgan.ts
import fs4 from "fs";
import path4 from "path";
import axios17 from "axios";
function toB644(imgPath) {
  const data = fs4.readFileSync(path4.resolve(imgPath));
  return Buffer.from(data).toString("base64");
}
var Esrgan = class {
  constructor(apiKey = null) {
    this.url = "https://api.segmind.com/v1/esrgan";
    this.apiKey = apiKey;
  }
  generate(data) {
    return __async(this, null, function* () {
      if (this.apiKey === null)
        throw new Error("Not authenticated. Please add API Key.");
      if (data.image === "")
        throw new Error("Please enter a valid image path");
      data = {
        image: toB644(data.image || "https://www.segmind.com/butterfly.png"),
        scale: data.scale || 2
      };
      return axios17({
        url: this.url,
        data: JSON.stringify(data),
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-api-key": `${this.apiKey}`
        }
      });
    });
  }
};

// src/Faceswap.ts
import fs5 from "fs";
import path5 from "path";
import axios18 from "axios";
function toB645(imgPath) {
  const data = fs5.readFileSync(path5.resolve(imgPath));
  return Buffer.from(data).toString("base64");
}
var Faceswap = class {
  constructor(apiKey = null) {
    this.url = "https://api.segmind.com/v1/sd2.1-faceswapper";
    this.apiKey = apiKey;
  }
  generate(data) {
    return __async(this, null, function* () {
      if (this.apiKey === null)
        throw new Error("Not authenticated. Please add API Key.");
      if (data.input_face_image === "" || data.output_face_image === "") {
        throw new Error("Please enter image file location");
      }
      data = {
        input_face_image: toB645(data.input_face_image || "https://www.segmind.com/elon.jpg"),
        output_face_image: toB645(data.output_face_image || "https://www.segmind.com/burn.gif"),
        file_type: data.file_type || "gif"
      };
      return axios18({
        url: this.url,
        data: JSON.stringify(data),
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-api-key": `${this.apiKey}`
        }
      });
    });
  }
};

// src/FantassifiedIcons.ts
import axios19 from "axios";
var FantassifiedIcons = class {
  constructor(apiKey = null) {
    this.url = "https://api.segmind.com/v1/sd1.5-fantassifiedicons";
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
        num_inference_steps: data.num_inference_steps || 20,
        seed: data.seed || Math.floor(Math.random() * 1e9),
        img_width: data.img_width || 1024,
        img_height: data.img_height || 1024,
        scheduler: data.scheduler || "dpmpp_2m",
        guidance_scale: data.guidance_scale || 7.5,
        base64: data.base64 || false
      };
      return axios19({
        url: this.url,
        data: JSON.stringify(data),
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-api-key": `${this.apiKey}`
        }
      });
    });
  }
};

// src/FruitFusion.ts
import axios20 from "axios";
var FruitFusion = class {
  constructor(apiKey = null) {
    this.url = "https://api.segmind.com/v1/sd1.5-fruitfusion";
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
        num_inference_steps: data.num_inference_steps || 20,
        seed: data.seed || Math.floor(Math.random() * 1e9),
        img_width: data.img_width || 1024,
        img_height: data.img_height || 1024,
        scheduler: data.scheduler || "dpmpp_2m",
        guidance_scale: data.guidance_scale || 7.5,
        base64: data.base64 || false
      };
      return axios20({
        url: this.url,
        data: JSON.stringify(data),
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-api-key": `${this.apiKey}`
        }
      });
    });
  }
};

// src/Icbinp.ts
import axios21 from "axios";
var Icbinp = class {
  constructor(apiKey = null) {
    this.url = "https://api.segmind.com/v1/sd1.5-icbinp";
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
        num_inference_steps: data.num_inference_steps || 20,
        seed: data.seed || Math.floor(Math.random() * 1e9),
        img_width: data.img_width || 1024,
        img_height: data.img_height || 1024,
        scheduler: data.scheduler || "dpmpp_2m",
        guidance_scale: data.guidance_scale || 7.5,
        base64: data.base64 || false
      };
      return axios21({
        url: this.url,
        data: JSON.stringify(data),
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-api-key": `${this.apiKey}`
        }
      });
    });
  }
};

// src/Img2Img.ts
import fs6 from "fs";
import path6 from "path";
import axios22 from "axios";
function toB646(imgPath) {
  const data = fs6.readFileSync(path6.resolve(imgPath));
  return Buffer.from(data).toString("base64");
}
var Img2Img = class {
  constructor(apiKey = null) {
    this.url = "https://api.segmind.com/v1/sd1.5-img2img";
    this.apiKey = apiKey;
  }
  generate(data) {
    return __async(this, null, function* () {
      if (this.apiKey === null)
        throw new Error("Not authenticated. Please add API Key.");
      if (data.prompt === "")
        throw new Error("Please enter a prompt");
      data = {
        image: toB646(data.image || "https://www.segmind.com/sd-img2img-input.jpeg"),
        prompt: data.prompt,
        negativePrompt: data.negativePrompt || "out of frame, duplicate, watermark, signature, text, error, deformed",
        samples: data.samples || 1,
        scheduler: data.scheduler || "UniPC",
        num_inference_steps: data.num_inference_steps || 20,
        guidance_scale: data.guidance_scale || 7.5,
        seed: data.seed || Math.floor(Math.random() * 1e9),
        strength: data.strength || 1,
        img_width: data.img_width || 512,
        img_height: data.img_height || 512,
        base64: data.base64 || false
      };
      return axios22({
        url: this.url,
        data: JSON.stringify(data),
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-api-key": `${this.apiKey}`
        }
      });
    });
  }
};

// src/Inpainting.ts
import fs7 from "fs";
import path7 from "path";
import axios23 from "axios";
function toB647(imgPath) {
  const data = fs7.readFileSync(path7.resolve(imgPath));
  return Buffer.from(data).toString("base64");
}
var Inpainting = class {
  constructor(apiKey = null) {
    this.url = "https://api.segmind.com/v1/sd1.5-inpainting";
    this.apiKey = apiKey;
  }
  generate(data) {
    return __async(this, null, function* () {
      if (this.apiKey === null)
        throw new Error("Not authenticated. Please add API Key.");
      if (data.prompt === "")
        throw new Error("Please enter a prompt");
      data = {
        image: toB647(data.image || "https://www.segmind.com/inpainting-input-image.jpeg"),
        mask: toB647(data.mask || "https://www.segmind.com/inpainting-input-mask.jpeg"),
        prompt: data.prompt,
        negativePrompt: data.negativePrompt || "out of frame, duplicate, watermark, signature, text, error, deformed",
        samples: data.samples || 1,
        scheduler: data.scheduler || "UniPC",
        num_inference_steps: data.num_inference_steps || 20,
        guidance_scale: data.guidance_scale || 7.5,
        seed: data.seed || Math.floor(Math.random() * 1e9),
        strength: data.strength || 1,
        img_width: data.img_width || 512,
        img_height: data.img_height || 512
      };
      return axios23({
        url: this.url,
        data: JSON.stringify(data),
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-api-key": `${this.apiKey}`
        }
      });
    });
  }
};

// src/Juggernaut.ts
import axios24 from "axios";
var Juggernaut = class {
  constructor(apiKey = null) {
    this.url = "https://api.segmind.com/v1/sd1.5-juggernaut";
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
        num_inference_steps: data.num_inference_steps || 20,
        seed: data.seed || Math.floor(Math.random() * 1e9),
        img_width: data.img_width || 1024,
        img_height: data.img_height || 1024,
        scheduler: data.scheduler || "dpmpp_2m",
        guidance_scale: data.guidance_scale || 7.5,
        base64: data.base64 || false
      };
      return axios24({
        url: this.url,
        data: JSON.stringify(data),
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-api-key": `${this.apiKey}`
        }
      });
    });
  }
};

// src/Kandinsky.ts
import axios25 from "axios";
var Kandinsky = class {
  constructor(apiKey = null) {
    this.url = "https://api.segmind.com/v1/kandinsky2.2-txt2img";
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
        num_inference_steps: data.num_inference_steps || 20,
        seed: data.seed || Math.floor(Math.random() * 1e9),
        img_width: data.img_width || 1024,
        img_height: data.img_height || 1024,
        prior_steps: data.prior_steps || 25,
        base64: data.base64 || false
      };
      return axios25({
        url: this.url,
        data: JSON.stringify(data),
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-api-key": `${this.apiKey}`
        }
      });
    });
  }
};

// src/Majicmix.ts
import axios26 from "axios";
var Majicmix = class {
  constructor(apiKey = null) {
    this.url = "https://api.segmind.com/v1/sd1.5-majicmix";
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
        num_inference_steps: data.num_inference_steps || 20,
        seed: data.seed || Math.floor(Math.random() * 1e9),
        img_width: data.img_width || 1024,
        img_height: data.img_height || 1024,
        scheduler: data.scheduler || "dpmpp_2m",
        guidance_scale: data.guidance_scale || 7.5,
        base64: data.base64 || false
      };
      return axios26({
        url: this.url,
        data: JSON.stringify(data),
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-api-key": `${this.apiKey}`
        }
      });
    });
  }
};

// src/Manmarumix.ts
import axios27 from "axios";
var Manmarumix = class {
  constructor(apiKey = null) {
    this.url = "https://api.segmind.com/v1/sd1.5-manmarumix";
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
        num_inference_steps: data.num_inference_steps || 20,
        seed: data.seed || Math.floor(Math.random() * 1e9),
        img_width: data.img_width || 1024,
        img_height: data.img_height || 1024,
        scheduler: data.scheduler || "dpmpp_2m",
        guidance_scale: data.guidance_scale || 7.5,
        base64: data.base64 || false
      };
      return axios27({
        url: this.url,
        data: JSON.stringify(data),
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-api-key": `${this.apiKey}`
        }
      });
    });
  }
};

// src/Paragon.ts
import axios28 from "axios";
var Paragon = class {
  constructor(apiKey = null) {
    this.url = "https://api.segmind.com/v1/sd1.5-paragon";
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
        num_inference_steps: data.num_inference_steps || 20,
        seed: data.seed || Math.floor(Math.random() * 1e9),
        img_width: data.img_width || 1024,
        img_height: data.img_height || 1024,
        scheduler: data.scheduler || "dpmpp_2m",
        guidance_scale: data.guidance_scale || 7.5,
        base64: data.base64 || false
      };
      return axios28({
        url: this.url,
        data: JSON.stringify(data),
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-api-key": `${this.apiKey}`
        }
      });
    });
  }
};

// src/PotraitSD.ts
import axios29 from "axios";
var PotraitSD = class {
  constructor(apiKey = null) {
    this.url = "https://api.segmind.com/v1/potraitsd1.5-txt2img";
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
        scheduler: data.scheduler || "UniPC",
        num_inference_steps: data.num_inference_steps || 20,
        guidance_scale: data.guidance_scale || 7.5,
        seed: data.seed || Math.floor(Math.random() * 1e9),
        img_width: data.img_width || 1024,
        img_height: data.img_height || 1024,
        base64: data.base64 || false
      };
      return axios29({
        url: this.url,
        data: JSON.stringify(data),
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-api-key": `${this.apiKey}`
        }
      });
    });
  }
};

// src/QRGenerator.ts
import axios30 from "axios";
var QRGenerator = class {
  constructor(apiKey = null) {
    this.url = "https://api.segmind.com/v1/qrsd1.5-txt2img";
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
        scheduler: data.scheduler || "UniPC",
        num_inference_steps: data.num_inference_steps || 20,
        guidance_scale: data.guidance_scale || 7.5,
        seed: data.seed || Math.floor(Math.random() * 1e9),
        presets: data.presets || "presetOne",
        control_scale: data.control_scale || 1.8,
        control_start: data.control_start || 0.19,
        control_end: data.control_end || 1,
        qr_text: data.qr_text || "www.segmind.com",
        invert: data.invert || false,
        size: data.size || 768,
        base64: data.base64 || false
      };
      return axios30({
        url: this.url,
        data: JSON.stringify(data),
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-api-key": `${this.apiKey}`
        }
      });
    });
  }
};

// src/RCNZ.ts
import axios31 from "axios";
var RCNZ = class {
  constructor(apiKey = null) {
    this.url = "https://api.segmind.com/v1/sd1.5-rcnz";
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
        num_inference_steps: data.num_inference_steps || 20,
        seed: data.seed || Math.floor(Math.random() * 1e9),
        img_width: data.img_width || 1024,
        img_height: data.img_height || 1024,
        scheduler: data.scheduler || "dpmpp_2m",
        guidance_scale: data.guidance_scale || 7.5,
        base64: data.base64 || false
      };
      return axios31({
        url: this.url,
        data: JSON.stringify(data),
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-api-key": `${this.apiKey}`
        }
      });
    });
  }
};

// src/RPG.ts
import axios32 from "axios";
var RPG = class {
  constructor(apiKey = null) {
    this.url = "https://api.segmind.com/v1/sd1.5-rpg";
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
        num_inference_steps: data.num_inference_steps || 20,
        seed: data.seed || Math.floor(Math.random() * 1e9),
        img_width: data.img_width || 1024,
        img_height: data.img_height || 1024,
        scheduler: data.scheduler || "dpmpp_2m",
        guidance_scale: data.guidance_scale || 7.5,
        base64: data.base64 || false
      };
      return axios32({
        url: this.url,
        data: JSON.stringify(data),
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-api-key": `${this.apiKey}`
        }
      });
    });
  }
};

// src/RealisticVision.ts
import axios33 from "axios";
var RealisticVision = class {
  constructor(apiKey = null) {
    this.url = "https://api.segmind.com/v1/sd1.5-realisticvision";
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
        num_inference_steps: data.num_inference_steps || 20,
        seed: data.seed || Math.floor(Math.random() * 1e9),
        img_width: data.img_width || 1024,
        img_height: data.img_height || 1024,
        scheduler: data.scheduler || "dpmpp_2m",
        guidance_scale: data.guidance_scale || 7.5,
        base64: data.base64 || false
      };
      return axios33({
        url: this.url,
        data: JSON.stringify(data),
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-api-key": `${this.apiKey}`
        }
      });
    });
  }
};

// src/Reliberate.ts
import axios34 from "axios";
var Reliberate = class {
  constructor(apiKey = null) {
    this.url = "https://api.segmind.com/v1/sd1.5-reliberate";
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
        num_inference_steps: data.num_inference_steps || 20,
        seed: data.seed || Math.floor(Math.random() * 1e9),
        img_width: data.img_width || 1024,
        img_height: data.img_height || 1024,
        scheduler: data.scheduler || "dpmpp_2m",
        guidance_scale: data.guidance_scale || 7.5,
        base64: data.base64 || false
      };
      return axios34({
        url: this.url,
        data: JSON.stringify(data),
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-api-key": `${this.apiKey}`
        }
      });
    });
  }
};

// src/Revanimated.ts
import axios35 from "axios";
var Revanimated = class {
  constructor(apiKey = null) {
    this.url = "https://api.segmind.com/v1/sd1.5-revanimated";
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
        num_inference_steps: data.num_inference_steps || 20,
        seed: data.seed || Math.floor(Math.random() * 1e9),
        img_width: data.img_width || 1024,
        img_height: data.img_height || 1024,
        scheduler: data.scheduler || "dpmpp_2m",
        guidance_scale: data.guidance_scale || 7.5,
        base64: data.base64 || false
      };
      return axios35({
        url: this.url,
        data: JSON.stringify(data),
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-api-key": `${this.apiKey}`
        }
      });
    });
  }
};

// src/SDOutpaint.ts
import fs8 from "fs";
import path8 from "path";
import axios36 from "axios";
function toB648(imgPath) {
  const data = fs8.readFileSync(path8.resolve(imgPath));
  return Buffer.from(data).toString("base64");
}
var SDOutpaint = class {
  constructor(apiKey = null) {
    this.url = "https://api.segmind.com/v1/sd1.5-outpaint";
    this.apiKey = apiKey;
  }
  generate(data) {
    return __async(this, null, function* () {
      if (this.apiKey === null)
        throw new Error("Not authenticated. Please add API Key.");
      if (data.prompt === "")
        throw new Error("Please enter a prompt");
      data = {
        image: toB648(data.image || "https://www.segmind.com/image5.png"),
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
        seed: data.seed || Math.floor(Math.random() * 1e9)
      };
      return axios36({
        url: this.url,
        data: JSON.stringify(data),
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-api-key": `${this.apiKey}`
        }
      });
    });
  }
};

// src/Samaritan.ts
import axios37 from "axios";
var Samaritan = class {
  constructor(apiKey = null) {
    this.url = "https://api.segmind.com/v1/sd1.5-samaritan-3d";
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
        num_inference_steps: data.num_inference_steps || 20,
        seed: data.seed || Math.floor(Math.random() * 1e9),
        img_width: data.img_width || 1024,
        img_height: data.img_height || 1024,
        scheduler: data.scheduler || "dpmpp_2m",
        guidance_scale: data.guidance_scale || 7.5,
        base64: data.base64 || false
      };
      return axios37({
        url: this.url,
        data: JSON.stringify(data),
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-api-key": `${this.apiKey}`
        }
      });
    });
  }
};

// src/SciFi.ts
import axios38 from "axios";
var SciFi = class {
  constructor(apiKey = null) {
    this.url = "https://api.segmind.com/v1/sd1.5-scifi";
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
        num_inference_steps: data.num_inference_steps || 20,
        seed: data.seed || Math.floor(Math.random() * 1e9),
        img_width: data.img_width || 1024,
        img_height: data.img_height || 1024,
        scheduler: data.scheduler || "dpmpp_2m",
        guidance_scale: data.guidance_scale || 7.5,
        base64: data.base64 || false
      };
      return axios38({
        url: this.url,
        data: JSON.stringify(data),
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-api-key": `${this.apiKey}`
        }
      });
    });
  }
};

// src/SegmentAnything.ts
import fs9 from "fs";
import path9 from "path";
import axios39 from "axios";
function toB649(imgPath) {
  const data = fs9.readFileSync(path9.resolve(imgPath));
  return Buffer.from(data).toString("base64");
}
var SegmentAnything = class {
  constructor(apiKey = null) {
    this.url = "https://api.segmind.com/v1/sam-img2img";
    this.apiKey = apiKey;
  }
  generate(data) {
    return __async(this, null, function* () {
      if (this.apiKey === null)
        throw new Error("Not authenticated. Please add API Key.");
      if (data.image === "") {
        throw new Error("Please enter image file location");
      }
      data = {
        image: toB649(data.image || "https://www.segmind.com/kitchen.jpg")
      };
      return axios39({
        url: this.url,
        data: JSON.stringify(data),
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-api-key": `${this.apiKey}`
        }
      });
    });
  }
};

// src/SmallSD.ts
import axios40 from "axios";
var SmallSD = class {
  constructor(apiKey = null) {
    this.url = "https://api.segmind.com/v1/smallsd1.5-txt2img";
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
        scheduler: data.scheduler || "UniPC",
        num_inference_steps: data.num_inference_steps || 20,
        guidance_scale: data.guidance_scale || 7.5,
        seed: data.seed || Math.floor(Math.random() * 1e9),
        img_width: data.img_width || 1024,
        img_height: data.img_height || 1024,
        base64: data.base64 || false
      };
      return axios40({
        url: this.url,
        data: JSON.stringify(data),
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-api-key": `${this.apiKey}`
        }
      });
    });
  }
};

// src/TinySD.ts
import axios41 from "axios";
var TinySD = class {
  constructor(apiKey = null) {
    this.url = "https://api.segmind.com/v1/tinysd1.5-txt2img";
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
        scheduler: data.scheduler || "UniPC",
        num_inference_steps: data.num_inference_steps || 20,
        guidance_scale: data.guidance_scale || 7.5,
        seed: data.seed || Math.floor(Math.random() * 1e9),
        img_width: data.img_width || 1024,
        img_height: data.img_height || 1024,
        base64: data.base64 || false
      };
      return axios41({
        url: this.url,
        data: JSON.stringify(data),
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-api-key": `${this.apiKey}`
        }
      });
    });
  }
};

// src/Word2Img.ts
import fs10 from "fs";
import path10 from "path";
import axios42 from "axios";
function toB6410(imgPath) {
  const data = fs10.readFileSync(path10.resolve(imgPath));
  return Buffer.from(data).toString("base64");
}
var Word2Img = class {
  constructor(apiKey = null) {
    this.url = "https://api.segmind.com/v1/w2imgsd1.5-img2img";
    this.apiKey = apiKey;
  }
  generate(data) {
    return __async(this, null, function* () {
      if (this.apiKey === null)
        throw new Error("Not authenticated. Please add API Key.");
      if (data.prompt === "")
        throw new Error("Please enter a prompt");
      data = {
        image: toB6410(data.image || "https://www.segmind.com/word2img_input.png"),
        prompt: data.prompt,
        negativePrompt: data.negativePrompt || "out of frame, duplicate, watermark, signature, text, error, deformed",
        samples: data.samples || 1,
        scheduler: data.scheduler || "UniPC",
        num_inference_steps: data.num_inference_steps || 20,
        guidance_scale: data.guidance_scale || 7.5,
        seed: data.seed || Math.floor(Math.random() * 1e9),
        control_scale: data.control_scale || 1.8,
        control_start: data.control_start || 0.19,
        control_end: data.control_end || 1,
        size: data.size || 768,
        base64: data.base64 || false
      };
      return axios42({
        url: this.url,
        data: JSON.stringify(data),
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "x-api-key": `${this.apiKey}`
        }
      });
    });
  }
};
export {
  AllInOnePixel,
  BgRemoval,
  Cartoon,
  Codeformer,
  Colorful,
  Controlnet,
  CuteRichStyle,
  CyberRealistic,
  DeepSpacedDiffusion,
  Dreamshaper,
  DvArch,
  EdgeOfRealism,
  EpicRealism,
  Esrgan,
  Faceswap,
  FantassifiedIcons,
  Flat2D,
  FruitFusion,
  Icbinp,
  Img2Img,
  Inpainting,
  Juggernaut,
  Kandinsky,
  Majicmix,
  Manmarumix,
  Mix526,
  Paragon,
  PotraitSD,
  QRGenerator,
  RCNZ,
  RPG,
  RealisticVision,
  Reliberate,
  Revanimated,
  SDOutpaint,
  SDXL,
  Samaritan,
  SciFi,
  SegmentAnything,
  SmallSD,
  TinySD,
  Word2Img
};
