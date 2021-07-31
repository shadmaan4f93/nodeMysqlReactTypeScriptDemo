import { ActionTypes } from '../types';

export const getMenu = () => ({
  type: ActionTypes.GET_MENU,
});
export const getMenuSuccess = (menu: any) => ({
  type: ActionTypes.GET_MENU_SUCCESS,
  payload: menu,
});
export const getMenuError = (message: any) => ({
  type: ActionTypes.GET_MENU_ERROR,
  payload: { message },
});


export const getItem = () => ({
  type: ActionTypes.GET_ITEM,
});
export const getItemSuccess = (item: any) => ({
  type: ActionTypes.GET_ITEM_SUCCESS,
  payload: item,
});
export const getItemError = (message: any) => ({
  type: ActionTypes.GET_ITEM_ERROR,
  payload: { message },
});


export const getCart = () => ({
  type: ActionTypes.GET_CART,
});
export const getCartSuccess = (cart: any) => ({
  type: ActionTypes.GET_CART_SUCCESS,
  payload: cart,
});
export const getCartError = (message: any) => ({
  type: ActionTypes.GET_CART_ERROR,
  payload: { message },
});