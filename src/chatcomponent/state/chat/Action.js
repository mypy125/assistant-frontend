import { api } from "../../config/api";
import { FILE_LOADING, FILE_SUCCESS, FILE_ERROR, 
  REPORT_LOADING, REPORT_SUCCESS, REPORT_ERROR, 
  CHAT_LOADING, CHAT_SUCCESS, CHAT_ERROR 
} from "./ActionType";

export const processFileAction = (file) => async (dispatch) => {
  dispatch({ type: FILE_LOADING });
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await api.post("/file/process", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    dispatch({ type: FILE_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FILE_ERROR, payload: error.message });
  }
};

export const generateReportAction = (report, file) => async (dispatch) => {
  dispatch({ type: REPORT_LOADING });
  try {
    const formData = new FormData();
    if (report) formData.append("report", report);
    if (file) formData.append("file", file);

    const response = await api.post("/report/generate", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    dispatch({ type: REPORT_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: REPORT_ERROR, payload: error.message });
  }
};

export const getChatResponseAction = (userMessage) => async (dispatch) => {
  dispatch({ type: CHAT_LOADING });
  try {
    const response = await api.post("/chat/respond", { userMessage });
    dispatch({ type: CHAT_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: CHAT_ERROR, payload: error.message });
  }
};