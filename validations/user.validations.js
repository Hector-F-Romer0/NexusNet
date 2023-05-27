const createProviderValidation = {
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
	},
	lastnames: {
		notEmpty: true,
		isLength: {
			options: {
				min: 3,
				max: 30,
			},
			errorMessage: "Lastnames must be between 3 and 30 characters.",
			bail: true,
		},
		trim: true,
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
			bail: true,
			errorMessage: "Invalid email.",
		},
		trim: true,

		errorMessage: "Password can't be empty.",
	},
	password: {
		notEmpty: true,
		trim: true,
		exists: { errorMessage: "Password can't be empty." },
		isLength: {
            options: {
                min: 3,
                max: 15,
            },
            errorMessage: "Password must be between 3 and 15 characters.",
        },
	},
	role: {
		isString: true,
		notEmpty: true,
		trim: true,
		errorMessage: "Type of user can't be empty.",
	},
	phoneNumber: {
		isString: true,
		notEmpty: true,
		trim: true,
		errorMessage: "Phone number can't be empty.",
	},
	country: {
		notEmpty: true,
		errorMessage: "Country can't be empty.",
	},
	state: {
		notEmpty: true,
		errorMessage: "State can't be empty.",
	},
	city: {
		notEmpty: true,
		errorMessage: "City can't be empty.",
	},
	urlImg: {
		notEmpty: true,
		errorMessage: "Provider image can't be empty.",
	},
	category: {
		notEmpty: true,
		errorMessage: "Category can't be empty.",
	},
	service: {
		notEmpty: true,
		errorMessage: "Service can't be empty.",
	},
	keywords: {
		notEmpty: true,
		errorMessage: "The provider has to have keywords.",
	},
};

const createClientValidation = {
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
	},
	lastnames: {
		notEmpty: true,
		isLength: {
			options: {
				min: 3,
				max: 30,
			},
			errorMessage: "Lastnames must be between 3 and 30 characters.",
			bail: true,
		},
		trim: true,
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
	},
	email: {
		notEmpty: true,
		isEmail: {
			bail: true,
			errorMessage: "Invalid email.",
		},
		trim: true,

		errorMessage: "Password can't be empty.",
	},
	password: {
		notEmpty: true,
		errorMessage: "Password can't be empty.",
		isLength: {
			options: {
				min: 3,
				max: 15,
			},
			errorMessage: "Username must be between 3 and 15 characters.",
		},
		trim: true,
	},
	role: {
		isString: true,
		notEmpty: true,
		trim: true,
		errorMessage: "Role can't be empty.",
	},
	phoneNumber: {
		notEmpty: true,
		trim: true,
		exists: { errorMessage: "Password can't be empty." },
		options: (value) => {
			value.length === 10;
		},
		errorMessage: "Phone number should be 10 digits",
		bail: true,
	},
	country: {
		notEmpty: true,
		errorMessage: "Country can't be empty.",
	},
	state: {
		notEmpty: true,
		errorMessage: "State can't be empty.",
	},
	city: {
		notEmpty: true,
		errorMessage: "City can't be empty.",
	},
	urlImg: {
		notEmpty: true,
		errorMessage: "Provider image can't be empty.",
	},
};

export { createClientValidation, createProviderValidation };
