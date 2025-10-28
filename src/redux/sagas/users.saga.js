// Import Modules
import {
  put,
  takeLatest,
  call,
  fork,
  take,
  select,
  cancelled,
} from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import {
  firestoreListener,
  firestoreCreateDocument,
  firestoreUpdateDocument,
  firestoreDeleteDocument,
} from "../../firebase/firestore";

// Action types
const CREATE_USER = "CREATE_USER";
const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
const CREATE_USER_FAILURE = "CREATE_USER_FAILURE";

const UPDATE_USER = "UPDATE_USER";
const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";

const DELETE_USER = "DELETE_USER";
const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";

// Create Listener Channel
function createUsersChannel() {
  return eventChannel((emit) => {
    const unsubscribe = firestoreListener("users", emit);
    return () => unsubscribe();
  });
}

// Initialize Listener
function* usersListener() {
  //   const currentUser = yield select((state) => state.auth.currentUser);
  //   if (!currentUser) return;
  const channel = yield call(createUsersChannel);
  try {
    while (true) {
      const users = yield take(channel);
      yield put({ type: "FETCH_USERS_SUCCESS", payload: users });
    }
  } finally {
    if (yield cancelled()) {
      channel.close();
    }
  }
}

// Create User
function* createUser(action) {
  const { email, first_name, last_name } = action.payload;
  try {
    const contactID = yield call(firestoreCreateDocument, "contacts", {
      email,
      first_name,
      last_name,
    });
    yield call(firestoreCreateDocument, "users", {
      email,
      contactID,
      first_name,
      last_name,
    });
    yield put({ type: CREATE_USER_SUCCESS, payload: { contactID } });
  } catch (error) {
    console.error("Registration failed:", error);
    yield put({ type: CREATE_USER_FAILURE, payload: error.message });
  }
}

// Update User
function* updateUser(action) {
  try {
    const { id, date_created, ...data } = action.payload;
    yield call(firestoreUpdateDocument, "users", id, data);
    yield put({ type: UPDATE_USER_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: UPDATE_USER_FAILURE, payload: error.message });
  }
}

// Delete User
function* deleteUser(action) {
  try {
    yield call(firestoreDeleteDocument, "users", action.payload.id);
    yield put({ type: DELETE_USER_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: DELETE_USER_FAILURE, payload: error.message });
  }
}

// Combine Saga Functions
function* userSaga() {
  yield fork(usersListener);
  yield takeLatest(CREATE_USER, createUser);
  yield takeLatest(UPDATE_USER, updateUser);
  yield takeLatest(DELETE_USER, deleteUser);
}

// Export Module
export default userSaga;
