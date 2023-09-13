import * as axios from 'axios';

type SDXLType = {
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
};
declare class SDXL {
    private url;
    private apiKey;
    constructor(apiKey?: string | null);
    generate(data: SDXLType): Promise<axios.AxiosResponse<any, any>>;
}

type Flat2DType = {
    prompt: string;
    negativePrompt?: string;
    scheduler?: string;
    samples?: number;
    num_inference_steps?: number;
    guidance_scale?: number;
    seed?: number | null;
    img_height?: number;
    img_width?: number;
    base64?: boolean;
};
declare class Flat2D {
    private url;
    private apiKey;
    constructor(apiKey?: string | null);
    generate(data: Flat2DType): Promise<axios.AxiosResponse<any, any>>;
}

type Mix526Type = {
    prompt: string;
    negativePrompt?: string;
    scheduler?: string;
    samples?: number;
    num_inference_steps?: number;
    guidance_scale?: number;
    seed?: number | null;
    img_height?: number;
    img_width?: number;
    base64?: boolean;
};
declare class Mix526 {
    private url;
    private apiKey;
    constructor(apiKey?: string | null);
    generate(data: Mix526Type): Promise<axios.AxiosResponse<any, any>>;
}

type AllInOnePixelType = {
    prompt: string;
    negativePrompt?: string;
    scheduler?: string;
    samples?: number;
    num_inference_steps?: number;
    guidance_scale?: number;
    seed?: number | null;
    img_height?: number;
    img_width?: number;
    base64?: boolean;
};
declare class AllInOnePixel {
    private url;
    private apiKey;
    constructor(apiKey?: string | null);
    generate(data: AllInOnePixelType): Promise<axios.AxiosResponse<any, any>>;
}

type BgRemovalType = {
    image: string;
    method?: string;
};
declare class BgRemoval {
    private url;
    private apiKey;
    constructor(apiKey?: string | null);
    generate(data: BgRemovalType): Promise<axios.AxiosResponse<any, any>>;
}

type CartoonType = {
    prompt: string;
    negativePrompt?: string;
    scheduler?: string;
    samples?: number;
    num_inference_steps?: number;
    guidance_scale?: number;
    seed?: number | null;
    img_height?: number;
    img_width?: number;
    base64?: boolean;
};
declare class Cartoon {
    private url;
    private apiKey;
    constructor(apiKey?: string | null);
    generate(data: CartoonType): Promise<axios.AxiosResponse<any, any>>;
}

type CodeformerType = {
    image: string;
    scale?: number;
    fidelity?: number;
    bg?: boolean;
    face?: boolean;
};
declare class Codeformer {
    private url;
    private apiKey;
    constructor(apiKey?: string | null);
    generate(data: CodeformerType): Promise<axios.AxiosResponse<any, any>>;
}

type ColorfulType = {
    prompt: string;
    negativePrompt?: string;
    scheduler?: string;
    samples?: number;
    num_inference_steps?: number;
    guidance_scale?: number;
    seed?: number | null;
    img_height?: number;
    img_width?: number;
    base64?: boolean;
};
declare class Colorful {
    private url;
    private apiKey;
    constructor(apiKey?: string | null);
    generate(data: ColorfulType): Promise<axios.AxiosResponse<any, any>>;
}

type ControlnetType = {
    image?: string;
    prompt: string;
    negativePrompt?: string;
    samples?: number;
    scheduler?: string;
    num_inference_steps?: number;
    guidance_scale?: number;
    strength?: number;
    seed?: number | null;
    base64?: boolean;
};
declare class Controlnet {
    private url;
    private apiKey;
    constructor(apiKey: string | null | undefined, type: "openpose" | "softedge" | "depth" | "canny" | "scribble");
    generate(data: ControlnetType): Promise<axios.AxiosResponse<any, any>>;
}

type CuteRichStyleType = {
    prompt: string;
    negativePrompt?: string;
    scheduler?: string;
    samples?: number;
    num_inference_steps?: number;
    guidance_scale?: number;
    seed?: number | null;
    img_height?: number;
    img_width?: number;
    base64?: boolean;
};
declare class CuteRichStyle {
    private url;
    private apiKey;
    constructor(apiKey?: string | null);
    generate(data: CuteRichStyleType): Promise<axios.AxiosResponse<any, any>>;
}

