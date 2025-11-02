const initialState = {
  account: null,
  firebaseID: null,
  status: "LOADING",
  error: null,
};

// Configure Reducer
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "AUTH_LOAD":
      return {
        ...state,
        account: action.payload.account,
        firebaseID: action.payload.firebaseID,
        status: "AUTHENTICATED",
        error: null,
      };
    case "AUTH_CLEAR":
      return {
        ...state,
        account: null,
        firebaseID: null,
        status: "UNAUTHENTICATED",
        error: null,
      };
    case "AUTH_ERROR":
      return {
        ...state,
        account: null,
        firebaseID: null,
        status: "ERROR",
        error: action.payload,
      };
    default:
      return state;
  }
}
