import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contacts-slice"
// import { contactsReducer } from "./contacts/contactsReducer";


const store = configureStore({
    reducer: {
        contacts: contactsReducer,
    }
})

export default store