type CyberRealisticType = {
    prompt: string;
    negativePrompt?: string;
    scheduler?: string;
    samples?: number;
    num_inference_steps?: number;
    guidance_scale?: number;
    seed?: number | null;
    img_height?: number;
    img_width?: number;
    base64?: boolean;
};
declare class CyberRealistic {
    private url;
    private apiKey;
    constructor(apiKey?: string | null);
    generate(data: CyberRealisticType): Promise<axios.AxiosResponse<any, any>>;
}

type DeepSpacedDiffusionType = {
    prompt: string;
    negativePrompt?: string;
    scheduler?: string;
    samples?: number;
    num_inference_steps?: number;
    guidance_scale?: number;
    seed?: number | null;
    img_height?: number;
    img_width?: number;
    base64?: boolean;
};
declare class DeepSpacedDiffusion {
    private url;
    private apiKey;
    constructor(apiKey?: string | null);
    generate(data: DeepSpacedDiffusionType): Promise<axios.AxiosResponse<any, any>>;
}

type DreamshaperType = {
    prompt: string;
    negativePrompt?: string;
    scheduler?: string;
    samples?: number;
    num_inference_steps?: number;
    guidance_scale?: number;
    seed?: number | null;
    img_height?: number;
    img_width?: number;
    base64?: boolean;
};
declare class Dreamshaper {
    private url;
    private apiKey;
    constructor(apiKey?: string | null);
    generate(data: DreamshaperType): Promise<axios.AxiosResponse<any, any>>;
}

type DvArchType = {
    prompt: string;
    negativePrompt?: string;
    scheduler?: string;
    samples?: number;
    num_inference_steps?: number;
    guidance_scale?: number;
    seed?: number | null;
    img_height?: number;
    img_width?: number;
    base64?: boolean;
};
declare class DvArch {
    private url;
    private apiKey;
    constructor(apiKey?: string | null);
    generate(data: DvArchType): Promise<axios.AxiosResponse<any, any>>;
}

type EdgeOfRealismType = {
    prompt: string;
    negativePrompt?: string;
    scheduler?: string;
    samples?: number;
    num_inference_steps?: number;
    guidance_scale?: number;
    seed?: number | null;
    img_height?: number;
    img_width?: number;
    base64?: boolean;
};
declare class EdgeOfRealism {
    private url;
    private apiKey;
    constructor(apiKey?: string | null);
    generate(data: EdgeOfRealismType): Promise<axios.AxiosResponse<any, any>>;
}

type EpicRealismType = {
    prompt: string;
    negativePrompt?: string;
    scheduler?: string;
    samples?: number;
    num_inference_steps?: number;
    guidance_scale?: number;
    seed?: number | null;
    img_height?: number;
    img_width?: number;
    base64?: boolean;
};
declare class EpicRealism {
    private url;
    private apiKey;
    constructor(apiKey?: string | null);
    generate(data: EpicRealismType): Promise<axios.AxiosResponse<any, any>>;
}

type EsrganType = {
    image: string;
    scale?: number;
};
declare class Esrgan {
    private url;
    private apiKey;
    constructor(apiKey?: string | null);
    generate(data: EsrganType): Promise<axios.AxiosResponse<any, any>>;
}

type FaceswapType = {
    input_face_image: string;
    output_face_image: string;
    file_type?: string;
};
declare class Faceswap {
    private url;
    private apiKey;
    constructor(apiKey?: string | null);
    generate(data: FaceswapType): Promise<axios.AxiosResponse<any, any>>;
}

type FantassifiedIconsType = {
    prompt: string;
    negativePrompt?: string;
    scheduler?: string;
    samples?: number;
    num_inference_steps?: number;
    guidance_scale?: number;
    seed?: number | null;
    img_height?: number;
    img_width?: number;
    base64?: boolean;
};
declare class FantassifiedIcons {
    private url;
    private apiKey;
    constructor(apiKey?: string | null);
    generate(data: FantassifiedIconsType): Promise<axios.AxiosResponse<any, any>>;
}

