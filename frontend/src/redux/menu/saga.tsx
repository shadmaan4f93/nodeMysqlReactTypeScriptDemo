import {
    all, call, fork, put, takeEvery,
  } from 'redux-saga/effects';
  
  import axiosInstance  from "../../service/request";
  
  import { ActionTypes } from '../types';
  import {
    getMenuSuccess,
    getMenuError,
    getItemSuccess,
    getItemError,
    getCartSuccess,
    getCartError
  } from './actions';
  
  const getMenuAsync = () => axiosInstance.get('/menu');
  
  function* getmenu() {
    try {
      const { data } = yield call(getMenuAsync);
      yield put(getMenuSuccess(data));
    } catch (error) {
      yield put(getMenuError(error));
    }
  }
  
  export function* watchGetMenu() {
    yield takeEvery(ActionTypes.GET_MENU, getmenu);
  }


  const getItemAsync = () => axiosInstance.get('/item');
  
  function* getItem() {
    try {
      const { data } = yield call(getItemAsync);
      yield put(getItemSuccess(data));
    } catch (error) {
      yield put(getItemError(error));
    }
  }
  
  export function* watchGetItem() {
    yield takeEvery(ActionTypes.GET_ITEM, getItem);
  }
  
  const getCartAsync = () => axiosInstance.get(`/cart/1`);
  
  function* getCart() {
    try {
      const { data } = yield call(getCartAsync);
      yield put(getCartSuccess(data));
    } catch (error) {
      yield put(getCartError(error));
    }
  }
  
  export function* watchGetCart() {
    yield takeEvery(ActionTypes.GET_CART, getCart);
  }
  
  export default function* rootSaga() {
    yield all([
      fork(watchGetMenu),
      fork(watchGetItem),
      fork(watchGetCart)
    ]);
  }
  