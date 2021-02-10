import { all, takeLatest } from 'redux-saga/effects';

import { request } from '../../../utils';
import { requestType, sagasRunner } from '../../../redux/helpers';
import * as actions from './constants';

function getCars({ licensePlate }) {
  return request.get(`/api/v1/cars/?license_plate=${licensePlate || ''}`);
}

function getGuests({ name }) {
  return request.get(`/api/v1/guests/?custom_filter=${name || ''}`);
}

function getResidents({ name }) {
  return request.get(`/api/v1/residents/?name=${name || ''}`);
}

function getCommunity() {
  return request.get('/api/v1/property-info/');
}

function getWhitelist({ name }) {
  return request.get(`/api/v1/whitelist/?license_plate=${name || ''}`);
}

function addGuest({ data }) {
  return request.post('/api/v1/guests/', data);
}

function addCar({ data }) {
  const keys = Object.keys(data);
  // eslint-disable-next-line
  const body = new FormData();
  keys.forEach((key) => {
    body.append([key], data[key]);
  });

  return request.post('/api/v1/cars/', body);
}

function updateCar({ data }) {
  return request.patch(`/api/v1/cars/${data?.id}/`, data);
}

function getProfile() {
  return request.get('/api/v1/resident-profile/');
}

function handleGetCars({ licensePlate }) {
  return sagasRunner({
    actionType: actions.APP_GET_CARS,
    loadingType: actions.APP_CHANGE_LOADING_STATE,
    errorMessage: 'Unable to get cars.',
    alertError: true,
    callFunc: getCars,
    callData: { licensePlate },
  });
}

function handleGetGuests({ name }) {
  return sagasRunner({
    actionType: actions.APP_GET_GUESTS,
    loadingType: actions.APP_CHANGE_LOADING_STATE,
    errorMessage: 'Unable to get guests.',
    alertError: true,
    callFunc: getGuests,
    callData: { name },
  });
}

function handleGetResidents({ name }) {
  return sagasRunner({
    actionType: actions.APP_GET_RESIDENTS,
    loadingType: actions.APP_CHANGE_LOADING_STATE,
    errorMessage: 'Unable to get residents.',
    alertError: true,
    callFunc: getResidents,
    callData: { name },
  });
}

function handleGetWhitelist({ name }) {
  return sagasRunner({
    actionType: actions.APP_GET_WHITELIST,
    loadingType: actions.APP_CHANGE_LOADING_STATE,
    errorMessage: 'Unable to get whitelist.',
    alertError: true,
    callFunc: getWhitelist,
    callData: { name },
  });
}

function handleAddGuest({ data, callback }) {
  return sagasRunner({
    actionType: actions.APP_ADD_GUEST,
    loadingType: actions.APP_CHANGE_LOADING_STATE,
    updateType: requestType(actions.APP_GET_GUESTS),
    errorMessage: 'Unable to add guest.',
    alertError: true,
    callFunc: addGuest,
    callData: { data },
    onSuccess: () => {
      if (callback) {
        callback();
      }
    },
  });
}

function handleAddCar({ data }) {
  return sagasRunner({
    actionType: actions.APP_ADD_CAR,
    loadingType: actions.APP_CHANGE_LOADING_STATE,
    updateType: requestType(actions.APP_GET_CARS),
    route: 'Home',
    errorMessage: 'Unable to add car.',
    alertError: true,
    callFunc: addCar,
    callData: { data },
  });
}

function handleUpdateCar({ data }) {
  return sagasRunner({
    actionType: actions.APP_UPDATE_CAR,
    loadingType: actions.APP_CHANGE_LOADING_STATE,
    updateType: requestType(actions.APP_GET_CARS),
    route: 'Home',
    errorMessage: 'Unable to update car.',
    alertError: true,
    callFunc: updateCar,
    callData: { data },
  });
}

function handleGetCommunity() {
  return sagasRunner({
    actionType: actions.APP_GET_COMMUNITY,
    loadingType: actions.APP_CHANGE_LOADING_STATE,
    errorMessage: 'Unable to get community info.',
    alertError: true,
    callFunc: getCommunity,
  });
}

function handleGetProfile() {
  return sagasRunner({
    actionType: actions.APP_GET_PROFILE,
    loadingType: actions.APP_CHANGE_LOADING_STATE,
    errorMessage: 'Unable to get profile.',
    alertError: true,
    callFunc: getProfile,
  });
}

export default all([
  takeLatest(requestType(actions.APP_GET_CARS), handleGetCars),
  takeLatest(requestType(actions.APP_GET_GUESTS), handleGetGuests),
  takeLatest(requestType(actions.APP_GET_RESIDENTS), handleGetResidents),
  takeLatest(requestType(actions.APP_GET_WHITELIST), handleGetWhitelist),
  takeLatest(requestType(actions.APP_ADD_GUEST), handleAddGuest),
  takeLatest(requestType(actions.APP_GET_COMMUNITY), handleGetCommunity),
  takeLatest(requestType(actions.APP_GET_PROFILE), handleGetProfile),
  takeLatest(requestType(actions.APP_ADD_CAR), handleAddCar),
  takeLatest(requestType(actions.APP_UPDATE_CAR), handleUpdateCar),
]);
