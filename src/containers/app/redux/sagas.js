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

function addWhitelist({ data }) {
  return request.post('/api/v1/whitelist/', data);
}

function removeWhitelist({ id }) {
  return request.delete(`/api/v1/whitelist/${id}/`);
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

function handleAddWhitelist({ data }) {
  return sagasRunner({
    actionType: actions.APP_ADD_WHITELIST,
    loadingType: actions.APP_CHANGE_LOADING_STATE,
    updateType: requestType(actions.APP_GET_WHITELIST),
    errorMessage: 'Unable to add to whitelist.',
    alertError: true,
    callFunc: addWhitelist,
    callData: { data },
  });
}

function handleRemoveWhitelist({ id }) {
  return sagasRunner({
    actionType: actions.APP_REMOVE_WHITELIST,
    loadingType: actions.APP_CHANGE_LOADING_STATE,
    updateType: requestType(actions.APP_GET_WHITELIST),
    errorMessage: 'Unable to remove from whitelist.',
    alertError: true,
    callFunc: removeWhitelist,
    callData: { id },
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

export default all([
  takeLatest(requestType(actions.APP_GET_CARS), handleGetCars),
  takeLatest(requestType(actions.APP_GET_GUESTS), handleGetGuests),
  takeLatest(requestType(actions.APP_GET_RESIDENTS), handleGetResidents),
  takeLatest(requestType(actions.APP_GET_WHITELIST), handleGetWhitelist),
  takeLatest(requestType(actions.APP_ADD_WHITELIST), handleAddWhitelist),
  takeLatest(requestType(actions.APP_REMOVE_WHITELIST), handleRemoveWhitelist),
  takeLatest(requestType(actions.APP_GET_COMMUNITY), handleGetCommunity),
]);