type FruitFusionType = {
    prompt: string;
    negativePrompt?: string;
    scheduler?: string;
    samples?: number;
    num_inference_steps?: number;
    guidance_scale?: number;
    seed?: number | null;
    img_height?: number;
    img_width?: number;
    base64?: boolean;
};
declare class FruitFusion {
    private url;
    private apiKey;
    constructor(apiKey?: string | null);
    generate(data: FruitFusionType): Promise<axios.AxiosResponse<any, any>>;
}

type IcbinpType = {
    prompt: string;
    negativePrompt?: string;
    scheduler?: string;
    samples?: number;
    num_inference_steps?: number;
    guidance_scale?: number;
    seed?: number | null;
    img_height?: number;
    img_width?: number;
    base64?: boolean;
};
declare class Icbinp {
    private url;
    private apiKey;
    constructor(apiKey?: string | null);
    generate(data: IcbinpType): Promise<axios.AxiosResponse<any, any>>;
}

type Img2ImgType = {
    image?: string;
    prompt: string;
    negativePrompt?: string;
    samples?: number;
    scheduler?: string;
    num_inference_steps?: number;
    guidance_scale?: number;
    strength?: number;
    seed?: number | null;
    img_width?: number;
    img_height?: number;
    base64?: boolean;
};
declare class Img2Img {
    private url;
    private apiKey;
    constructor(apiKey?: string | null);
    generate(data: Img2ImgType): Promise<axios.AxiosResponse<any, any>>;
}

type InpaintingType = {
    image?: string;
    mask?: string;
    prompt: string;
    negativePrompt?: string;
    samples?: number;
    scheduler?: string;
    num_inference_steps?: number;
    guidance_scale?: number;
    strength?: number;
    seed?: number | null;
    img_width?: number;
    img_height?: number;
};
declare class Inpainting {
    private url;
    private apiKey;
    constructor(apiKey?: string | null);
    generate(data: InpaintingType): Promise<axios.AxiosResponse<any, any>>;
}

type JuggernautType = {
    prompt: string;
    negativePrompt?: string;
    scheduler?: string;
    samples?: number;
    num_inference_steps?: number;
    guidance_scale?: number;
    seed?: number | null;
    img_height?: number;
    img_width?: number;
    base64?: boolean;
};
declare class Juggernaut {
    private url;
    private apiKey;
    constructor(apiKey?: string | null);
    generate(data: JuggernautType): Promise<axios.AxiosResponse<any, any>>;
}

type KandinskyType = {
    prompt: string;
    negativePrompt?: string;
    samples?: number;
    num_inference_steps?: number;
    seed?: number | null;
    img_height?: number;
    img_width?: number;
    prior_steps?: number;
    base64?: boolean;
};
declare class Kandinsky {
    private url;
    private apiKey;
    constructor(apiKey?: string | null);
    generate(data: KandinskyType): Promise<axios.AxiosResponse<any, any>>;
}

type MajicmixType = {
    prompt: string;
    negativePrompt?: string;
    scheduler?: string;
    samples?: number;
    num_inference_steps?: number;
    guidance_scale?: number;
    seed?: number | null;
    img_height?: number;
    img_width?: number;
    base64?: boolean;
};
declare class Majicmix {
    private url;
    private apiKey;
    constructor(apiKey?: string | null);
    generate(data: MajicmixType): Promise<axios.AxiosResponse<any, any>>;
}

type ManmarumixType = {
    prompt: string;
    negativePrompt?: string;
    scheduler?: string;
    samples?: number;
    num_inference_steps?: number;
    guidance_scale?: number;
    seed?: number | null;
    img_height?: number;
    img_width?: number;
    base64?: boolean;
};
declare class Manmarumix {
    private url;
    private apiKey;
    constructor(apiKey?: string | null);
    generate(data: ManmarumixType): Promise<axios.AxiosResponse<any, any>>;
}

type ParagonType = {
    prompt: string;
    negativePrompt?: string;
    scheduler?: string;
    samples?: number;
    num_inference_steps?: number;
    guidance_scale?: number;
    seed?: number | null;
    img_height?: number;
    img_width?: number;
    base64?: boolean;
};
declare class Paragon {
    private url;
    private apiKey;
    constructor(apiKey?: string | null);
    generate(data: ParagonType): Promise<axios.AxiosResponse<any, any>>;
}

