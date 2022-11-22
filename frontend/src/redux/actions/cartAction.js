// import axios from "../../axios";
// import {
//   ADD_TO_CART_REQUEST,
//   ADD_TO_CART_SUCCESS,
//   ADD_TO_CART_FAIL,
//   MY_CART_SUCCESS,
//   MY_CART_FAIL,
//   MY_CART_REQUEST,
//   DELETE_CART_REQUEST,
//   DELETE_CART_SUCCESS,
//   DELETE_CART_FAIL,
//   ADD_SHIPPING_REQUEST,
//   ADD_SHIPPING_SUCCESS,
//   ADD_SHIPPING_FAIL,
//   GET_SHIPPING_REQUEST,
//   GET_SHIPPING_SUCCESS,
//   GET_SHIPPING_FAIL,
//   CLEAR_ERRORS,
// } from "../../constants/cartConstants";

// /* Testing to Db */
// // export const addItemsToCart = (id, quantity) => async (dispatch) => {
// //   console.log(id, quantity);

// //   const { data } = await axios.get(`product/${id}`);
// //   let cartItems = {
// //     product: data.product._id,
// //     price: data.product.price,
// //     name: data.product.name,
// //     image: data.product.images[0].url,
// //     stock: parseInt(data.product.stock),
// //     quantity,
// //   };
// //   try {
// //     dispatch({ type: ADD_TO_CART_REQUEST });

// //     const config = {
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //     };
// //     const { data } = await axios.post(`/cart/new`, { cartItems }, config);

// //     dispatch({ type: ADD_TO_CART_SUCCESS, payload: data });
// //   } catch (error) {
// //     dispatch({
// //       type: ADD_TO_CART_FAIL,
// //       payload: error.response.data.message,
// //     });
// //   }
// // };

// export const addItemsToCart = (id, quantity) => async (dispatch) => {
//   console.log(id, quantity);

//   const { data } = await axios.get(`product/${id}`);
//   console.log("from pro DB cart", data);
//   let cartItems = {
//     product: data.product._id,
//     price: data.product.discountAmount,
//     name: data.product.name,
//     image: data.product.images[0].url,
//     stock: parseInt(data.product.stock),
//     quantity,
//   };
//   try {
//     dispatch({ type: ADD_TO_CART_REQUEST });

//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//     console.log("after cartItems", cartItems);
//     const { data } = await axios.post(`/cart/new`, { cartItems }, config);

//     dispatch({ type: ADD_TO_CART_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({
//       type: ADD_TO_CART_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };



// // GET cart items
// export const myCartItems = () => async (dispatch) => {
//   try {
//     dispatch({ type: MY_CART_REQUEST });

//     const { data } = await axios.get(`/cart/me`);

//     dispatch({ type: MY_CART_SUCCESS, payload: data.cartItems });
//   } catch (error) {
//     dispatch({
//       type: MY_CART_FAIL,
//       payload: error.response.data,
//     });
//   }
// };

// // Delete Order
// export const deleteCartItem = (id) => async (dispatch) => {
//   console.log(id, "=== action remove cart");
//   try {
//     dispatch({ type: DELETE_CART_REQUEST });

//     const { data } = await axios.delete(`/cart/${id}`);

//     dispatch({ type: DELETE_CART_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({
//       type: DELETE_CART_FAIL,
//       payload: error.response.data,
//     });
//   }
// };

// // Save Shipping Details
// export const savaShippingInfo = (shippingData) => async (dispatch) => {
//   console.log(shippingData, "======= shippingData");

//   try {
//     dispatch({ type: ADD_SHIPPING_REQUEST });

//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//     const { data } = await axios.post(
//       `/shipping/new`,
//       { shippingData },
//       config
//     );

//     dispatch({ type: ADD_SHIPPING_SUCCESS, payload: data.shippingInfo });
//   } catch (error) {
//     dispatch({
//       type: ADD_SHIPPING_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// // GET Shipping Details
// export const getShippingInfo = () => async (dispatch) => {
//   try {
//     dispatch({ type: GET_SHIPPING_REQUEST });

