import pool from '../dbConnection';

var User:any = function(this: any, user:any){
	this.name = user.name;
	this.email = user.email;
	this.password = user.password;
};

User.create = function (newUser:any, result:any) {
  pool.getConnection((err:any, connection:any) => {
		if(err) throw err;
		connection.query("INSERT INTO user set ?", newUser, function (err:any, res:any) {
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


User.findById = function (id:Number, result:any) {
  pool.getConnection((err:any, connection:any) => {
    if(err) throw err;
    connection.query("Select * from user where id = ? ", id, function (err:any, res:any) {
			if(err) {
				result(err, null);
			}
			else{
				result(null, res);
			}
    });
  });
};

User.findByEmail = function (email:String, result:any) {
  pool.getConnection((err:any, connection:any) => {
    if(err) throw err;
    connection.query("Select * from user where email = ? ", email, function (err:any, res:any) {
			if(err) {
				result(err, null);
			}
			else{
				result(null, res);
			}
    });
  });
};


export default User;
