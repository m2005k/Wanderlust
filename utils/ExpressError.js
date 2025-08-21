class ExpressError extends Error {
    constructor(statusCode, message){ 
        super(constructor);
        this.statusCode = statusCode;
        this.message = message;
    }
}

module.exports = ExpressError;