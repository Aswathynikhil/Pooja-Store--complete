import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import toast, { Toaster, useToasterStore } from "react-hot-toast";
import { loadUser } from "./redux/actions/userAction";
import { useSelector } from "react-redux";
// import { getShippingInfo, myCartItems } from "./redux/actions/cartAction";
import axios from "./axios";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
// import { toast } from "react-hot-toast";
// import { getWishlistItems } from "./redux/actions/wishlistAction";
import store from "./redux/store";


import "./App.css";
import Navbarnew from "./components/Navigation/Navbarnew";
import Navbar from "./components/Navigation/Navbar";
import Home from "./pages/Home";
import LoginSignUpPage from "./pages/LoginSignUpPage"
import Footer from "./components/Footer";
import AddCategory from "./pages/Admin/AddCategoryPage";
import Dashboard from "./pages/Admin/DashboardPage";
import AddBanner from "./pages/Admin/AddBannerPage";
import AddGalleryImage from "./pages/Admin/AddGalleryImagePage";
import AddProduct from "./pages/Admin/AddProductPage";
import ProductList from "./pages/Admin/ProductListPage";
import CategoryList from "./pages/Admin/CategoryListPage";
import GalleryImages from "./pages/Admin/GalleryImagePage";
import BannerImages from "./pages/Admin/BannerImagePage";

// import ProductPage from "./pages/ProductPage";
import Productlist from "./pages/Productlist";
import UpdateProduct from "./pages/Admin/UpdateProductPage";

import Wishlist from "./pages/users/WishlistPage";
import Cart from "./pages/users/CartPage";
import VerifyPhoneNumber from "./pages/VerifyPhoneNumberPage";
// import UserOptions from "./components/Header/UserOptions";

import ForgotPassword from "./pages/users/ForgetPassword";
import ResetPassword from "./pages/users/ResetPasswordPage";
import Profile from "./pages/ProfilePage";
import UpdateProfile from "./pages/UpdateProfilePage";
import UpdatePassword from "./pages/UpdatePasswordPage";

import PageNotFound from "./pages/PageNotFound";
import Payment from "./pages/PaymentPage";
import ConfirmOrder from "./pages/ConfirmOrderPage";
import Checkout from "./pages/CheckoutPage";
import OrderCompleted from "./pages/OrderCompletedPage";
import Orders from "./pages/OrdersPage";
import UserList from "./pages/Admin/UserListsPage";
import OrderList from "./pages/Admin/OrderListPage";
const TOAST_LIMIT = 3;

function App() {

  // const { toasts } = useToasterStore();

  // Enforce Limit
  // useEffect(() => {
  //   toasts
  //     .filter((t) => t.visible) // Only consider visible toasts
  //     .filter((_, i) => i >= TOAST_LIMIT) // Is toast index over limit
  //     .forEach((t) => toast.dismiss(t.id)); // Dismiss – Use toast.remove(t.id) removal without animation
  // }, [toasts]);

  const { isAuthenticated, user } = useSelector((state) => state.user);
  console.log(isAuthenticated, "vvvvvvv");
  console.log(user,"user");
  if (user) {
    user && localStorage.setItem("Userdetails", JSON.stringify(user));
  }

  // const [stripeApiKey, setStripeApiKey] = useState("");
  // async function getStripeApiKey() {
  //   const { data } = await axios.get(`/stripeapikey`);
  //   setStripeApiKey(data.stripeApiKey);
  // }

  useEffect(() => {
    // store.dispatch(getShippingInfo());
    store.dispatch(loadUser());
    // store.dispatch(myCartItems());
    // store.dispatch(getWishlistItems());
    // getStripeApiKey();
  }, []);

  // window.addEventListener("contextmenu",(e)=>e.preventDefault());

  const details = JSON.parse(localStorage.getItem("Userdetails"));

  if (details && Object.keys(details).length === 0) {
  } else {
    if (details && details.verified.phone === false) {
      toast((t) => (
        <div className="toastCustomAppDiv">
          <span className="toastCustomApp">
            '👏' hi {details && details.name}, Your Phone Number is not Verified
            <a href="/user/verify/phone">
              <button>Verify</button>
            </a>
            <button
              onClick={() => toast.dismiss(t.id)}
              style={{ margin: "0 .5vmax" }}
            >
              Later
            </button>
          </span>
        </div>
      ));
    }
  }
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{ duration: 30000 }}
      />
      {isAuthenticated ? <Navbar /> : <Navbarnew />}
      {/* {isAuthenticated} */}
      {/* <Navbarnew /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<LoginSignUpPage />} />
        <Route path="/add_category" element={<AddCategory />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/add_banner" element={<AddBanner />} />
        <Route path="/add_galleryImage" element={<AddGalleryImage />} />
        <Route path="/add_product" element={<AddProduct />} />
        <Route path="/admin/products_list" element={<ProductList />} />
        <Route path="/admin/product/:id" element={<UpdateProduct />} />

        <Route path="/categoryList" element={<CategoryList />} />
        <Route path="/gallery_images" element={<GalleryImages />} />
        <Route path="/banner_images" element={<BannerImages />} />
        <Route path="/users" element={<UserList />} />

        <Route path="/product" element={<Productlist />} />
        <Route path="/product/:keyword" component={<Productlist />} />

        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user/verify/phone" element={<VerifyPhoneNumber />} />

        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="user/password/reset/:token" element={<ResetPassword />} />
        <Route path="/account" element={<Profile />} />
        <Route path="/account/update" element={<UpdateProfile />} />
        <Route path="/account/password/update" element={<UpdatePassword />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/confirm_order" element={<ConfirmOrder />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order_completed" element={<OrderCompleted />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/orderlist" element={<OrderList />} />

        {/* {stripeApiKey && (
            <Route
              path="/process/payment"
              element={
                <Elements stripe={loadStripe(stripeApiKey)}>
                  <PaymentPage />
                </Elements>
              }
            />
          )} */}
      </Routes>
    </>
  );
}

export default App;
