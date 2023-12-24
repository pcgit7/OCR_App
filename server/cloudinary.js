const cloudinary = require("cloudinary").v2;
          
cloudinary.config({ 
  cloud_name: 'drjubgbgl', 
  api_key: '244562595337494', 
  api_secret: 'H4A2elX_Kdf2GxPWpn7OzIbvWFc' 
});

module.exports = cloudinary;