import { takeEvery, put, call } from "redux-saga/effects";
import { login, logout } from "../../firebase/auth.js";

function* handleAuthLogin(action) {
  try {
    const { email, password } = action.payload;
    yield call(login, email, password);
  } catch (error) {
    throw error;
  }
}

function* handleAuthLogout() {
  try {
    yield call(logout);
  } catch (error) {
    throw error;
  }
}

export default function* authSaga() {
  yield takeEvery("AUTH_LOGIN", handleAuthLogin);
  yield takeEvery("AUTH_LOGOUT", handleAuthLogout);
}
