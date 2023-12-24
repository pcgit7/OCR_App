const Image = require('../Models/ImageModel');
const cloudinary = require('../cloudinary');

const router = require('express').Router();
const fileUploadMiddleware = require('../Middleware/FileUploadMiddleware');

router.post('/upload-id-image',  async (req, res) => {
    try {
      const image = req.body.image;

      // Upload the image to Cloudinary
      const uploadedImage = await cloudinary.uploader.upload(image, {
        folder: 'OCR App',
      });
  
      // Create a new OCR document with the Cloudinary URL
      const newOCR = await Image.create({ url: uploadedImage.secure_url });
  
      return res.send({
        success: true,
        message: 'Image uploaded successfully',
      });
    } catch (error) {
      return res.send({
        success: false,
        message: error.message,
      });
    }
  });


module.exports = router;
