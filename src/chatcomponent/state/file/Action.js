import { FILE_UPLOAD_REQUEST, FILE_UPLOAD_SUCCESS, FILE_UPLOAD_FAILURE 

} from "./ActionType";
import {api} from "../../config"

export const uploadFile = (file) => async (dispatch) => {
  dispatch({ type: FILE_UPLOAD_REQUEST });

  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await api("/process", formData, {
      headers: { "Content-Type": "multipart/form-data" 

      },
    });
    
    dispatch({type: FILE_UPLOAD_SUCCESS, payload: response.data,});
  } catch (error) {
    dispatch({type: FILE_UPLOAD_FAILURE,payload: error.message || "Error uploading file",});
  }
};
