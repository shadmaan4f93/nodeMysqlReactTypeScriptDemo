import pool from '../../dbConnection'
import Order from '../../models/order.model'

function postOrder(req: any, res: any) {
    const newOrder =  new Order(req.body)
    Order.create(newOrder, function(err:any, order:any){
        if (err) {
            res.sendStatus(err)
        } else {
            res.send(order);
        }
    })
};

function getOrder(req: any, res: any) {
    Order.findAll(function(err:any, order:any){
        if (err) {
            res.send(err);
        } else {
            res.send(order);
        }
    })
};

function getOrderByUser(req: any, res: any) {
    Order.findAllByUser(req.params.userId, function(err:any, order:any){
        if (err) {
            res.send(err);
        } else {
            res.send(order);
        }
    })
};

function getOrderById(req: any, res: any) {
    Order.findById(req.params.id, function(err:any, order:any){
        if (err) {
            res.send(err);
        } else {
            res.send(order);
        }
    })
};


export default{
    getOrder,
    postOrder,
    getOrderByUser,
    getOrderById,
} ;
  