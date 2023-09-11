# SEGMIND NPM

## Process

- Import the package from segmind-npm package list from list of available packages. 
- Add the api key from segmind.com while initializing new Model. 
- Enter the prompt(required) and change any parameters to get a promise as a response. 
- Get the image with response.data

```typescript
import { SDXL } from "segmind-npm"
const res = new SDXL(apiKey as string); 

const response = res.generate({prompt: "panda sitting in a bar"}); 
console.log(response.data); 
```
