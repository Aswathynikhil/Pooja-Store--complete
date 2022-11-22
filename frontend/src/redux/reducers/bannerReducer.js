import {
  NEW_BANNER_REQUEST,
  NEW_BANNER_SUCCESS,
  NEW_BANNER_RESET,
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
  //   UPDATE_CATEGORY_RESET,
  //   UPDATE_CATEGORY_FAIL,
  CLEAR_ERRORS,
} from "../../constants/bannerConstants";

// Create New gallery images
export const newBannerImageReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_BANNER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_BANNER_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        message: action.payload.message,
      };
    case NEW_BANNER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_BANNER_RESET:
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
export const allBannerImagesReducer = (
  state = { bannerList: [] },
  action
) => {
  switch (action.type) {
    case ALL_BANNERS_REQUEST:
      return {
        loading: true,
      };
    case ALL_BANNERS_SUCCESS:
      return {
        loading: false,
        bannerList: action?.payload,
      };
    case ALL_BANNERS_FAIL:
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
export const deleteBannerImageReducer = (state = {}, action) => {
  switch (action.type) {
    // case UPDATE_CATEGORY_REQUEST:
    case DELETE_BANNER_REQUEST:
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
    case DELETE_BANNER_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload.success,
        message: action.payload.message,
      };

    // case UPDATE_CATEGORY_FAIL:
    case DELETE_BANNER_FAIL:
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
    case DELETE_BANNER_RESET:
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
