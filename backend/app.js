const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require ("cors")
const bodyparser = require("body-parser");
const fileUpload = require("express-fileupload")
const dotenv = require('dotenv');

app.use(
    cors({
        origin: ["http://localhost:3000"],
        method : ["GET","POST","PUT","DELETE"],
        credentials: true,
    })
);

//config 
dotenv.config({path:"backend/config/.env"})

const erroeMiddleware = require("./middleware/error");


app.use(cookieParser());
app.use(bodyparser.json({ limit: "50mb" }));
app.use(bodyparser.urlencoded({limit: '1000mb',extended:true}))
app.use(express.json());
// app.use(bodyParser.json({ limit: "50mb" }));
// app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));


app.use(fileUpload({useTempFiles: true}));


// Route Import
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const cart = require("./routes/cartRoute");
const payment = require("./routes/paymentRoute");
const wishlist = require("./routes/wishlistRoute");
const category = require("./routes/categoryRoute");
const banner = require("./routes/bannerRoute");
const galleryImage = require("./routes/galleryImageRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", cart);
app.use("/api/v1", payment);
app.use("/api/v1", wishlist);
app.use("/api/v1", category);
app.use("/api/v1", banner);
app.use("/api/v1",galleryImage);

//MiddlewRware for Errors
app.use(erroeMiddleware);

// app.use(
//     cors({
//         origin: ["http://localhost:3000"],
//         method : ["GET","POST","PUT","DELETE"],
//         credentials: true,
//     })
// );

module.exports = app;
