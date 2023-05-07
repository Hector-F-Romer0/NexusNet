export const createProviderValidation = {
	names: {
		notEmpty: true,
		isLength: {
			options: {
				min: 3,
				max: 30,
			},
			errorMessage: "Names must be between 3 and 30 characters.",
		},
		trim: true,
		bail: true,
	},
	lastnames: {
		notEmpty: true,
		isLength: {
			options: {
				min: 3,
				max: 30,
			},
			errorMessage: "Lastnames must be between 3 and 30 characters.",
		},
		trim: true,
		bail: true,
	},
	username: {
		notEmpty: true,
		isLength: {
			options: {
				min: 3,
				max: 15,
			},
			errorMessage: "Username must be between 3 and 15 characters.",
		},
		trim: true,
		bail: true,
	},
	email: {
		notEmpty: true,
		// isLength: {
		// 	options: {
		// 		min: 3,
		// 		max: 15,
		// 	},
		// 	errorMessage: "Username must be between 3 and 15 characters.",
		// },
		isEmail: {
			errorMessage: "Invalid email.",
		},
		trim: true,
		bail: true,
		errorMessage: "Password can't be empty.",
	},
	password: {
		notEmpty: true,
		// isLength: {
		// 	options: {
		// 		min: 3,
		// 		max: 15,
		// 	},
		// 	errorMessage: "Username must be between 3 and 15 characters.",
		// },
		trim: true,
		bail: true,
		errorMessage: "Password can't be empty.",
	},
	typeUser: {
		isString: true,
		notEmpty: true,
		trim: true,
		bail: true,
		errorMessage: "Type of user can't be empty.",
	},
	phoneNumber: {
		isString: true,
		notEmpty: true,
		trim: true,
		bail: true,
		errorMessage: "Phone number can't be empty.",
	},
	country: {
		notEmpty: true,
		errorMessage: "Country can't be empty.",
		bail: true,
	},
	state: {
		notEmpty: true,
		errorMessage: "State can't be empty.",
		bail: true,
	},
	city: {
		notEmpty: true,
		errorMessage: "City can't be empty.",
		bail: true,
	},
	urlImg: {
		notEmpty: true,
		errorMessage: "Provider image can't be empty.",
		bail: true,
	},
	category: {
		notEmpty: true,
		errorMessage: "Category can't be empty.",
		bail: true,
	},
	service: {
		notEmpty: true,
		errorMessage: "Service can't be empty.",
		bail: true,
	},
	keywords: {
		notEmpty: true,
		errorMessage: "The provider has to have keywords.",
	},
};
