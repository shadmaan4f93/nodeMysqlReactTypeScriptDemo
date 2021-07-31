import pool from '../dbConnection';
import orderType  from '../Types/types'


var Order:any = function(this: any, order:orderType){
    this.userId = order.userId;
    this.status = order.status;
    this.total = order.total;
    this.discount = order.discount;
    this.grandTotal = order.grandTotal;
    this.firstName = order.firstName;
    this.lastName = order.lastName;
    this.mobile = order.mobile;
    this.email = order.email;
    this.address = order.address;
    this.city = order.city;
    this.pin = order.pin;
};


Order.create = function (newOrder:orderType, result:any) {
  pool.getConnection((err:any, connection:any) => {
      if(err) throw err;
      connection.query("INSERT INTO orders set ?", newOrder, function (err:any, res:any) {
        if(err) {
          console.log(err)
          result(err, null);
        }
        else{
          result(null, res);
        }
      });
  });
};


Order.findById = function (id:Number, result:any) {
  pool.getConnection((err:any, connection:any) => {
    if(err) throw err;
    connection.query("Select * from orders where id = ? ", id, function (err:any, res:any) {
      if(err) {
        result(err, null);
      }
      else{
        result(null, res);
      }
    });
  });
};


Order.findAll = function (result:any) {
  pool.getConnection((err:any, connection:any) => {
    if(err) throw err;
    connection.query("Select * from orders", function (err:any, res:any) {
      if(err) {
        result(err, null);
      }
      else{
        result(null, res);
      }
    });
  });
};


Order.findAllByUser = function (userId:Number, result:any) {
  pool.getConnection((err:any, connection:any) => {
    if(err) throw err;
    connection.query("Select * from orders where userId = ? ", userId, function (err:any, res:any) {
      if(err) {
        result(err, null);
      }
      else{
        result(null, res);
      }
    });
  });
};


export default Order;
