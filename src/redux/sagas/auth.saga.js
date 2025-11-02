import {
  takeEvery,
  put,
  call,
  fork,
  take,
  cancelled,
} from "redux-saga/effects";
import { login, logout, register } from "../../firebase/auth.js";
import { createAuthChannel } from "../../firebase/listeners";
import { firestoreCreateDocument } from "../../firebase/firestore";

// READ / FETCH (Initialize Firebase Listener)
function* authListener() {
  const channel = yield call(createAuthChannel);
  try {
    while (true) {
      const { user, error } = yield take(channel);
      if (user && !error) {
        yield put({
          type: "AUTH_LOAD",
          payload: { account: user.email, firebaseID: user.uid },
        });
      } else if (error) {
        yield put({ type: "AUTH_ERROR", payload: error.message });
      } else {
        yield put({ type: "AUTH_CLEAR" });
      }
    }
  } finally {
    if (yield cancelled()) {
      channel.close();
    }
  }
}

// LOG IN
function* authLogin(action) {
  try {
    const { email, password } = action.payload;
    yield call(login, email, password);
  } catch (error) {
    throw error;
  }
}

// LOG OUT
function* authLogout() {
  try {
    yield call(logout);
  } catch (error) {
    throw error;
  }
}

// REGISTER
// 1. Register New User Account in Firebase - Get firebaseID
// 2. Create New User Document in Firestore with firebaseID
function* authRegister(action) {
  const { first_name, last_name, email, password } = action.payload;
  try {
    const authUser = yield call(register, email, password);
    const firebaseID = authUser.user.uid;
    const user = {
      firebase_ID: firebaseID,
      account: email,
      first_name: first_name,
      last_name: last_name,
      role: "User",
      active: true,
    };
    const userID = yield call(firestoreCreateDocument, "users", user);
    if (firebaseID && userID) {
      console.log("New Account Registered: ", firebaseID);
      console.log("User Created: ", userID);
    }
  } catch (error) {
    throw error;
  }
}

// Combine Sagas
function* authSaga() {
  yield fork(authListener);
  yield takeEvery("AUTH_LOGIN", authLogin);
  yield takeEvery("AUTH_LOGOUT", authLogout);
  yield takeEvery("AUTH_REGISTER", authRegister);
}

// Export Module
export default authSaga;
