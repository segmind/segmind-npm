# SEGMIND NPM

## Process

- Import the package from segmind-npm package list from list of available packages. 
- Add the api key from segmind.com while initializing new Model. 
- Enter the prompt(required) and change any parameters to get a promise as a response. 
- Get the image with response.data

```typescript
import { SDXL } from "segmind-npm"

//get your api key from cloud.segmind.com
const apiKey = "SG_************"

const sdxl = new SDXL(apiKey); 

sdxl.generate({prompt: "a panda on a chair"}).then((response) => {
    console.log(response)
});
```
