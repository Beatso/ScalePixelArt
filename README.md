# scale-pixel-art

This is a package to scale up (or down) pixel art with nearest neighbour interpolation.

This enables low resolution images to be much more visible.  
If you have a scaled up pixel art, this can also be used to get the raw texture back.

## Usage

```js
// get the image at input.png, scale it to be 20x bigger, and store the result in output.png

const scalePixelArt = require("scale-pixel-art")

const inputBuffer = fs.readFileSync("/input.png")

const outputBuffer = scalePixelArt(inputBuffer, 20)

fs.writeFileSync("/ouput.png", outputBuffer)
```

### Details

scalePixelArt(input, scale)

#### `input`
Type: `buffer`  
The image to be scaled.

#### `scale`
Type: `number`  
How many times bigger the image should be made. The image will be made smaller if it is a value between 0 and 1.
