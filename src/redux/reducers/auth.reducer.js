const initialState = {
  currentUser: null,
  status: "idle",
  error: null,
};

// Configure Reducer
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "AUTH_LOAD":
      return {
        ...state,
        currentUser: action.payload,
        status: "authenticated",
        error: null,
      };
    case "AUTH_CLEAR":
      return {
        ...state,
        currentUser: null,
        status: "unauthenticated",
        error: null,
      };
    case "AUTH_ERROR":
      return {
        ...state,
        status: "error",
        error: action.payload,
      };
    default:
      return state;
  }
}
