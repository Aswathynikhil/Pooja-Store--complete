import axios from "../../axios";
import {
  NEW_BANNER_REQUEST,
  NEW_BANNER_SUCCESS,
  NEW_BANNER_FAIL,
  ALL_BANNERS_REQUEST,
  ALL_BANNERS_SUCCESS,
  ALL_BANNERS_FAIL,
  GET_BANNER_REQUEST,
  GET_BANNER_SUCCESS,
  GET_BANNER_FAIL,
  DELETE_BANNER_REQUEST,
  DELETE_BANNER_SUCCESS,
  DELETE_BANNER_RESET,
  DELETE_BANNER_FAIL,
//   UPDATE_CATEGORY_REQUEST,
//   UPDATE_CATEGORY_SUCCESS,
//   UPDATE_CATEGORY_FAIL,
  CLEAR_ERRORS,
} from "../../constants/bannerConstants";

// CREATE banner
export const createBanner = (bannerImage) => async (dispatch) => {
  try {
    dispatch({ type: NEW_BANNER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `/admin/banner/new`,
      bannerImage,
      config
    );

    dispatch({
      type: NEW_BANNER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type:NEW_BANNER_FAIL,
      payload: error.response.data,
    });
  }
};

// Get All banner
export const getAllBanners = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_BANNERS_REQUEST });

    const { data } = await axios.get(`/admin/banners`);
    console.log(data, "data");

    dispatch({
      type: ALL_BANNERS_SUCCESS,
      payload: data?.banners,
    });
  } catch (error) {
    dispatch({
      type: ALL_BANNERS_FAIL,
      payload: error.response.data,
    });
  }
};

// // Single Category Deatiils
// export const getCategoryDetails = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: GET_CATEGORY_REQUEST });

//     const { data } = await axios.get(`/admin/category/${id}`);

//     dispatch({
//       type: GET_CATEGORY_SUCCESS,
//       payload: data.category,
//     });
//   } catch (error) {
//     dispatch({
//       type: GET_CATEGORY_FAIL,
//       payload: error.response.data,
//     });
//   }
// };

// // Update category --Admin
// export const updateCategory = (id, categoryData) => async (dispatch) => {
//   try {
//     dispatch({ type: UPDATE_CATEGORY_REQUEST });

//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };

//     const { data } = await axios.put(
//       `/admin/category/${id}`,
//       categoryData,
//       config
//     );

//     dispatch({
//       type: UPDATE_CATEGORY_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: UPDATE_CATEGORY_FAIL,
//       payload: error.response.data,
//     });
//   }
// };

// Delete banner --Admin
export const deleteBannerImage = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_BANNER_REQUEST });

    const { data } = await axios.delete(`/admin/banner/delete/${id}`);

    dispatch({
      type: DELETE_BANNER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_BANNER_FAIL,
      payload: error.response.data,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
