export const getContacts = store => store.contacts.items;
export const getLoader = store => store.contacts.loading;
export const getError = store => store.contacts.error;
export const getFilterInput = store => store.contacts.filter
export const getFilteredItems = store => {
  const filter = store.contacts.filter;
  if (!filter) {
    return store.contacts.items;
  }
  const filterQuery = filter.toLowerCase();
  const filteredItems = store.contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(filterQuery)
  );
  return filteredItems;
};
