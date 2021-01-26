import * as actions from './constants';

export const login = (user) => ({
  type: actions.AUTH_LOGIN_REQUEST,
  user,
});

export const logout = () => ({
  type: actions.AUTH_LOGOUT,
});

export const setUser = (user, token) => ({
  type: actions.AUTH_USER,
  user,
  token,
});
