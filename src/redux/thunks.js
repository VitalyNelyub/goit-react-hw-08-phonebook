import { createAsyncThunk } from "@reduxjs/toolkit";
import { filterContacts } from "./actions";
import { createContactsApi, deleteContactsApi, getContactsApi } from "service/fetchBackend";


export const getContactsThunk = createAsyncThunk('contacts/getContacts', (_, thunkAPI) => {
    return getContactsApi(thunkAPI.getState().login.token)
    
})

export const createContactsThunk = createAsyncThunk('contacts/createContacts', (contact, thunkAPI) => {
    return createContactsApi(contact, thunkAPI.getState().login.token)
})

export const deleteContactsThunk = createAsyncThunk('contacts/deleteContacts', (id) => {
    return deleteContactsApi(id)
})


export const filterContactsThunk = createAsyncThunk('contacts/filterContacts', (e) => {
    return filterContacts(e)


})

