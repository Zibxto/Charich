const { v2 } = require("cloudinary");

export default () =>
  v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_SECRET_KEY,
    secure: true,
  });
