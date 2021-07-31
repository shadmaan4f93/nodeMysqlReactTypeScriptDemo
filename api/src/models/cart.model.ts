import pool from '../dbConnection';

var Cart:any = function(this: any, cart:any){
	this.userId = cart.userId;
	this.itemId = cart.itemId;
};

Cart.create = function (newCart:any, result:any) {
  pool.getConnection((err:any, connection:any) => {
		if(err) throw err;
		connection.query("INSERT INTO cart set ?", newCart, function (err:any, res:any) {
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


Cart.findByUserId = function (userId:Number, result:any) {
  pool.getConnection((err:any, connection:any) => {
		if(err) throw err;
		const query = `SELECT cart.id, cart.itemId, cart.userId, item.name, item.price FROM cart INNER JOIN item ON cart.itemId=item.id where userId=${userId};`
    connection.query(query, function (err:any, res:any) {
			if(err) {
				result(err, null);
			}
			else{
				result(null, res);
			}
    });
  });
};


Cart.findAll = function (result:any) {
  pool.getConnection((err:any, connection:any) => {
    if(err) throw err;
    connection.query("Select * from cart", function (err:any, res:any) {
			if(err) {
				result(err, null);
			}
			else{
				result(null, res);
			}
    });
  });
};



export default Cart;
