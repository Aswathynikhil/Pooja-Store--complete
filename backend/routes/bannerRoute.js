const express = require("express");
const router = express.Router();
const { isAuthenticatedUser, authorizesdRoles } = require("../middleware/auth");
const {
  createBanner,
    getAllBanners,
  deleteBanners
} = require("../controllers/bannerController");

router
  .route("/admin/banner/new")
  .post(isAuthenticatedUser, authorizesdRoles("admin"), createBanner);
router.route("/admin/banners").get(getAllBanners);
router
  .route("/admin/banner/delete/:id")
  .delete(isAuthenticatedUser, authorizesdRoles("admin"), deleteBanners);

module.exports = router;
