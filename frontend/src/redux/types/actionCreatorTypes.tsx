import {
	getMenu,
	getItem,
	getCart
} from './actionTypes';

export type getMenuActionCreator = () => getMenu;
export type getItemActionCreator = () => getItem;
export type getCartActionCreator = () => getCart;