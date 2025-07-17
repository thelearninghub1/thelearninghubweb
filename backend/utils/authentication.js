const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");



// User

exports.isAuthenticatedUser = catchAsyncErrors(async (req,res,next) => {
    const {token} = req.cookies;


    if (!token) {
        return next(new ErrorHandler(`Please Login to access this resource.`))
    };

    const decodedData =  jwt.verify(token,process.env.JWT_SECRET);

    req.user = await User.findById(decodedData.id);

    next()

});