//     const { data } = await axios.get(`/shipping`);

//     dispatch({ type: GET_SHIPPING_SUCCESS, payload: data.shippingInfo });
//   } catch (error) {
//     dispatch({
//       type: GET_SHIPPING_FAIL,
//       payload: error.response.data,
//     });
//   }
// };

// // Clearing Errors
// export const clearErrors = () => async (dispatch) => {
//   dispatch({ type: CLEAR_ERRORS });
// };



// import axios from "../../axios";
// import {
//   ADD_TO_CART_REQUEST,
//   ADD_TO_CART_SUCCESS,
//   ADD_TO_CART_FAIL,
//   MY_CART_SUCCESS,
//   MY_CART_FAIL,
//   MY_CART_REQUEST,
//   DELETE_CART_REQUEST,
//   DELETE_CART_SUCCESS,
//   DELETE_CART_FAIL,
//   ADD_SHIPPING_REQUEST,
//   ADD_SHIPPING_SUCCESS,
//   ADD_SHIPPING_FAIL,
//   GET_SHIPPING_REQUEST,
//   GET_SHIPPING_SUCCESS,
//   GET_SHIPPING_FAIL,
//   CLEAR_ERRORS,
// } from "../../constants/cartConstants";

// /* Testing to Db */
// export const addItemsToCart = (id, quantity) => async (dispatch) => {
//   console.log(id, quantity);

//   const { data } = await axios.get(`product/${id}`);
//   console.log("from pro DB cart", data);
//   let cartItems = {
//     product: data.product._id,
//     price: data.product.discountAmount,
//     name: data.product.name,
//     image: data.product.images[0].url,
//     stock: parseInt(data.product.stock),
//     quantity,
//   };
//   try {
//     dispatch({ type: ADD_TO_CART_REQUEST });

//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//     console.log("after cartItems", cartItems);
//     const { data } = await axios.post(`/cart/new`, { cartItems }, config);

//     dispatch({ type: ADD_TO_CART_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({
//       type: ADD_TO_CART_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// // GET cart items
// export const myCartItems = () => async (dispatch) => {
//   try {
//     dispatch({ type: MY_CART_REQUEST });

//     const { data } = await axios.get(`/cart/me`);

//     dispatch({ type: MY_CART_SUCCESS, payload: data.cartItems });
//   } catch (error) {
//     dispatch({
//       type: MY_CART_FAIL,
//       payload: error.response.data,
//     });
//   }
// };

// // Delete Order
// export const deleteCartItem = (id) => async (dispatch) => {
//   console.log(id, "=== action remove cart");
//   try {
//     dispatch({ type: DELETE_CART_REQUEST });

//     const { data } = await axios.delete(`/cart/${id}`);

//     dispatch({ type: DELETE_CART_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({
//       type: DELETE_CART_FAIL,
//       payload: error.response.data,
//     });
//   }
// };

// // Save Shipping Details
// export const savaShippingInfo = (shippingData) => async (dispatch) => {
//   console.log(shippingData, "======= shippingData");

//   try {
//     dispatch({ type: ADD_SHIPPING_REQUEST });

//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//     const { data } = await axios.post(
//       `/shipping/new`,
//       { shippingData },
//       config
//     );

//     dispatch({ type: ADD_SHIPPING_SUCCESS, payload: data.shippingInfo });
//   } catch (error) {
//     dispatch({
//       type: ADD_SHIPPING_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// // GET Shipping Details
// export const getShippingInfo = () => async (dispatch) => {
//   try {
//     dispatch({ type: GET_SHIPPING_REQUEST });

//     const { data } = await axios.get(`/shipping`);

//     dispatch({ type: GET_SHIPPING_SUCCESS, payload: data.shippingInfo });
//   } catch (error) {
//     dispatch({
//       type: GET_SHIPPING_FAIL,
//       payload: error.response.data,
//     });
//   }
// };

// // Clearing Errors
// export const clearErrors = () => async (dispatch) => {
//   dispatch({ type: CLEAR_ERRORS });
// };


