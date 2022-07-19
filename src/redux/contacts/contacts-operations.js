import { createAsyncThunk } from '@reduxjs/toolkit';

import API from 'services/fetch';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const data = await API.fetchContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (data, { rejectWithValue, getState }) => {
    try {
      const newContact = await API.addContact(data);
      return newContact;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    condition: (data, { getState }) => {
      const { contacts } = getState();
      const duplicate = contacts.items.find(
        item => item.name.toLowerCase() === data.name.toLowerCase()
      );
      if (duplicate) {
        alert(`${data.name} is already in phonebook`);
        return false;
      }
      return data;
    },
  }
);

export const removeContact = createAsyncThunk(
  'contacts/remove',
  
  async (id, { rejectWithValue }) => {
    try {
      const { id: deleteId } = await API.removeContact(id);
      return deleteId;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
