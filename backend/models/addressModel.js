const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  delivery_address: [
    {
      addrstype: {
        type: String,
        default: "home",
      },
      name: String,
      phonenumber: String,
      email: String,
      pincode: Number,
      area: String,
      city: String,
      stateregion: String,
      country: String,
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
  },
});
const addressModel = mongoose.model("addressModel", addressSchema);
module.exports = addressModel;
