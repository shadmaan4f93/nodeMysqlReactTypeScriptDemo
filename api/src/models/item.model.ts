import pool from '../dbConnection';

var Item:any = function(this: any, item:any){
	this.name = item.name;
	this.description = item.description;
	this.price = item.price;
	this.menuId = item.menuId;
};


Item.create = function (newItem:any, result:any) {
  pool.getConnection((err:any, connection:any) => {
		if(err) throw err;
		connection.query("INSERT INTO item set ?", newItem, function (err:any, res:any) {
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


Item.findById = function (id:Number, result:any) {
  pool.getConnection((err:any, connection:any) => {
    if(err) throw err;
    connection.query("Select * from item where id = ? ", id, function (err:any, res:any) {
			if(err) {
				result(err, null);
			}
			else{
				result(null, res);
			}
    });
  });
};


Item.findAll = function (result:any) {
  pool.getConnection((err:any, connection:any) => {
    if(err) throw err;
    connection.query("Select * from item", function (err:any, res:any) {
			if(err) {
				result(err, null);
			}
			else{
				result(null, res);
			}
    });
  });
};


Item.findAllByMenu = function (menuId:Number, result:any) {
  pool.getConnection((err:any, connection:any) => {
    if(err) throw err;
    connection.query("Select * from item where menuId = ? ", menuId, function (err:any, res:any) {
			if(err) {
				result(err, null);
			}
			else{
				result(null, res);
			}
    });
  });
};


export default Item;
