class NotFoundError extends Error {
    constructor(message) {
        super(message + " not found");
    }
    
}

module.exports = NotFoundError;