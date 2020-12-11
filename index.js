const sharp = require("sharp")

const scaleImage = async (input, scale) => {
	
	try {
		const image = sharp(input)
		const metadata = await image.metadata()
		const output = await image
			.resize ( metadata.width * scale, null, { kernel: "nearest" })
			.toBuffer()
		return output
	}
	
	catch (error) {
		throw error
	}

}

module.exports = scaleImage
