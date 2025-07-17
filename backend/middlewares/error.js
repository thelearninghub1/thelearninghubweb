const ErrorHandler = require('../utils/errorhandler');

module.exports = (err,req,res , next) => {
    err.message = err.message  || "Internal Server Error";
    err.statusCode = err.statusCode || 500; 

    if(err.name === "CastError"){
        const message = `Resource Not Found Invalid:${err.path}`;
        err = new ErrorHandler(message,401);
    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message
    });
};