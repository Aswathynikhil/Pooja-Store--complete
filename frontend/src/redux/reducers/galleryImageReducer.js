import {
  NEW_GALLERYIMG_REQUEST,
  NEW_GALLERYIMG_SUCCESS,
  NEW_GALLERYIMG_RESET,
  NEW_GALLERYIMG_FAIL,
  ALL_GALLERYIMGS_REQUEST,
  ALL_GALLERYIMGS_SUCCESS,
  ALL_GALLERYIMGS_FAIL,
  GET_GALLERYIMG_REQUEST,
  GET_GALLERYIMG_SUCCESS,
  GET_GALLERYIMG_FAIL,
  DELETE_GALLERYIMG_REQUEST,
  DELETE_GALLERYIMG_SUCCESS,
  DELETE_GALLERYIMG_RESET,
  DELETE_GALLERYIMG_FAIL,
//   UPDATE_CATEGORY_REQUEST,
//   UPDATE_CATEGORY_SUCCESS,
//   UPDATE_CATEGORY_RESET,
//   UPDATE_CATEGORY_FAIL,
  CLEAR_ERRORS,
} from "../../constants/galleryImageConstants";

// Create New gallery images
export const newGalleryImageReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_GALLERYIMG_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_GALLERYIMG_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        message: action.payload.message,
      };
    case NEW_GALLERYIMG_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_GALLERYIMG_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

// All gallery images --Admin
export const allGalleryImagesReducer = (state = { galleryImageList:[] }, action) => {
  switch (action.type) {
    case ALL_GALLERYIMGS_REQUEST:
      return {
        loading: true,
      };
    case ALL_GALLERYIMGS_SUCCESS:
      return {
        loading: false,
        galleryImageList: action?.payload,
      };
    case ALL_GALLERYIMGS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// // Single Category
// export const categoryDetailsReducer = (state = { category: {} }, action) => {
//   switch (action.type) {
//     case GET_CATEGORY_REQUEST:
//       return {
//         loading: true,
//       };
//     case GET_CATEGORY_SUCCESS:
//       return {
//         loading: false,
//         category: action.payload,
//       };
//     case GET_CATEGORY_FAIL:
//       return {
//         loading: false,
//         error: action.payload,
//       };
//     case CLEAR_ERRORS:
//       return {
//         ...state,
//         error: null,
//       };
//     default:
//       return state;
//   }
// };

// Orders Reducer update and Delete --Admin
export const deleteGalleryImageReducer = (state = {}, action) => {
  switch (action.type) {
    // case UPDATE_CATEGORY_REQUEST:
    case DELETE_GALLERYIMG_REQUEST:
      return {
        ...state,
        loading: true,
      };
    // case UPDATE_CATEGORY_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     isUpdated: action.payload.success,
    //     message: action.payload.message,
    //   };
    case DELETE_GALLERYIMG_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload.success,
        message: action.payload.message,
      };

    // case UPDATE_CATEGORY_FAIL:
    case DELETE_GALLERYIMG_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    // case UPDATE_CATEGORY_RESET:
    //   return {
    //     ...state,
    //     isUpdated: false,
    //     message: null,
    //   };
    case DELETE_GALLERYIMG_RESET:
      return {
        ...state,
        isDeleted: false,
        message: null,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
