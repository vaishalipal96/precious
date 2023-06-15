import axios from 'axios';


import { store } from './index';

import { API_METHODS, AUTH } from './types';

export const contentType = 'application/json';

export function apiConfig(headerValue) {
   let API_URL = 'https://dummyapi.online/api/movies'
  const url = axios.create({
     baseURL: API_URL,
    headers: apiHeaders(headerValue),
  });
  return url;
}

export const ApiHandler = async ({ endPoint, method, reqParam, headerValue }) => {
  const response = await apiConfig(headerValue)[`${method}`](
    endPoint,
    method === API_METHODS.DELETE ? { data: reqParam } : reqParam,
  );
  if (
    response?.data?.status === 'error' &&
    response?.data?.errCode === 'ExpiredTokenException'
  ) {
    await store.dispatch({ type: AUTH.INVALIDATE_LOGIN_STATUS });

    return response;
  } else {
    return response;
  }
};

export function apiHeaders(headerValue = 0) {
  const state = store.getState();
  let contentType = 'application/json';
  if (headerValue == 1) {
    contentType = 'multipart/form-data'
  }
  const headers = {
    // Accept: contentType,

    'Content-Type': contentType,

    Authorization: '',
  };
  return headers;
}

