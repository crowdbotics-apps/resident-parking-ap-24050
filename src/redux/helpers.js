import { put, call } from 'redux-saga/effects';
import { Alert } from 'react-native';

import * as NavigationService from '../navigator/NavigationService';
import { getServerError } from '../utils/helpers';

export const requestType = (type) => `${type}_REQUEST`;
export const successType = (type) => `${type}_SUCCESS`;
export const errorType = (type) => `${type}_ERROR`;

export function* sagasRunner({
  actionType, errorMessage = 'Something went wrong', alertError, callFunc, callData,
  updateType, updateData, keepLoadingTrue, loadingType, route, routeParams, dataId, onSuccess,
}) {
  try {
    if (loadingType) {
      yield put({
        type: loadingType,
        payload: true,
      });
    }

    const { status, data } = yield call(callFunc, callData);
    // console.log('status :', status);
    // console.log('res :', data);

    if (status >= 200 && status < 300) {
      yield put({
        type: successType(actionType),
        payload: data,
        dataId,
      });

      if (updateType) {
        yield put({
          ...updateData,
          type: updateType,
        });
      }

      if (loadingType && !keepLoadingTrue) {
        yield put({
          type: loadingType,
          payload: false,
        });
      }

      if (onSuccess) {
        onSuccess(data);
      }

      if (route) {
        NavigationService.navigate(route, routeParams);
      }
    } else {
      yield put({
        type: errorType(actionType),
        error: 'Unknown Error',
      });

      if (loadingType) {
        yield put({
          type: loadingType,
          payload: false,
        });
      }
    }
  } catch (err) {
    console.log('err :', err.response);
    yield put({
      type: errorType(actionType),
      error: err.response?.data || errorMessage,
    });

    if (loadingType) {
      yield put({
        type: loadingType,
        payload: false,
      });
    }

    if (alertError) {
      const error = getServerError(err.response?.data)
        || JSON.stringify(err.response || err);

      Alert.alert(errorMessage, error);
    }
  }
}
