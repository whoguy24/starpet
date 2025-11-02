import { takeEvery, put, call, fork, take } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import { login, logout, authState } from "../../firebase/auth.js";

// Initialize Saga Channel to Subscribe to Firebase Events
function authChannel() {
  return eventChannel((emit) => {
    const unsubscribe = authState(
      (user) => emit({ user }),
      (error) => emit({ error })
    );
    return () => unsubscribe();
  });
}

// Initialize Firebase Listener
function* authListener() {
  const channel = yield call(authChannel);
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

// Login to Firebase
function* authLogin(action) {
  try {
    const { email, password } = action.payload;
    yield call(login, email, password);
  } catch (error) {
    throw error;
  }
}

// Log Out of Firebase
function* authLogout() {
  try {
    yield call(logout);
  } catch (error) {
    throw error;
  }
}

// Combine Sagas
function* authSaga() {
  yield fork(authListener);
  yield takeEvery("AUTH_LOGIN", authLogin);
  yield takeEvery("AUTH_LOGOUT", authLogout);
}

// Export Module
export default authSaga;
