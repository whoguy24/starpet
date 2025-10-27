// Build Reducer Actions
const contactsReducer = (state = [], action) => {
    switch (action.type) {
      case 'LOAD_CONTACTS':
        return action.payload;
      case 'UNLOAD_CONTACTS':
        return [];
      default:
        return state;
    }
};
  
// Export Reducer
export default contactsReducer;
export const contactsStore = state => state.contacts