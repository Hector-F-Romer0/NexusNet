class InvalidTokenError extends Error{
    constructor(message){
        super(message)
        this.name = "InvalidToken"
    }
}

export{InvalidTokenError}