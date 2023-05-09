import {createAction} from '@reduxjs/toolkit';

export const getContacts = createAction('getContacts')
export const addContact = createAction('addContact');
export const deleteContact = createAction('deleteContact');
export const filterContacts = createAction('filterContacts');


