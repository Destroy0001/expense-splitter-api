export default {
	INVALID_LOGIN: { status: 400, message:'The email or password is incorrect' },
	USER_ALREADY_EXISTS: {status: 400, message:'The user already exists'},
	MISSING_VALUES:{ status: 400, message:'Missing required values for registrations'},
	SERVER_ERROR: { status: 500, message:'A server error occured' },
}