import { combineReducers } from 'redux';
import { FETCH_USERS, FETCH_ADMINS, FETCH_CURRENT_USER } from '../actions';

const users = (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload.data;
    default:
      return state;
  }
};

const admins = (state = [], action) => {
  switch (action.type) {
    case FETCH_ADMINS:
      return action.payload.data;
    default:
      return state;
  }
};

const auth = (state = null, action) => {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return action.payload.data || false;
    default:
      return state;
  }
};

export default combineReducers({
  users,
  admins,
  auth,
});
