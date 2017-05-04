/*
* contains database config
*/
export default {
	db: process.env['MYSQL_DATABASE'] || 'splitmoney',
	user: process.env['MYSQL_USER'] || 'user',
	pass: process.env['MYSQL_PASSWORD'] || 'password',
	config :{ 
		host: 'localhost',
		dialect: 'mysql',

		pool: {
			max: 5,
			min: 0,
			idle: 10000
		},
	}

};
