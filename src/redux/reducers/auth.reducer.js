// Define Initial State
const initialState = {
  currentUser: null, // Firebase user object (uid, email, etc.)
  status: "idle", // 'idle' | 'loading' | 'authenticated' | 'unauthenticated'
  error: null, // Optional: auth error messages
};

// Configure Reducer
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "AUTH_LOADING":
      return {
        ...state,
        status: "loading",
        error: null,
      };

    case "USER_LOGGED_IN":
      return {
        ...state,
        currentUser: action.payload,
        status: "authenticated",
        error: null,
      };

    case "USER_LOGGED_OUT":
      return {
        ...state,
        currentUser: null,
        status: "unauthenticated",
        error: null,
      };

    case "AUTH_ERROR":
      return {
        ...state,
        status: "unauthenticated",
        error: action.payload,
      };

    default:
      return state;
  }
}
