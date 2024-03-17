import {
  GET_ERROR,
  GET_REQUEST,
  GET_SUCCESS,
  POST_ERROR,
  POST_REQUEST,
  POST_SUCCESS,
  UPDATE_ERROR,
  UPDATE_REQUEST,
  UPDATE_SUCCESS,
} from "./action";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case POST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case POST_SUCCESS:
      return {
        ...state,
        data: state.data,
        isLoading: false,
      };
    case POST_ERROR:
      return {
        ...state,
        isError: true,
      };
    case GET_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    case GET_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

      case UPDATE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    case UPDATE_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
