import { menu, item, cart } from './storeTypes';
import {
	getMenuActionCreator,
	getItemActionCreator,
} from './actionCreatorTypes';

interface HomePrototypes {
	menus: menu[];
	items: item[];
	carts: cart[];
	getMenu: getMenuActionCreator;
	getItem: getItemActionCreator;
}

export default HomePrototypes;
