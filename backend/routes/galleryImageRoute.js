const express = require("express");
const router = express.Router();
const { isAuthenticatedUser, authorizesdRoles } = require("../middleware/auth");
const {
  createGalleryImg,
  getAllImages,
  deleteImages,
} = require("../controllers/galleryImageController");

router
  .route("/admin/galleryImage/new")
  .post(isAuthenticatedUser, authorizesdRoles("admin"), createGalleryImg);
router.route("/admin/galleryImages").get(getAllImages);
router
  .route("/admin/galleryImage/delete/:id")
  .delete(isAuthenticatedUser, authorizesdRoles("admin"), deleteImages);

module.exports = router;
