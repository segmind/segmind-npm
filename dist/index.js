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

// index.ts
var csv_to_prismadb_exports = {};
__export(csv_to_prismadb_exports, {
  SDXL: () => SDXL
});
module.exports = __toCommonJS(csv_to_prismadb_exports);

// src/SDXL.ts
var import_axios = __toESM(require("axios"));
var SDXL = class {
  constructor(apiKey = null) {
    this.url = "https://api.segmind.com/v1/sdxl1.0-txt2img";
    this.apiKey = apiKey;
    console.log("instantiatie class");
  }
  generate(data) {
    if (this.apiKey === null)
      throw new Error("Not authenticated. Please add API Key.");
    data.negativePrompt = data.negativePrompt || "out of frame, duplicate, watermark, signature, text, error, deformed", data.samples = data.samples || 1;
    data.style = data.style || "base";
    data.scheduler = data.scheduler || "UniPC";
    data.num_inference_steps = data.num_inference_steps || 20, data.guidance_scale = data.guidance_scale || 7.5, data.seed = Math.floor(Math.random() * 1e9), data.strength = data.strength || 0.75;
    data.img_width = data.img_width || 1024;
    data.img_height = data.img_height || 1024;
    data.refiner = data.refiner || true;
    data.high_noise_fraction = data.high_noise_fraction || 0.8;
    data.base64 = data.base64 || false;
    (0, import_axios.default)({
      url: this.url,
      data: JSON.stringify(data),
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": `${this.apiKey}`
      }
    }).then((response) => console.log(response.data));
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SDXL
});
