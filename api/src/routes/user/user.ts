import User from '../../models/user.medel'
import  utils from '../../utils/utils';


const postUser = (req: any, res: any) => {
	const newUser =  new User(req.body)
	User.findByEmail(req.body.email, async function(err:any, user:any){
		console.log(user)
		if(user.length == 0) {
			User.create(newUser, function(err:any, user:any){
				if (err) {
					res.sendStatus(err)
				} else {
					res.send(user);
				}
			})
		} else {
			res.send({message: "User Exist with this eamil!"});
		}
	})
};


const getUserById = (req: any, res: any) => {
	User.findById(req.params.id, function(err:any, user:any){
		if (err) {
			res.send(err);
		} else {
			res.send(user);
		}
	})
};


const login = (req: any, res: any) => {
	let return_value = {
		status: false,
		message: "",
		user: {},
		token: ""
	}
	const email = req.body.email;
	User.findByEmail(email, async function(err:any, user:any){
		if (err) {
			res.send(err);
		} else {
			if(user[0].password === req.body.password) {
				const token = await utils.generateAuthToken(user)
				if(token) {
					delete user[0].password
					return_value.user = user
					return_value.message = "Login success"
					return_value.status = true
					return_value.token = token
				} 
			} else {
				return_value.message = "Invalid User!"
			}
			res.send(return_value);
		}
	})
};


export default{
		login,
    postUser,
    getUserById
};