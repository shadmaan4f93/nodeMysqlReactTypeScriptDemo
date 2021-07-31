import { cart } from './storeTypes';
import {
	getCartActionCreator
} from './actionCreatorTypes';

interface AppPrototypes {
	carts: cart[];
	getCart: getCartActionCreator;
}

export default AppPrototypes;
