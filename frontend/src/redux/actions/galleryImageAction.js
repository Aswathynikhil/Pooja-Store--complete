import axios from "../../axios";
import {
  NEW_GALLERYIMG_REQUEST,
  NEW_GALLERYIMG_SUCCESS,
  NEW_GALLERYIMG_FAIL,
  ALL_GALLERYIMGS_REQUEST,
  ALL_GALLERYIMGS_SUCCESS,
  ALL_GALLERYIMGS_FAIL,
  GET_GALLERYIMG_REQUEST,
  GET_GALLERYIMG_SUCCESS,
  GET_GALLERYIMG_FAIL,
  DELETE_GALLERYIMG_REQUEST,
  DELETE_GALLERYIMG_SUCCESS,
  // DELETE_GALLERYIMG_RESET,
  DELETE_GALLERYIMG_FAIL,
  //   UPDATE_CATEGORY_REQUEST,
  //   UPDATE_CATEGORY_SUCCESS,
  //   UPDATE_CATEGORY_FAIL,
  CLEAR_ERRORS,
} from "../../constants/galleryImageConstants";

// CREATE galleryImage
export const createGalleryImage = (galleryImage) => async (dispatch) => {
  try {
    dispatch({ type: NEW_GALLERYIMG_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `/admin/galleryImage/new`,
      galleryImage,
      config
    );

    dispatch({
      type: NEW_GALLERYIMG_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_GALLERYIMG_FAIL,
      payload: error.response.data,
    });
  }
};

// Get All gallery images
export const getAllGalleryImages = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_GALLERYIMGS_REQUEST });

    const { data } = await axios.get(`/admin/galleryImages`);
    console.log(data, "data");

    dispatch({
      type: ALL_GALLERYIMGS_SUCCESS,
      payload: data?.galleryImgs,
    });
  } catch (error) {
    dispatch({
      type: ALL_GALLERYIMGS_FAIL,
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

// Delete gallery image --Admin
export const deleteGalleryImages = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_GALLERYIMG_REQUEST });

    const { data } = await axios.delete(`/admin/galleryImage/delete/${id}`);

    dispatch({
      type: DELETE_GALLERYIMG_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_GALLERYIMG_FAIL,
      payload: error.response.data,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
