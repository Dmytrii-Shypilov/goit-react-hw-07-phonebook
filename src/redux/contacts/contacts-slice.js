import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  removeContact,
} from './contacts-operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    getFilter: (store, {payload}) => ({
      ...store,
      filter: payload
    })
  }, 
  extraReducers: {
    [fetchContacts.pending]: (store, _) => ({
      ...store,
      error: null,
      loading: true,
    }),
    [fetchContacts.fulfilled]: (store, { payload }) => {
      store.items = payload;
      store.loading = false;
    },
    [fetchContacts.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    [addContact.pending]: (store, _) => ({
      ...store,
      error: null,
      loading: true,
    }),
    [addContact.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.items = [...store.items, payload];
    },
    [addContact.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    [removeContact.pending]: (store, _) => ({
      ...store,
      error: null,
      loading: true,
    }),
    [removeContact.fulfilled]: (store, { payload }) => {
      const newList = store.items.filter(contact => contact.id !== payload);
      store.items = newList;
      store.loading = false;
      store.filter = ""
    },
    [removeContact.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export const {actions} = contactsSlice
export default contactsSlice.reducer;
