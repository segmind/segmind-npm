"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
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

// index.ts
var csv_to_prismadb_exports = {};
__export(csv_to_prismadb_exports, {
  AllInOnePixel: () => AllInOnePixel,
  BgRemoval: () => BgRemoval,
  Cartoon: () => Cartoon,
  Codeformer: () => Codeformer,
  Colorful: () => Colorful,
  Controlnet: () => Controlnet,
  CuteRichStyle: () => CuteRichStyle,
  CyberRealistic: () => CyberRealistic,
  DeepSpacedDiffusion: () => DeepSpacedDiffusion,
  Dreamshaper: () => Dreamshaper,
  DvArch: () => DvArch,
  EdgeOfRealism: () => EdgeOfRealism,
  EpicRealism: () => EpicRealism,
  Esrgan: () => Esrgan,
  Faceswap: () => Faceswap,
  FantassifiedIcons: () => FantassifiedIcons,
  Flat2D: () => Flat2D,
  FruitFusion: () => FruitFusion,
  Icbinp: () => Icbinp,
  Img2Img: () => Img2Img,
  Inpainting: () => Inpainting,
  Juggernaut: () => Juggernaut,
  Kandinsky: () => Kandinsky,
  Majicmix: () => Majicmix,
  Manmarumix: () => Manmarumix,
  Mix526: () => Mix526,
  Paragon: () => Paragon,
  PotraitSD: () => PotraitSD,
  QRGenerator: () => QRGenerator,
  RCNZ: () => RCNZ,
  RPG: () => RPG,
  RealisticVision: () => RealisticVision,
  Reliberate: () => Reliberate,
  Revanimated: () => Revanimated,
  SDOutpaint: () => SDOutpaint,
  SDXL: () => SDXL,
  Samaritan: () => Samaritan,
  SciFi: () => SciFi,
  SegmentAnything: () => SegmentAnything,
  SmallSD: () => SmallSD,
  TinySD: () => TinySD,
  Word2Img: () => Word2Img
});
module.exports = __toCommonJS(csv_to_prismadb_exports);

