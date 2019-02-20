export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_ADMINS = 'FETCH_ADMINS';
export const FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';

export const fetchUsers = () => async (dispatch, _, api) => {
  const response = await api.get('/users');
  dispatch({
    type: FETCH_USERS,
    payload: response,
  });
};

export const fetchAdmins = () => async (dispatch, _, api) => {
  const response = await api.get('/admins');
  dispatch({
    type: FETCH_ADMINS,
    payload: response,
  });
};

export const fetchCurrentUser = () => async (dispatch, _, api) => {
  const response = await api.get('/current_user');
  dispatch({
    type: FETCH_CURRENT_USER,
    payload: response,
  });
};
