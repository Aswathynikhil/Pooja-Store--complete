// const ErrorHander = require("../utils/errorhandler");
// const catchAsyncErrors = require("../middleware/catchAsyncErrors");
// const Razorpay = require("razorpay");

// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// // exports.processPayment = catchAsyncErrors(async (req, res, next) => {
// //   const myPayment = await stripe.paymentIntents.create({
// //     amount: Number(req.body.amount),
// //     currency: `INR`,
// //     metadata: {
// //       company: "E-buy",
// //     },
// //   });

// //   if (!myPayment) {
// //     return next(new ErrorHander("something went wrong", 404));
// //   }

// //   res.status(200).json({
// //     success: true,
// //     client_secret: myPayment.client_secret,
// //   });
// // });

// // exports.sendStripApikey = catchAsyncErrors(async (req, res, next) => {
// //   res.status(200).json({
// //     stripeApiKey: process.env.STRIPE_API_KEY,
// //   });
// // });

// exports.processRazorpayPayment = catchAsyncErrors(async (req, res, next) => {
//   console.log(req.body, "======= payment");
//   const { amount, orderID } = req.body;

//   const instance = new Razorpay({
//     key_id: process.env.RAZORPAY_ID,
//     key_secret: process.env.RAZORPAY_KEY,
//   });

//   const options = {
//     amount: amount * 100,
//     currency: "INR",
//     receipt: crypto.randomBytes(10).toString("hex"),
//   };
//   instance.orders.create(options, (err, order) => {
//     if (err) {
//       return next(new ErrorHander("Something went Wrong!", 400));
//     }

//     res.status(200).json({
//       success: true,
//       data: order,
//     });
//   });
// });

// //Rozorpay Payment Verify
// exports.razorpayPaymentVerify = catchAsyncErrors(async (req, res, next) => {
//   console.log(req.body, "======== verify");
//   const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
//     req.body;

//   const sign = razorpay_order_id + "|" + razorpay_payment_id;
//   const expectedSign = crypto
//     .createHmac("sha256", process.env.RAZORPAY_KEY)
//     .update(sign.toString())
//     .digest("hex");

//   if (razorpay_signature === expectedSign) {
//     res.status(200).json({
//       success: true,
//       message: "Payment successfull",
//     });
//   } else {
//     res.status(400).json({
//       success: false,
//       message: "Your payment has failed, please try again",
//     });
//   }
// });

const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const crypto = require("crypto");

// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Razorpay = require("razorpay");

// exports.processPayment = catchAsyncErrors(async (req, res, next) => {
//   const myPayment = await stripe.paymentIntents.create({
//     amount: Number(req.body.amount),
//     currency: `INR`,
//     metadata: {
//       company: "E-buy",
//     },
//   });

//   if (!myPayment) {
//     return next(new ErrorHander("something went wrong", 404));
//   }

//   res.status(200).json({
//     success: true,
//     client_secret: myPayment.client_secret,
//   });
// });

// exports.sendStripApikey = catchAsyncErrors(async (req, res, next) => {
//   res.status(200).json({
//     stripeApiKey: process.env.STRIPE_API_KEY,
//   });
// });

// Razorpay payment
exports.processRazorpayPayment = catchAsyncErrors(async (req, res, next) => {
  console.log(req.body, "======= payment");
  const { amount, orderID } = req.body;

  const instance = new Razorpay({
    key_id: process.env.RAZORPAY_ID,
    key_secret: process.env.RAZORPAY_KEY,
  });

  const options = {
    amount: amount * 100,
    currency: "INR",
    receipt: crypto.randomBytes(10).toString("hex"),
  };
  instance.orders.create(options, (err, order) => {
    if (err) {
      return next(new ErrorHander("Something went Wrong!", 400));
    }

    res.status(200).json({
      success: true,
      data: order,
    });
  });
});

//Rozorpay Payment Verify
exports.razorpayPaymentVerify = catchAsyncErrors(async (req, res, next) => {
  console.log(req.body, "======== verify");
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const sign = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSign = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY)
    .update(sign.toString())
    .digest("hex");

  if (razorpay_signature === expectedSign) {
    res.status(200).json({
      success: true,
      message: "Payment successfull",
    });
  } else {
    res.status(400).json({
      success: false,
      message: "Your payment has failed, please try again",
    });
  }
});