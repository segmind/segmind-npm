# SEGMIND NPM

## Process

- Import the package from segmind-npm package list from list of available packages. 
- Import the package type to get the input type of the generate function. 
- Add the api key from cloud.segmind.com while initializing new Model. 
- Enter the prompt(required) and change any parameters to get a promise as a response. 
- Get the image with response.data

```typescript
import { SDXL, SDXLType } from "segmind-npm"

//get your api key from cloud.segmind.com
const apiKey = "SG_************"

const sdxl = new SDXL(apiKey); 

sdxl.generate({prompt: "a panda on a chair"}).then((response) => {
    console.log(response.data)
});
```

## List of exported models: 

```typescript
export { SDXL, SDXLType } from '@/SDXL';
export { Flat2D, Flat2DType } from '@/Flat2D';
export { Mix526, Mix526Type } from '@/526Mix';
export { AllInOnePixel, AllInOnePixelType } from '@/AllInOnePixel';
export { BgRemoval, BgRemovalType } from '@/BgRemoval';
export { Cartoon, CartoonType } from '@/Cartoon';
export { Codeformer, CodeformerType } from '@/Codeformer';
export { Colorful, ColorfulType } from '@/Colorful';
export { Controlnet, ControlnetType } from '@/Controlnet';
export { CuteRichStyle, CuteRichStyleType } from '@/CuteRichStyle';
export { CyberRealistic, CyberRealisticType } from '@/CyberRealistic';
export { DeepSpacedDiffusion, DeepSpacedDiffusionType } from '@/DeepSpacedDiffusion';
export { Dreamshaper, DreamshaperType } from '@/Dreamshaper';
export { DvArch, DvArchType } from '@/DvArch';
export { EdgeOfRealism, EdgeOfRealismType } from '@/EdgeOfRealism';
export { EpicRealism, EpicRealismType } from '@/EpicRealism';
export { Esrgan, EsrganType } from '@/Esrgan';
export { Faceswap, FaceswapType } from '@/Faceswap';
export { FantassifiedIcons, FantassifiedIconsType } from '@/FantassifiedIcons';
export { FruitFusion, FruitFusionType } from '@/FruitFusion';
export { Icbinp, IcbinpType } from '@/Icbinp';
export { Img2Img, Img2ImgType } from '@/Img2Img';
export { Inpainting, InpaintingType } from '@/Inpainting';
export { Juggernaut, JuggernautType } from '@/Juggernaut';
export { Kandinsky, KandinskyType } from '@/Kandinsky';
export { Majicmix, MajicmixType } from '@/Majicmix';
export { Manmarumix, ManmarumixType } from '@/Manmarumix';
export { Paragon, ParagonType } from '@/Paragon';
export { PotraitSD, PotraitSDType } from '@/PotraitSD';
export { QRGenerator, QRGeneratorType } from '@/QRGenerator';
export { RCNZ, RCNZType } from '@/RCNZ';
export { RPG, RPGType } from '@/RPG';
export { RealisticVision, RealisticVisionType } from '@/RealisticVision';
export { Reliberate, ReliberateType } from '@/Reliberate';
export { Revanimated, RevanimatedType } from '@/Revanimated';
export { SDOutpaint, SDOutpaintType } from '@/SDOutpaint';
export { Samaritan, SamaritanType } from '@/Samaritan';
export { SciFi, SciFiType } from '@/SciFi';
export { SegmentAnything, SegmentAnythingType } from '@/SegmentAnything';
export { SmallSD, SmallSDType } from '@/SmallSD';
export { TinySD, TinySDType } from '@/TinySD';
export { Word2Img, Word2ImgType } from '@/Word2Img';
```
