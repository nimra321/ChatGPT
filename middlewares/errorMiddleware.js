const errorResponse = require('../utils/errorResponse');

const errorHandler = (err , req, res , next ) => {
    let error = {...err}
    error.message = err.message

    // mongoose cast error 
    if(err.name === 'castError') {
        const message = 'resources not found';
        error = new errorResponse(message,404);
    }
    // duplicate key error
    if(err.code === 11000) {
        const message = 'Duplicate feild value enter';
        error = new errorResponse(message,400);
    }
    // mongoose validation
    if(err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(val => val.message);
        error = new errorResponse(message,400) ;
        res.status(error.statusCode || 500).json ({
            success: fales ,
            error: errer.message || "Server Error" ,
        });
    }
};

module.exports = errorHandler;