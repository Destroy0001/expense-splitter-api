# expense-splitter-api
Api for the expense-splitter-app

To get started 
- clone the repository
- do an `npm install`
- create a .env file in the repository root and set the following environment variables 
```
MYSQL_DATABASE=your_db_name
MYSQL_USER=your_user_name
MYSQL_PASSWORD=your_password
PORT=3001
```
- install sequelize-cli (`sudo npm install -g sequelize-cli`)
- generate a base migrations file by going through the instructions here (http://docs.sequelizejs.com/en/1.7.0/docs/migrations/) 
(alternatively if you can import the tables to the db using `database_init.sql`)
if you need a config.json file, create one from the json exported in `config/database.js` 
- do `npm start` to run the server on forever, or `npm run debug-start` to run the server on nodemon. 


These are the apis present currently: 
```
registers a new user 
 REQUEST
 POST api/register/
	- email
	- name
	- password
 RESPONSE
	{success:true,name:user.name,email:user.email}
```

and 

```
 REQUEST:

 POST api/login/ 
	- email
	- pass

 RESPONSE:
	{success:true,name:user.name,email:user.email}
```