type PotraitSDType = {
    prompt: string;
    negativePrompt?: string;
    samples?: number;
    scheduler?: string;
    num_inference_steps?: number;
    guidance_scale?: number;
    seed?: number | null;
    img_height?: number;
    img_width?: number;
    base64?: boolean;
};
declare class PotraitSD {
    private url;
    private apiKey;
    constructor(apiKey?: string | null);
    generate(data: PotraitSDType): Promise<axios.AxiosResponse<any, any>>;
}

type QRGeneratorType = {
    prompt: string;
    negativePrompt?: string;
    samples?: number;
    scheduler?: string;
    num_inference_steps?: number;
    guidance_scale?: number;
    seed?: number | null;
    presets?: string;
    control_scale?: number;
    control_start?: number;
    control_end?: number;
    qr_text?: string;
    invert?: boolean;
    size?: number;
    base64?: boolean;
};
declare class QRGenerator {
    private url;
    private apiKey;
    constructor(apiKey?: string | null);
    generate(data: QRGeneratorType): Promise<axios.AxiosResponse<any, any>>;
}

type RCNZType = {
    prompt: string;
    negativePrompt?: string;
    scheduler?: string;
    samples?: number;
    num_inference_steps?: number;
    guidance_scale?: number;
    seed?: number | null;
    img_height?: number;
    img_width?: number;
    base64?: boolean;
};
declare class RCNZ {
    private url;
    private apiKey;
    constructor(apiKey?: string | null);
    generate(data: RCNZType): Promise<axios.AxiosResponse<any, any>>;
}

type RPGType = {
    prompt: string;
    negativePrompt?: string;
    scheduler?: string;
    samples?: number;
    num_inference_steps?: number;
    guidance_scale?: number;
    seed?: number | null;
    img_height?: number;
    img_width?: number;
    base64?: boolean;
};
declare class RPG {
    private url;
    private apiKey;
    constructor(apiKey?: string | null);
    generate(data: RPGType): Promise<axios.AxiosResponse<any, any>>;
}

type RealisticVisionType = {
    prompt: string;
    negativePrompt?: string;
    scheduler?: string;
    samples?: number;
    num_inference_steps?: number;
    guidance_scale?: number;
    seed?: number | null;
    img_height?: number;
    img_width?: number;
    base64?: boolean;
};
declare class RealisticVision {
    private url;
    private apiKey;
    constructor(apiKey?: string | null);
    generate(data: RealisticVisionType): Promise<axios.AxiosResponse<any, any>>;
}

type ReliberateType = {
    prompt: string;
    negativePrompt?: string;
    scheduler?: string;
    samples?: number;
    num_inference_steps?: number;
    guidance_scale?: number;
    seed?: number | null;
    img_height?: number;
    img_width?: number;
    base64?: boolean;
};
declare class Reliberate {
    private url;
    private apiKey;
    constructor(apiKey?: string | null);
    generate(data: ReliberateType): Promise<axios.AxiosResponse<any, any>>;
}

type RevanimatedType = {
    prompt: string;
    negativePrompt?: string;
    scheduler?: string;
    samples?: number;
    num_inference_steps?: number;
    guidance_scale?: number;
    seed?: number | null;
    img_height?: number;
    img_width?: number;
    base64?: boolean;
};
declare class Revanimated {
    private url;
    private apiKey;
    constructor(apiKey?: string | null);
    generate(data: RevanimatedType): Promise<axios.AxiosResponse<any, any>>;
}

type SDOutpaintType = {
    image?: string;
    prompt: string;
    negativePrompt?: string;
    scheduler?: string;
    num_inference_steps?: number;
    img_width?: number;
    img_height?: number;
    scale?: number;
    strength?: number;
    offset_x?: number;
    offset_y?: number;
    guidance_scale?: number;
    mask_expand?: number;
    seed?: number | null;
};
declare class SDOutpaint {
    private url;
    private apiKey;
    constructor(apiKey?: string | null);
    generate(data: SDOutpaintType): Promise<axios.AxiosResponse<any, any>>;
}

