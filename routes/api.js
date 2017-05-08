import express from 'express';
import logger from 'morgan';
import db from '../models';
import errors from '../constants/errors';
import md5 from 'md5';

const router = express.Router();

/* logs in a user 
 REQUEST:

 POST api/login/ 
	- email
	- pass

 RESPONSE:
	200 OK, 
	{
		name: TestName
	}
*/
router.post('/login/', (req, res, next) => {
	let email = req.body.email;
	let pass = req.body.pass;
	if(!email || !pass){
		let error = errors.INVALID_LOGIN;
		return res.status(error.status)
					.send(error.message);
	}

	db.Users.findOne({where:{email:email,password:md5(pass)}})
		.then(user=>{

			/*if user doesn't exists, return error */
			if(!user){
				let error = errors.INVALID_LOGIN;
				return res.status(error.status)
						.send(error.message);
			}

			/*else return success*/
			return res.send(JSON.stringify({success:true,name:user.name,email:user.email}));
			
		}).catch(err=>{
			console.log(err);

			let error = errors.SERVER_ERROR;
			return res.status(error.status)
						.send(error.message);
		});
});

/* 
registers a new user 
 REQUEST
 POST api/register/
	- email
	- name
	- password
 RESPONSE
	200 OK
*/
router.post('/register/', (req, res, next) => {

	let email = req.body.email;
	let pass = req.body.pass;
	let name = req.body.name;
	if(!email || !pass || !name){
		let error = errors.MISSING_VALUES;
		return res.status(error.status)
					.send(error.message);
	}

	/*checking if the emails exists */
	db.Users.findOne({where:{email:email}})
			.then(user => {
				/*if it does, return an error*/
				if(user){
					let error = errors.USER_ALREADY_EXISTS;
					return res.status(error.status)
								.send(error.message);
				}
				/*if it doesn't, create new user */
				db.Users.create({
						name:name,
						email:email,
						password: md5(pass)
					})
					.then(user => {
						return res.send(JSON.stringify({success:true,name:user.name,email:user.email}));
					})
					.catch(err => {
						console.log(err);
						let error = errors.SERVER_ERROR;
						return res.status(error.status)
								.send(error.message);
					});

			}).catch(err =>{
						console.log(err);
						let error = errors.SERVER_ERROR;
						return res.status(error.status)
								.send(error.message);
			});
});

export default router;