// src/SDXL.ts
var import_axios = __toESM(require("axios"));
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
      return (0, import_axios.default)({
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
var import_axios2 = __toESM(require("axios"));
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
      return (0, import_axios2.default)({
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
var import_axios3 = __toESM(require("axios"));
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
      return (0, import_axios3.default)({
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
var import_axios4 = __toESM(require("axios"));
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
      return (0, import_axios4.default)({
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
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var import_axios5 = __toESM(require("axios"));
function toB64(imgPath) {
  const data = import_fs.default.readFileSync(import_path.default.resolve(imgPath));
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
      return (0, import_axios5.default)({
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
var import_axios6 = __toESM(require("axios"));
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
      return (0, import_axios6.default)({
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
var import_fs2 = __toESM(require("fs"));
var import_path2 = __toESM(require("path"));
var import_axios7 = __toESM(require("axios"));
function toB642(imgPath) {
  const data = import_fs2.default.readFileSync(import_path2.default.resolve(imgPath));
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
      return (0, import_axios7.default)({
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
var import_axios8 = __toESM(require("axios"));
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
      return (0, import_axios8.default)({
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
var import_fs3 = __toESM(require("fs"));
var import_path3 = __toESM(require("path"));
var import_axios9 = __toESM(require("axios"));
function toB643(imgPath) {
  const data = import_fs3.default.readFileSync(import_path3.default.resolve(imgPath));
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
      return (0, import_axios9.default)({
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
var import_axios10 = __toESM(require("axios"));
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
      return (0, import_axios10.default)({
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
var import_axios11 = __toESM(require("axios"));
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
      return (0, import_axios11.default)({
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
var import_axios12 = __toESM(require("axios"));
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
      return (0, import_axios12.default)({
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
var import_axios13 = __toESM(require("axios"));
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
      return (0, import_axios13.default)({
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
var import_axios14 = __toESM(require("axios"));
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
      return (0, import_axios14.default)({
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
var import_axios15 = __toESM(require("axios"));
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
      return (0, import_axios15.default)({
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
var import_axios16 = __toESM(require("axios"));
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
      return (0, import_axios16.default)({
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
var import_fs4 = __toESM(require("fs"));
var import_path4 = __toESM(require("path"));
var import_axios17 = __toESM(require("axios"));
function toB644(imgPath) {
  const data = import_fs4.default.readFileSync(import_path4.default.resolve(imgPath));
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
      return (0, import_axios17.default)({
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
var import_fs5 = __toESM(require("fs"));
var import_path5 = __toESM(require("path"));
var import_axios18 = __toESM(require("axios"));
function toB645(imgPath) {
  const data = import_fs5.default.readFileSync(import_path5.default.resolve(imgPath));
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
      return (0, import_axios18.default)({
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
var import_axios19 = __toESM(require("axios"));
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
      return (0, import_axios19.default)({
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
var import_axios20 = __toESM(require("axios"));
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
      return (0, import_axios20.default)({
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
var import_axios21 = __toESM(require("axios"));
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
      return (0, import_axios21.default)({
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
var import_fs6 = __toESM(require("fs"));
var import_path6 = __toESM(require("path"));
var import_axios22 = __toESM(require("axios"));
function toB646(imgPath) {
  const data = import_fs6.default.readFileSync(import_path6.default.resolve(imgPath));
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
      return (0, import_axios22.default)({
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
var import_fs7 = __toESM(require("fs"));
var import_path7 = __toESM(require("path"));
var import_axios23 = __toESM(require("axios"));
function toB647(imgPath) {
  const data = import_fs7.default.readFileSync(import_path7.default.resolve(imgPath));
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
      return (0, import_axios23.default)({
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
var import_axios24 = __toESM(require("axios"));
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
      return (0, import_axios24.default)({
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
var import_axios25 = __toESM(require("axios"));
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
      return (0, import_axios25.default)({
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
var import_axios26 = __toESM(require("axios"));
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
      return (0, import_axios26.default)({
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
var import_axios27 = __toESM(require("axios"));
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
      return (0, import_axios27.default)({
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
var import_axios28 = __toESM(require("axios"));
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
      return (0, import_axios28.default)({
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
var import_axios29 = __toESM(require("axios"));
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
      return (0, import_axios29.default)({
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
var import_axios30 = __toESM(require("axios"));
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
      return (0, import_axios30.default)({
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
var import_axios31 = __toESM(require("axios"));
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
      return (0, import_axios31.default)({
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
var import_axios32 = __toESM(require("axios"));
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
      return (0, import_axios32.default)({
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
var import_axios33 = __toESM(require("axios"));
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
      return (0, import_axios33.default)({
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
var import_axios34 = __toESM(require("axios"));
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
      return (0, import_axios34.default)({
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
var import_axios35 = __toESM(require("axios"));
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
      return (0, import_axios35.default)({
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
var import_fs8 = __toESM(require("fs"));
var import_path8 = __toESM(require("path"));
var import_axios36 = __toESM(require("axios"));
function toB648(imgPath) {
  const data = import_fs8.default.readFileSync(import_path8.default.resolve(imgPath));
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
      return (0, import_axios36.default)({
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
var import_axios37 = __toESM(require("axios"));
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
      return (0, import_axios37.default)({
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
var import_axios38 = __toESM(require("axios"));
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
      return (0, import_axios38.default)({
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
var import_fs9 = __toESM(require("fs"));
var import_path9 = __toESM(require("path"));
var import_axios39 = __toESM(require("axios"));
function toB649(imgPath) {
  const data = import_fs9.default.readFileSync(import_path9.default.resolve(imgPath));
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
      return (0, import_axios39.default)({
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
var import_axios40 = __toESM(require("axios"));
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
      return (0, import_axios40.default)({
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
var import_axios41 = __toESM(require("axios"));
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
      return (0, import_axios41.default)({
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
var import_fs10 = __toESM(require("fs"));
var import_path10 = __toESM(require("path"));
var import_axios42 = __toESM(require("axios"));
function toB6410(imgPath) {
  const data = import_fs10.default.readFileSync(import_path10.default.resolve(imgPath));
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
      return (0, import_axios42.default)({
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
});