type SamaritanType = {
    prompt: string;
    negativePrompt?: string;
    scheduler?: string;
    samples?: number;
    num_inference_steps?: number;
    guidance_scale?: number;
    seed?: number | null;
    img_height?: number;
    img_width?: number;
    base64?: boolean;
};
declare class Samaritan {
    private url;
    private apiKey;
    constructor(apiKey?: string | null);
    generate(data: SamaritanType): Promise<axios.AxiosResponse<any, any>>;
}

type SciFiType = {
    prompt: string;
    negativePrompt?: string;
    scheduler?: string;
    samples?: number;
    num_inference_steps?: number;
    guidance_scale?: number;
    seed?: number | null;
    img_height?: number;
    img_width?: number;
    base64?: boolean;
};
declare class SciFi {
    private url;
    private apiKey;
    constructor(apiKey?: string | null);
    generate(data: SciFiType): Promise<axios.AxiosResponse<any, any>>;
}

type SegmentAnythingType = {
    image: string;
};
declare class SegmentAnything {
    private url;
    private apiKey;
    constructor(apiKey?: string | null);
    generate(data: SegmentAnythingType): Promise<axios.AxiosResponse<any, any>>;
}

type SmallSDType = {
    prompt: string;
    negativePrompt?: string;
    samples?: number;
    scheduler?: string;
    num_inference_steps?: number;
    guidance_scale?: number;
    seed?: number | null;
    img_height?: number;
    img_width?: number;
    base64?: boolean;
};
declare class SmallSD {
    private url;
    private apiKey;
    constructor(apiKey?: string | null);
    generate(data: SmallSDType): Promise<axios.AxiosResponse<any, any>>;
}

type TinySDType = {
    prompt: string;
    negativePrompt?: string;
    samples?: number;
    scheduler?: string;
    num_inference_steps?: number;
    guidance_scale?: number;
    seed?: number | null;
    img_height?: number;
    img_width?: number;
    base64?: boolean;
};
declare class TinySD {
    private url;
    private apiKey;
    constructor(apiKey?: string | null);
    generate(data: TinySDType): Promise<axios.AxiosResponse<any, any>>;
}

type Word2ImgType = {
    image?: string;
    prompt: string;
    negativePrompt?: string;
    samples?: number;
    scheduler?: string;
    num_inference_steps?: number;
    guidance_scale?: number;
    seed?: number | null;
    control_scale?: number;
    control_start?: number;
    control_end?: number;
    size?: number;
    base64?: boolean;
};
declare class Word2Img {
    private url;
    private apiKey;
    constructor(apiKey?: string | null);
    generate(data: Word2ImgType): Promise<axios.AxiosResponse<any, any>>;
}

export { AllInOnePixel, AllInOnePixelType, BgRemoval, BgRemovalType, Cartoon, CartoonType, Codeformer, CodeformerType, Colorful, ColorfulType, Controlnet, ControlnetType, CuteRichStyle, CuteRichStyleType, CyberRealistic, CyberRealisticType, DeepSpacedDiffusion, DeepSpacedDiffusionType, Dreamshaper, DreamshaperType, DvArch, DvArchType, EdgeOfRealism, EdgeOfRealismType, EpicRealism, EpicRealismType, Esrgan, EsrganType, Faceswap, FaceswapType, FantassifiedIcons, FantassifiedIconsType, Flat2D, Flat2DType, FruitFusion, FruitFusionType, Icbinp, IcbinpType, Img2Img, Img2ImgType, Inpainting, InpaintingType, Juggernaut, JuggernautType, Kandinsky, KandinskyType, Majicmix, MajicmixType, Manmarumix, ManmarumixType, Mix526, Mix526Type, Paragon, ParagonType, PotraitSD, PotraitSDType, QRGenerator, QRGeneratorType, RCNZ, RCNZType, RPG, RPGType, RealisticVision, RealisticVisionType, Reliberate, ReliberateType, Revanimated, RevanimatedType, SDOutpaint, SDOutpaintType, SDXL, SDXLType, Samaritan, SamaritanType, SciFi, SciFiType, SegmentAnything, SegmentAnythingType, SmallSD, SmallSDType, TinySD, TinySDType, Word2Img, Word2ImgType };
