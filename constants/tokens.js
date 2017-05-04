/*
* contains a list of secure tokens to authenticate to access the api
*/
export default {
	'webApp': process.env['WEBAPP_TOKEN'] || 'your-secure-token'
}