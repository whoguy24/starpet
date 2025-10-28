// Define Action types
export const FETCH_USERS = "FETCH_USERS";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const CREATE_USER = "CREATE_USER";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAILURE = "CREATE_USER_FAILURE";

export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";

export const DELETE_USER = "DELETE_USER";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";

export const RESET_USER_FEEDBACK = "RESET_USER_FEEDBACK";

// Define Initial State
const initialState = {
  data: [],
  loading: false,
  error: null,
  success: false,
  lastAction: null,
};

// Configure Reducer
export default function contactsReducer(state = initialState, action) {
  switch (action.type) {
    // FETCH
    case FETCH_USERS:
      return {
        ...state,
        loading: true,
        error: null,
        success: false,
        lastAction: null,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        success: true,
        lastAction: "FETCH_USERS",
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false,
        lastAction: "FETCH_USERS",
      };

    // CREATE
    case CREATE_USER:
      return {
        ...state,
        loading: true,
        error: null,
        success: false,
        lastAction: null,
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        lastAction: "CREATE_USER",
      };
    case CREATE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false,
        lastAction: "CREATE_USER",
      };

    // UPDATE
    case UPDATE_USER:
      return {
        ...state,
        loading: true,
        error: null,
        success: false,
        lastAction: null,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        lastAction: "UPDATE_USER",
      };
    case UPDATE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false,
        lastAction: "UPDATE_USER",
      };

    // DELETE
    case DELETE_USER:
      return {
        ...state,
        loading: true,
        error: null,
        success: false,
        lastAction: null,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        lastAction: "DELETE_USER",
      };
    case DELETE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false,
        lastAction: "DELETE_USER",
      };

    // RESET REDUCER
    case RESET_USER_FEEDBACK:
      return { ...state, success: false, error: null, lastAction: null };

    default:
      return state;
  }
}
