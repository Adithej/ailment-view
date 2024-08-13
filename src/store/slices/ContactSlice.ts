import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Contact {
  id: string;
  name: string;
  age: string;
  email: string;
  city: string;
  state: string;
  pin: string;
  sex: string;
  active: string;
}

interface ContactState {
  contacts: Contact[];
  currentContact: Contact | null;
}

const initialState: ContactState = {
  contacts: [],
  currentContact: null,
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    updateContact: (state, action: PayloadAction<Contact>) => {
      const index = state.contacts.findIndex(contact => contact.id === action.payload.id);
      if (index !== -1) {
        state.contacts[index] = action.payload;
      }
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
    setCurrentContact: (state, action: PayloadAction<string>) => {
      state.currentContact = state.contacts.find(contact => contact.id === action.payload) || null;
    },
    clearCurrentContact: (state) => {
      state.currentContact = null;
    },
  },
});

export const { addContact, updateContact, deleteContact, setCurrentContact, clearCurrentContact } = contactSlice.actions;
export default contactSlice.reducer;
export type {Contact}