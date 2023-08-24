import { dummyModelCardData as data } from '@/models'; 

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

const d = {
        type: 'txt2img',
        title: "Kandinsky",
        description: "Kandinsky inherits best practicies from Dall-E 2 and Latent diffusion, while introducing some new ideas",
        route: "kandinsky",
        badge: "kd2",
        api:'kandinsky2.1-txt2img',
        defaultOutput: '/ked.png',
        samplers: ['DDIM',
            'P-Sampler',
            // 'PLMS'
        ],
        params: {
            prompt: "tiny isometric city on a tiny floating island, highly detailed, 3d render",
            negative_prompt: "NONE",
            samples: 1,
            scheduler: "DDIM",
            num_inference_steps: 20,
            guidance_scale: 7.5,
            seed: 1024,
        }
    }

type Text2ImgInputType = {

}

export const text2img = ({}: Text2ImgInputType) => {
    console.log(data) 
}









