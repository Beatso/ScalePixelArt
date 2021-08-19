export = scaleImage;
/**
 * Resizes an image with nearest neighbour interpolation.
 * @param {buffer | Uint8Array | Uint8ClampedArray | Int8Array | Uint16Array | Int16Array | Uint32Array | Int32Array | Float32Array | Float64Array | string} input - The image to resize.
 * @param {number} scale - How many times bigger the image should be. Can be negative to shrink the image.
 * @returns {buffer} - The resized image.
*/
declare function scaleImage(input: any | Uint8Array | Uint8ClampedArray | Int8Array | Uint16Array | Int16Array | Uint32Array | Int32Array | Float32Array | Float64Array | string, scale: number): any;
