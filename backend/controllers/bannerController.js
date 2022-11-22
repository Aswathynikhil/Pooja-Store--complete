const Banner = require("../models/bannerModel");
const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");


function createBannerImgesList(bannerimages) {
  const bannerList = [];
  let bannerImage = bannerimages;
  // if (parentId == null) {
  //   category = categories.filter((cat) => cat.parentId == undefined);
  // } else {
  //   category = categories.filter((cat) => cat.parentId == parentId);
  // }

  for (let img of bannerImage) {
    bannerList.push({
      _id: img._id,
      image: img.image,
    });
  }
  return bannerList;
}


//Create banner
exports.createBanner = catchAsyncErrors(async (req, res, next) => {
  let image;
  if (typeof req.body.image === "string") {
   
      image = req.body.image;
  }


const result = await cloudinary.v2.uploader.upload(image, {
        folder: "banner",
        width: 1920,
        crop:"scale"
    });

const bannerImage ={
    image: {
        public_id: result.public_id,
        url: result.secure_url,
    }
  }


  const banner= await Banner.create(bannerImage);

  res.status(201).json({
    success: true,
    banner,
  });
});
//Get All banners --ADMIN
exports.getAllBanners = catchAsyncErrors(async (req, res, next) => {
  const banners = await Banner.find();
  
  if (banners) {
    const bannerList = createBannerImgesList(banners);

    res.status(200).json({
      success: true,
      banners,
    });
  }
});

//Delete banners ---Admin
exports.deleteBanners = catchAsyncErrors(async (req, res, next) => {
  const banner = await Banner.findById(req.params.id);

  if (!banner) {
    return next(new ErrorHander("Banner not found", 404));
  }

  await banner.remove();



  res.status(200).json({
    success: true,
    message: `Successfully deleted banner `,
  });
});