export const BASE_URL = process.env.baseURL || process.env.NODE_ENV === 'production' ?
  'https://us-central1-d2-a-a1dbb.cloudfunctions.net/app' : 'http://localhost:3001';

export const DEFAULT_SELECTED_KEYS = 'SunSpot.defaultSelectedKeys';
export const SLIDER_CONFIG = 'SunSpot.sliderConfig';

export const DISPATCH_ERROR = 'DISPATCH_ERROR';
export const DISPATCH_REMOVE_ERROR = 'DISPATCH_REMOVE_ERROR';
export const ADD_ERROR = 'ADD_ERROR';
export const REMOVE_ERROR = 'REMOVE_ERROR';
