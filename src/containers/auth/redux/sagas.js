import {
  all, takeLatest, put, call,
} from 'redux-saga/effects';

import {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_ERROR,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
} from './constants';
import {
  request,
  addTokenToHttp,
  StorageUtils,
  getServerError,
} from '../../../utils';
import * as NavigationService from '../../../navigator/NavigationService';

function sendLogin(data) {
  return request.post('/rest-auth/login/', data);
}

function* handleLogin(action) {
  const {
    user: { email, password },
  } = action;

  try {
    const { status, data } = yield call(sendLogin, { email, password });

    if (status >= 200 && status < 300) {
      yield put({
        type: AUTH_LOGIN_SUCCESS,
        accessToken: data.key,
        user: data,
      });

      StorageUtils.setAccessToken(data.key);
      StorageUtils.setUser(data);
      addTokenToHttp(data.key);

      // you can change the navigate for navigateAndResetStack to go to a protected route
      NavigationService.navigate('App');
    } else {
      yield put({
        type: AUTH_LOGIN_ERROR,
        error: 'Unknown Error',
      });
    }
  } catch (error) {
    const err = getServerError(error.response?.data)
      || "Can't sign in with provided credentials";
    yield put({
      type: AUTH_LOGIN_ERROR,
      error: err,
    });
  }
}

function handleLogout() {
  StorageUtils.removeAccessToken();
  StorageUtils.removeUser();
  addTokenToHttp('');

  // you can change the navigate for navigateAndResetStack to go to a protected route
  NavigationService.navigate('Auth');
}

export default all([
  takeLatest(AUTH_LOGIN_REQUEST, handleLogin),
  takeLatest(AUTH_LOGOUT, handleLogout),
]);
