import Axios from 'axios';

const baseUrl = 'https://react-ssr-api.herokuapp.com';

export const FETCH_USERS = 'FETCH_USERS';

export const fetchUsers = () => async dispatch => {
  const response = await Axios.get(`${baseUrl}/users`);
  dispatch({
    type: FETCH_USERS,
    payload: response,
  });
};
