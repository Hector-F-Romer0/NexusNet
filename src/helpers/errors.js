class InvalidTokenError extends Error {
	constructor(message) {
		super(message);
		this.name = "InvalidToken";
	}
}

class ExistingValueError extends Error {
	constructor(message) {
		super(message);
		this.name = "ExistingValue";
	}
}

export { InvalidTokenError, ExistingValueError };