import axios from "../../axios";
import {
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAIL,
  MY_CART_SUCCESS,
  MY_CART_FAIL,
  MY_CART_REQUEST,
  DELETE_CART_REQUEST,
  DELETE_CART_SUCCESS,
  DELETE_CART_FAIL,
  ADD_SHIPPING_REQUEST,
  ADD_SHIPPING_SUCCESS,
  ADD_SHIPPING_FAIL,
  GET_SHIPPING_REQUEST,
  GET_SHIPPING_SUCCESS,
  GET_SHIPPING_FAIL,
  CLEAR_ERRORS,
} from "../../constants/cartConstants";

/* Testing to Db */
// export const addItemsToCart = (id, quantity) => async (dispatch) => {
//   console.log(id, quantity);

//   const { data } = await axios.get(`product/${id}`);
//   let cartItems = {
//     product: data.product._id,
//     price: data.product.price,
//     name: data.product.name,
//     image: data.product.images[0].url,
//     stock: parseInt(data.product.stock),
//     quantity,
//   };
//   try {
//     dispatch({ type: ADD_TO_CART_REQUEST });

//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//     const { data } = await axios.post(`/cart/new`, { cartItems }, config);

//     dispatch({ type: ADD_TO_CART_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({
//       type: ADD_TO_CART_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

export const addItemsToCart = (id, amount, quantity) => async (dispatch) => {
  console.log(id, quantity);

  const { data } = await axios.get(`product/${id}`);
  console.log("from pro DB cart", data);
  if (amount != 0) {
    var cartItems = {
      product: data.product._id,
      price: amount,
      tax: data.product_tax,
      name: data.product.name,
      image: data.product.images[0].url,
      stock: parseInt(data.product.stock),
      quantity,
    };
  } else {
    var cartItems = {
      product: data.product._id,
      price: data.product.discountAmount,
      tax: data.product_tax,
      name: data.product.name,
      image: data.product.images[0].url,
      stock: parseInt(data.product.stock),
      quantity,
    };
  }

  try {
    dispatch({ type: ADD_TO_CART_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log("after cartItems", cartItems);
    const { data } = await axios.post(`/cart/new`, { cartItems }, config);

    dispatch({ type: ADD_TO_CART_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ADD_TO_CART_FAIL,
      payload: error.response.data.message,
    });
  }
};

// GET cart items
export const myCartItems = () => async (dispatch) => {
  try {
    dispatch({ type: MY_CART_REQUEST });

    const { data } = await axios.get(`/cart/me`);

    dispatch({ type: MY_CART_SUCCESS, payload: data.cartItems });
  } catch (error) {
    dispatch({
      type: MY_CART_FAIL,
      payload: error.response.data,
    });
  }
};

// Delete Order
export const deleteCartItem = (id) => async (dispatch) => {
  console.log(id, "=== action remove cart");
  try {
    dispatch({ type: DELETE_CART_REQUEST });

    const { data } = await axios.delete(`/cart/${id}`);

    dispatch({ type: DELETE_CART_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DELETE_CART_FAIL,
      payload: error.response.data,
    });
  }
};

// Save Shipping Details
export const savaShippingInfo = (shippingData) => async (dispatch) => {
  console.log(shippingData, "======= shippingData");

  try {
    dispatch({ type: ADD_SHIPPING_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `/shipping/new`,
      { shippingData },
      config
    );

    dispatch({ type: ADD_SHIPPING_SUCCESS, payload: data.shippingInfo });
  } catch (error) {
    dispatch({
      type: ADD_SHIPPING_FAIL,
      payload: error.response.data.message,
    });
  }
};

// GET Shipping Details
export const getShippingInfo = () => async (dispatch) => {
  try {
    dispatch({ type: GET_SHIPPING_REQUEST });

    const { data } = await axios.get(`/shipping`);

    dispatch({ type: GET_SHIPPING_SUCCESS, payload: data.shippingInfo });
  } catch (error) {
    dispatch({
      type: GET_SHIPPING_FAIL,
      payload: error.response.data,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};