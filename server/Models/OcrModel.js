const mongoose = require('mongoose');

const ocrSchema = new mongoose.Schema(
    {
        image: {
          type: String,
          required: true,
        },
        result: {
          type: String,
        },
    
        message: {
          type: String,
        },

        status : {
          type : String,
          default : "pending",
        },
      },
      {
        timestamps: true,
      }
    );

const OCR_model = mongoose.model("OCRs", ocrSchema);

module.exports = OCR_model;