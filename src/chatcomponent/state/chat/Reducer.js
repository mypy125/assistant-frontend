import {
  FILE_LOADING, FILE_SUCCESS, FILE_ERROR,
  REPORT_LOADING, REPORT_SUCCESS, REPORT_ERROR,
  CHAT_LOADING, CHAT_SUCCESS, CHAT_ERROR
} from "./ActionType";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILE_LOADING:
      return { ...state, loading: true };
    case FILE_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FILE_ERROR:
      return { ...state, loading: false, error: action.payload };

    case REPORT_LOADING:
      return { ...state, loading: true };
    case REPORT_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case REPORT_ERROR:
      return { ...state, loading: false, error: action.payload };

    case CHAT_LOADING:
      return { ...state, loading: true };
    case CHAT_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case CHAT_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default chatReducer;