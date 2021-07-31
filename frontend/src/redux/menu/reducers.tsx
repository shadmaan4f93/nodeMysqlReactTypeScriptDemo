import { ActionTypes } from '../types';

const INIT_STATE = {
    actionType: '',
    menu: [],
    item:[]
};

export default (state = INIT_STATE, action: { type: any; payload: any; }) => {
  state.actionType = action.type;
  switch (action.type) {
    case ActionTypes.GET_MENU:
      return { ...state, getMenuSuccess: false, error: false };
    case ActionTypes.GET_MENU_SUCCESS:
      return { ...state, menu: action.payload, getMenuSuccess: true, error: false };
    case ActionTypes.GET_MENU_ERROR:
      return { ...state, getMenuError: action.payload, getMenuSuccess: false, error: true };

    case ActionTypes.GET_ITEM:
      return { ...state, getItemSuccess: false, error: false };
    case ActionTypes.GET_ITEM_SUCCESS:
      return { ...state, item: action.payload, getItemSuccess: true, error: false };
    case ActionTypes.GET_ITEM_ERROR:
      return { ...state, getItemError: action.payload, getItemSuccess: false, error: true };

    case ActionTypes.GET_CART:
      return { ...state, getCartSuccess: false, error: false };
    case ActionTypes.GET_CART_SUCCESS:
      return { ...state, cart: action.payload, getCartSuccess: true, error: false };
    case ActionTypes.GET_CART_ERROR:
      return { ...state, getCartError: action.payload, getCartSuccess: false, error: true };

    default:
      return { ...state };
  }
};
