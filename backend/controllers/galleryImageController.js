const GalleryImage = require("../models/galleryImageModel");
const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");


function createGalleryImgesList(galleryimages) {
  const galleryImageList = [];
  let galleryImage=galleryimages;
  // if (parentId == null) {
  //   category = categories.filter((cat) => cat.parentId == undefined);
  // } else {
  //   category = categories.filter((cat) => cat.parentId == parentId);
  // }

  for (let img of galleryImage) {
    galleryImageList.push({
      _id: img._id,
      image: img.image,
      
    });
  }
  return galleryImageList;
}

//Create gallery image
exports.createGalleryImg = catchAsyncErrors(async (req, res, next) => {
  let image;
  if (typeof req.body.image === "string") {
    image = req.body.image;
  }

  const result = await cloudinary.v2.uploader.upload(image, {
    folder: "GalleryImg",
  
  });

  const galleryImage = {
    image: {
      public_id: result.public_id,
      url: result.secure_url,
    },
  };

  const galleryimages = await GalleryImage.create(galleryImage);

  res.status(201).json({
    success: true,
    galleryimages,
  });
});
//Get All banners --ADMIN
exports.getAllImages = catchAsyncErrors(async (req, res, next) => {
  const galleryImgs = await GalleryImage.find();

  if (galleryImgs) {
    const galleryImageList = createGalleryImgesList(galleryImgs);
  

    res.status(200).json({
      success: true,
      galleryImgs,
    });
  }
});

//Delete banners ---Admin
exports.deleteImages = catchAsyncErrors(async (req, res, next) => {
  const galleryImg = await GalleryImage.findById(req.params.id);

  if (!galleryImg) {
    return next(new ErrorHander("Image not found not found", 404));
  }

  await galleryImg.remove();

  res.status(200).json({
    success: true,
    message: `Successfully deleted image `,
  });
});
