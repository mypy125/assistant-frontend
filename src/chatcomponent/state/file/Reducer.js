import { FILE_UPLOAD_REQUEST, FILE_UPLOAD_SUCCESS, FILE_UPLOAD_FAILURE 
    
} from "./ActionType";

const initialState = {
  loading: false,
  response: null,
  error: null,
};

const fileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILE_UPLOAD_REQUEST:
      return { ...state, loading: true, error: null };
    case FILE_UPLOAD_SUCCESS:
      return { ...state, loading: false, response: action.payload };
    case FILE_UPLOAD_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default fileReducer;
