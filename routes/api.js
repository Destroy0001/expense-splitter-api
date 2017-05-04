import express from 'express';
import logger from 'morgan';
import db from '../models/index';

const router = express.Router();

/* logs in a user 
 REQUEST:

 POST api/login/ 
	- email
	- password

 RESPONSE:
	200 OK, 
	{
		name: TestName
	}

 */
router.post('/login/', (req, res, next) => {


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



});
export default router;
