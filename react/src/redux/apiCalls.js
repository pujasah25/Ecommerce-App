import { loginStart, loginSuccess, loginFailure } from "./userReducer";
import { publicRequest } from "../makeRequest";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try { // login end point
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
