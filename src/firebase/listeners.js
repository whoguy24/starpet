// Import Modules
import { eventChannel } from "redux-saga";
import { firestoreListener } from "./firestore";
import { authState } from "./auth";

import { call, take, put, cancelled } from "redux-saga/effects";

// Initialize Channel for Listening to Firestore Collection
export function createChannel(collection) {
  return eventChannel((emit) => {
    const unsubscribe = firestoreListener(collection, emit);
    return () => unsubscribe();
  });
}

// Initialize Channel for Listening to Firebase Authentication
export function createAuthChannel() {
  return eventChannel((emit) => {
    const unsubscribe = authState(
      (user) => emit({ user }),
      (error) => emit({ error })
    );
    return () => unsubscribe();
  });
}

export function* subscribeToCollection(collection, loadActionType) {
  const channel = yield call(createChannel, collection);

  try {
    while (true) {
      const data = yield take(channel);
      yield put({ type: loadActionType, payload: data });
    }
  } finally {
    if (yield cancelled()) {
      channel.close();
    }
  }
}
