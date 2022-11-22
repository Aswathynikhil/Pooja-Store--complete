// const express = require("express");
// // const { processPayment, sendStripApikey } = require("../controllers/paymentController");
// const {
//   processPayment,
//   sendStripApikey,
//   processRazorpayPayment,
//   razorpayPaymentVerify,
// } = require("../controllers/paymentController");
// const router = express.Router();
// const { isAuthenticatedUser, authorizesdRoles } = require("../middleware/auth");


// // router.route("/payment/process").post(isAuthenticatedUser,processPayment)
// // router.route("/stripeapikey").get(isAuthenticatedUser,sendStripApikey)
// router.route("/payment/razorpay/process").post(processRazorpayPayment);
// router.route("/payment/razorpay/verify").post(razorpayPaymentVerify);

// module.exports = router;

const express = require("express");
const {
  processPayment,
  sendStripApikey,
  processRazorpayPayment,
  razorpayPaymentVerify,
} = require("../controllers/paymentController");
const router = express.Router();
const { isAuthenticatedUser, authorizesdRoles } = require("../middleware/auth");

// router.route("/payment/process").post(isAuthenticatedUser,processPayment)
// router.route("/stripeapikey").get(isAuthenticatedUser,sendStripApikey)

router.route("/payment/razorpay/process").post(processRazorpayPayment);
router.route("/payment/razorpay/verify").post(razorpayPaymentVerify);

module.exports = router;