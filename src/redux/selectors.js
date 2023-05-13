export const selectContacts = state => {
    // console.log(state.contacts.contacts.items)
  return state.contacts.contacts.items;
};
export const selectFilter = state => state.contacts.contacts.filter;
export const selectLoader = state => state.contacts.contacts.isLoading;
export const selectisLogin = state => state.login.token;
export const selectCurrentUser = state => state.login.user;
