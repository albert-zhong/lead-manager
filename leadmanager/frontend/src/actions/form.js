import { CLEAR_FORM, CHANGE_FORM } from './types';

// CLEAR_FORM
export const clearForm = () => ({ type: CLEAR_FORM });

// CHANGE_FORM
export const changeForm = (lead) => ({
    type: CHANGE_FORM,
    name: lead.name,
    email: lead.email,
    message: lead.message,
});
