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

export const addWhitelist = (data) => ({
  type: requestType(actions.APP_ADD_WHITELIST),
  data,
});

export const removeWhitelist = (id) => ({
  type: requestType(actions.APP_REMOVE_WHITELIST),
  id,
});

export const getCommunity = () => ({
  type: requestType(actions.APP_GET_COMMUNITY),
});
