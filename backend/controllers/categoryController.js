// const ErrorHander = require("../utils/errorhandler");
// const catchAsyncErrors = require("../middleware/catchAsyncErrors");
// const Category = require("../models/categoryModel");
// const slugify = require('slugify')
// const cloudinary = require("cloudinary");

// function createCategoriesList(categories,parentId = null){
//     const categoryList=[];
//     let category;
//     if(parentId == null){
//         category =  categories.filter((cat) => cat.parentId == undefined);
//     }else {
//         category =  categories.filter((cat) => cat.parentId == parentId);
//     }

//     for(let cate of category){
//         categoryList.push({
//             _id : cate._id,
//             name: cate.name,
//             slug: cate.slug,
//             image: cate.image,
//             children :createCategoriesList(categories,cate._id)
//         })
//     }
//     return categoryList;
// }


// // Create Category
// exports.createCategory = catchAsyncErrors(async (req, res, next) => {
//     let image
//     if (typeof req.body.image === "string") {
  
//       image = req.body.image;
//     }
    
//       const result = await cloudinary.v2.uploader.upload(image, {
//         folder: "category",
//       });
    
    

//     const categoryDetails = {
//       name: req.body.name,
//       slug: slugify(req.body.name),
//       image: {
//         public_id: result.public_id,
//         url: result.secure_url,
//       },
//     };

//     if(req.body.parentId){
//         categoryDetails.parentId = req.body.parentId
//     }

//     const category = await Category.create(categoryDetails);

//     res.status(200).json({
//         success : true,
//         message : `${category.name} Category Created Successfully`,
//         category
//     })

// });


// // Get All Categories
// exports.getAllCategories = catchAsyncErrors(async(req,res,next) => {
//     const categories = await Category.find().sort({name:1});

//     if (categories.length === 0) {
//         return next(new ErrorHander("Category is Empty", 404));
//       }

//     if(categories){
//         const categoryList = createCategoriesList(categories);

//         res.status(200).json({
//             success:true,
//             categoryList
//         })
//     }

   
// });


// //Single Category
// exports.getSingleCategory = catchAsyncErrors(async(req,res,next)=> {
//     const category = await Category.findById(req.params.id);
//     if (!category) {
//         return next(new ErrorHander("Category not found", 404));
//     }

//       res.status(200).json({
//         success:true,
//         category
//       })


// });


// //Update Category
// exports.updateCategory = catchAsyncErrors(async(req,res,next)=> {
//     let category = await Category.findById(req.params.id);
//     if (!category) {
//         return next(new ErrorHander("Category not found", 404));
//     }

//     category = await Category.findByIdAndUpdate(req.params.id, req.body, {
//         new: true,
//         runValidators: true,
//         useFindAndModify: false,
//       });

//       res.status(200).json({
//         success:true,
//         message: `${category.name} Updated Successfully`,
//         category
//       })


// });



// exports.deleteCategory = catchAsyncErrors(async(req,res,next)=> {
//     const category = await Category.findById(req.params.id);
//     if (!category) {
//         return next(new ErrorHander("Category not found", 404));
//     }
//     let item = category.name;

//     await category.remove();
//     res.status(200).json({
//         success:true,
//         message : `${item} Deleted Succeessfully`
//     })

// })







const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Category = require("../models/categoryModel");
const slugify = require("slugify");
const cloudinary = require("cloudinary");

function createCategoriesList(categories, parentId = null) {
  const categoryList = [];
  let category;
  if (parentId == null) {
    category = categories.filter((cat) => cat.parentId == undefined);
  } else {
    category = categories.filter((cat) => cat.parentId == parentId);
  }

  for (let cate of category) {
    categoryList.push({
      _id: cate._id,
      name: cate.name,
      slug: cate.slug,
      image: cate.image,
      children: createCategoriesList(categories, cate._id),
    });
  }
  return categoryList;
}

// Create Category
exports.createCategory = catchAsyncErrors(async (req, res, next) => {
  let image;
  if (typeof req.body.image === "string") {
    image = req.body.image;
  }

  const result = await cloudinary.v2.uploader.upload(image, {
    folder: "category",
  });

  const categoryDetails = {
    name: req.body.name,
    slug: slugify(req.body.name),
    image: {
      public_id: result.public_id,
      url: result.secure_url,
    },
  };

  if (req.body.parentId) {
    categoryDetails.parentId = req.body.parentId;
  }

  const category = await Category.create(categoryDetails);

  res.status(200).json({
    success: true,
    message: `${category.name} Category Created Successfully`,
    category,
  });
});

// Get All Categories
exports.getAllCategories = catchAsyncErrors(async (req, res, next) => {
  const categories = await Category.find().sort({ name: 1 });
  // console.log(categories)
  if (categories.length === 0) {
    return next(new ErrorHander("Category is Empty", 404));
  }

  if (categories) {
    const categoryList = createCategoriesList(categories);

    res.status(200).json({
      success: true,
      categoryList,
    });
  }
});

//Get all sub categories
exports.getAllSubCategories = catchAsyncErrors(async (req, res, next) => {
  console.log("fff");
  const categories = await Category.find().sort({ name: 1 });
  if (categories.parentId) {
    console.log(categories, "subbbb");
  }
  if (categories.length === 0) {
    return next(new ErrorHander("Category is Empty", 404));
  }

  if (categories) {
    const categoryList = createCategoriesList(categories);

    res.status(200).json({
      success: true,
      categoryList,
    });
  }
});

//Single Category
exports.getSingleCategory = catchAsyncErrors(async (req, res, next) => {
  const category = await Category.findById(req.params.id);
  if (!category) {
    return next(new ErrorHander("Category not found", 404));
  }

  res.status(200).json({
    success: true,
    category,
  });
});

//Update Category
exports.updateCategory = catchAsyncErrors(async (req, res, next) => {
  let category = await Category.findById(req.params.id);
  if (!category) {
    return next(new ErrorHander("Category not found", 404));
  }

  category = await Category.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    message: `${category.name} Updated Successfully`,
    category,
  });
});

exports.deleteCategory = catchAsyncErrors(async (req, res, next) => {
  const category = await Category.findById(req.params.id);
  if (!category) {
    return next(new ErrorHander("Category not found", 404));
  }
  let item = category.name;

  await category.remove();
  res.status(200).json({
    success: true,
    message: `${item} Deleted Succeessfully`,
  });
});