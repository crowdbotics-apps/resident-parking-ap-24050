import * as actions from './constants';

import { requestType } from '../../../redux/helpers';

export const getCars = (licensePlate) => ({
  type: requestType(actions.APP_GET_CARS),
  licensePlate,
});

export const getGuests = (name) => ({
  type: requestType(actions.APP_GET_GUESTS),
  name,
});

export const getResidents = (name) => ({
  type: requestType(actions.APP_GET_RESIDENTS),
  name,
});

export const getWhitelist = (name) => ({
  type: requestType(actions.APP_GET_WHITELIST),
  name,
});

export const addGuest = (data, callback) => ({
  type: requestType(actions.APP_ADD_GUEST),
  data,
  callback,
});

export const addCar = (data) => ({
  type: requestType(actions.APP_ADD_CAR),
  data,
});

export const updateCar = (data) => ({
  type: requestType(actions.APP_UPDATE_CAR),
  data,
});

export const getCommunity = () => ({
  type: requestType(actions.APP_GET_COMMUNITY),
});

export const getProfile = () => ({
  type: requestType(actions.APP_GET_PROFILE),
});
