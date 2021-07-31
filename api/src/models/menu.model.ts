import pool from '../dbConnection';

var Menu:any = function(this: any, menu:any){
    this.name = menu.name;
    this.description = menu.description;
};


Menu.create = function (newMenu:any, result:any) {
  pool.getConnection((err:any, connection:any) => {
		if(err) throw err;
		connection.query("INSERT INTO menu set ?", newMenu, function (err:any, res:any) {
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


Menu.findById = function (id:Number, result:any) {
  pool.getConnection((err:any, connection:any) => {
    if(err) throw err;
    connection.query("Select * from menu where id = ? ", id, function (err:any, res:any) {
			if(err) {
				result(err, null);
			}
			else{
				result(null, res);
			}
    });
  });
};


Menu.findAll = function (result:any) {
  pool.getConnection((err:any, connection:any) => {
    if(err) throw err;
    connection.query("Select * from menu", function (err:any, res:any) {
			if(err) {
				result(err, null);
			}
			else{
				result(null, res);
			}
    });
  });
};


export default Menu;
