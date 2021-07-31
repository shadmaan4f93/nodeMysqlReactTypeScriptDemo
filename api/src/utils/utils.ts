import jwt from 'jsonwebtoken'

const secret = 'secrettoken' // This should be in configuration

const  generateAuthToken = async(user:any) => {
	try {
		let payload = {
			exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
			id: user.id,
			email: user.eamil,
			name: user.name
		};
		return await jwt.sign(payload, secret);
	} catch (error) {
		return null
	}
}


const verifyAuthToken = (req:any, res:any, next:any) => {
	if (!req.headers.authorization) {
		res.status(401).send({
			message: 'Token is missing.'
		});
	} else {;
		var token = req.headers.authorization.substr(7);
		jwt.verify(token, secret, function(err:any, decoded:any) {
			if (err) {           
				err.value = false;
				res.status(401).send(err);
			} else {
				req.user = decoded;
				next();
			}
		});
	}
}



export default { generateAuthToken, verifyAuthToken };