declare class SDXL {
    private url;
    private apiKey;
    constructor(apiKey?: string | null);
    generate(data: {
        prompt: string;
        negativePrompt?: string;
        style?: string;
        samples?: number;
        scheduler?: string;
        num_inference_steps?: number;
        guidance_scale?: number;
        seed?: number | null;
        strength?: number;
        img_height?: number;
        img_width?: number;
        refiner?: boolean;
        high_noise_fraction?: number;
        base64?: boolean;
    }): void;
}

export { SDXL };
