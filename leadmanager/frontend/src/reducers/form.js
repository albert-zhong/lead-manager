import { CLEAR_FORM, CHANGE_FORM } from '../actions/types';

const initialState = {
    name: '',
    email: '',
    message: '',
}

export default function(state = initialState, action) {
    switch (action.type) {
        case CLEAR_FORM:
            return {
                name: '',
                email: '',
                message: '',
            };
        case CHANGE_FORM:
            return {
                name: action.name,
                email: action.email,
                message: action.message,
            }
        default:
            return state;
    }
}
