const mongoose = require("mongoose");

const galleryImgSchema = mongoose.Schema(
  {
    image: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("GalleryImage", galleryImgSchema);
