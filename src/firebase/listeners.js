// Import Modules
import { eventChannel } from "redux-saga";
import { firestoreListener } from "./firestore";
import { authState } from "./auth";

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
