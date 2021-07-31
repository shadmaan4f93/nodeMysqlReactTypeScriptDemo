import express from "express";
import utils from "../utils/utils";

const apiRouter = express.Router();

import user from './user/user';
import menu from './menu/menu';
import item from './item/item';
import order from './order/order';
import cart from './cart/cart';

//************************************* USER ******************************************/
apiRouter.post('/api/v1/user', user.postUser);
apiRouter.get('/api/v1/user/:id', user.getUserById);
apiRouter.post('/api/v1/user/login', user.login);

//************************************* MENU ******************************************/
apiRouter.post('/api/v1/menu', menu.postMenu);
apiRouter.get('/api/v1/menu', menu.getMenu);
apiRouter.get('/api/v1/menu/:id', menu.getMenuById);

//************************************* ITEM ******************************************/
apiRouter.post('/api/v1/item', item.postItem);
apiRouter.get('/api/v1/item', item.getItem);
apiRouter.get('/api/v1/item/:id', item.getItemById);

//************************************* CART ******************************************/
apiRouter.post('/api/v1/cart', utils.verifyAuthToken, cart.postCart);
apiRouter.get('/api/v1/cart', utils.verifyAuthToken, cart.getCart);
apiRouter.get('/api/v1/cart/:userId', cart.getCartUserById);

//************************************* USER ******************************************/
apiRouter.post('/api/v1/order', utils.verifyAuthToken, order.postOrder);
apiRouter.get('/api/v1/order', utils.verifyAuthToken, order.getOrder);
apiRouter.get('/api/v1/user/order/:userId', utils.verifyAuthToken ,order.getOrderByUser);
apiRouter.get('/api/v1/order/:id', utils.verifyAuthToken ,order.getOrderById);

export default apiRouter;