/* eslint-disable no-case-declarations */
import * as actions from './constants';
import { successType } from '../../../redux/helpers';

const initialState = {
  isLoading: false,
  cars: [],
  guests: [],
  residents: [],
  whitelist: [],
  community: {},
  profile: {},
};

export const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.APP_CHANGE_LOADING_STATE:
      return { ...state, isLoading: action.payload };
    case successType(actions.APP_GET_CARS):
      return { ...state, cars: action.payload };
    case successType(actions.APP_GET_GUESTS):
      return { ...state, guests: action.payload };
    case successType(actions.APP_GET_RESIDENTS):
      return { ...state, residents: action.payload };
    case successType(actions.APP_GET_WHITELIST):
      return { ...state, whitelist: action.payload };
    case successType(actions.APP_GET_COMMUNITY):
      return { ...state, community: action.payload };
    case successType(actions.APP_GET_PROFILE):
      return { ...state, profile: action.payload };
    default:
      return state;
  }
};
