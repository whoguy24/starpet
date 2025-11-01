import { takeEvery, put, call, fork, take } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import { login, logout, authState } from "../../firebase/auth.js";

function createAuthChannel() {
  return eventChannel((emit) => {
    const unsubscribe = authState(
      (user) => emit({ user }),
      (error) => emit({ error })
    );
    return () => unsubscribe();
  });
}

function* authListener() {
  const channel = yield call(createAuthChannel);
  try {
    while (true) {
      const { user, error } = yield take(channel);
      if (error) {
        yield put({ type: "AUTH_ERROR", payload: error.message });
        continue;
      }
      if (user) {
        yield put({ type: "AUTH_LOAD", payload: user });
      } else {
        yield put({ type: "AUTH_CLEAR" });
      }
    }
  } finally {
    channel.close();
  }
}

function* handleAuthLogin(action) {
  try {
    const { email, password } = action.payload;
    const user = yield call(login, email, password);
    yield put({ type: "AUTH_LOAD", payload: user });
  } catch (error) {
    yield put({ type: "AUTH_ERROR", payload: error.message });
    throw error;
  }
}

function* handleAuthLogout() {
  try {
    yield call(logout);
    yield put({ type: "AUTH_CLEAR" });
  } catch (error) {
    yield put({ type: "AUTH_ERROR", payload: error.message });
    throw error;
  }
}

function* authSaga() {
  yield fork(authListener);
  yield takeEvery("AUTH_LOGIN", handleAuthLogin);
  yield takeEvery("AUTH_LOGOUT", handleAuthLogout);
}

// Export Module
export default authSaga;
