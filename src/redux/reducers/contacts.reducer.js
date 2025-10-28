// Define Action types
export const FETCH_CONTACTS = "FETCH_CONTACTS";
export const FETCH_CONTACTS_SUCCESS = "FETCH_CONTACTS_SUCCESS";
export const FETCH_CONTACTS_FAILURE = "FETCH_CONTACTS_FAILURE";

export const CREATE_CONTACT = "CREATE_CONTACT";
export const CREATE_CONTACT_SUCCESS = "CREATE_CONTACT_SUCCESS";
export const CREATE_CONTACT_FAILURE = "CREATE_CONTACT_FAILURE";

export const UPDATE_CONTACT = "UPDATE_CONTACT";
export const UPDATE_CONTACT_SUCCESS = "UPDATE_CONTACT_SUCCESS";
export const UPDATE_CONTACT_FAILURE = "UPDATE_CONTACT_FAILURE";

export const DELETE_CONTACT = "DELETE_CONTACT";
export const DELETE_CONTACT_SUCCESS = "DELETE_CONTACT_SUCCESS";
export const DELETE_CONTACT_FAILURE = "DELETE_CONTACT_FAILURE";

export const RESET_CONTACT_FEEDBACK = "RESET_CONTACT_FEEDBACK";

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
    case FETCH_CONTACTS:
      return {
        ...state,
        loading: true,
        error: null,
        success: false,
        lastAction: null,
      };
    case FETCH_CONTACTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        success: true,
        lastAction: "FETCH_CONTACTS",
      };
    case FETCH_CONTACTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false,
        lastAction: "FETCH_CONTACTS",
      };

    // CREATE
    case CREATE_CONTACT:
      return {
        ...state,
        loading: true,
        error: null,
        success: false,
        lastAction: null,
      };
    case CREATE_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        lastAction: "CREATE_CONTACT",
      };
    case CREATE_CONTACT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false,
        lastAction: "CREATE_CONTACT",
      };

    // UPDATE
    case UPDATE_CONTACT:
      return {
        ...state,
        loading: true,
        error: null,
        success: false,
        lastAction: null,
      };
    case UPDATE_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        lastAction: "UPDATE_CONTACT",
      };
    case UPDATE_CONTACT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false,
        lastAction: "UPDATE_CONTACT",
      };

    // DELETE
    case DELETE_CONTACT:
      return {
        ...state,
        loading: true,
        error: null,
        success: false,
        lastAction: null,
      };
    case DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        lastAction: "DELETE_CONTACT",
      };
    case DELETE_CONTACT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false,
        lastAction: "DELETE_CONTACT",
      };

    // RESET REDUCER
    case RESET_CONTACT_FEEDBACK:
      return { ...state, success: false, error: null, lastAction: null };

    default:
      return state;
  }
}
