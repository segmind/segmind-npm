
type BaseModelType = {
    type: string, 
    title: string, 
    description: string, 
    route: string, 
    badge: string, 
    api: string 
}

export type Text2ImgOutputType = BaseModelType & {
    samplers: string[], 
    params: {
        prompt: string,
        negative_prompt: string,
        samples: number,
        scheduler: string,
        num_inference_steps: number,
        guidance_scale: number,
        seed: number,
    }
}

type Text2ImgInputType = {

}

export const text2img = ({}: Text2ImgInputType) => {
    console.log("package works: ")
}

text2img({})







