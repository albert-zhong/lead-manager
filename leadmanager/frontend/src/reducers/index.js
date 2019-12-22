import { combineReducers } from 'redux';
import leads from './leads';
import errors from './errors';
import messages from './messages';
import form from './form';

export default combineReducers({
    leads,
    errors,
    messages,
    form,
});
