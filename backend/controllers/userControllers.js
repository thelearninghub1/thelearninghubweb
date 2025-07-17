const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const User = require('../models/userModel');
const ErrorHandler = require('../utils/errorhandler');
const sendToken = require('../utils/jwtToken');
const sendEmail = require('../utils/sendEmail');
const crypto = require("crypto");
const cloudinary = require("cloudinary")

// Create User  
exports.createUser = catchAsyncErrors(async (req,res,next) => {

    const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar,{
        folder:"Wweb-avatars",
        quality:80,
        progressive:true
    })
        
    const {name,email,password} = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar:{
            public_id:myCloud.public_id,
            url:myCloud.secure_url
        }
    });

    sendToken(user,200,res)
});



// Login User 
exports.loginUser = catchAsyncErrors(async (req,res,next) => {
    const {email , password} = req.body;

    if (!email || !password) {
        return next(new ErrorHandler("Please Enter Your Email & Password",400))
       
    };

    const user = await User.findOne({email}).select('+password');

    if(!user){
        return next(new ErrorHandler("Invalid Email or Password",401));
    }

    const isPasswordMatched = await user.comparePassword(password);

    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid Email or Password",401));
    }
    sendToken(user,200,res)

})

// Logout User
exports.logoutUser = catchAsyncErrors(async (req,res,next)=>{

    await res.cookie("token",null,{
        httpOnly:true,
        expires:new Date(Date.now())
    })

    res.status(200).json({
        success:true,
        message:"Logged Out Successfully"
    })
});


// Forgot Password
exports.forgotPasssword = catchAsyncErrors(async (req,res,next) =>{

    const user = await User.findOne({email:req.body.email});

    if (!user) {
        return next(new ErrorHandler("User Not Found",400))
    };

    const resetToken = user.getResetPasswordToken();

    await user.save({validateBeforeSave:false})

    const resetPasswordUrl = `${req.protocol}://${req.get("host")}/password/reset/${resetToken}`;

    const message  = `Dear Admin,
 If you requested a password reset for  Password, click the link below. If you didn't make this request, ignore this email.
  \n
  ${resetPasswordUrl} \n
Regards,
The Learning Hub.
  `;

  try {

     sendEmail({
        email:user.email,
        subject:`The Learning Hub Admin Password Recovery `,
        message
    })

    res.status(200).json({
        success:true,
        message:`Email ${user.email} sent successfully`
    })
    
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save({validateBeforeSave:false});

    return next(new ErrorHandler(error.message,400))
  }

} )


// Reset Password
exports.resetPassword = catchAsyncErrors(async (req,res,next)=>{

    const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex");

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpires : {$gt:Date.now()}
    });

    if (!user) {
        return next(new ErrorHandler(`Reset Password Token is invalid or has been Expired.`,400))
    };

    if (req.body.newPassword !== req.body.confirmPassword) {
        return next(new ErrorHandler(`New Password And Confirm Password does not match`,400))
    };

    user.password = req.body.newPassword

    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    sendToken(user,200,res)

});


// Change Password
exports.updatePassword = catchAsyncErrors(async (req,res,next) => {
    const user = await User.findById(req.user.id).select("+password");

   
    const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

    if (!isPasswordMatched ) {
        return next(new ErrorHandler(`Old Password is incorrect`,400));
    };

    if (req.body.newPassword !== req.body.confirmPassword) {
        return next(new ErrorHandler(`New Password And Confirm Password does not match`,400));
    };

    user.password = req.body.newPassword;
    await user.save();

    res.status(200).json({
        success: true,
        user
    })

});


// Login User Details 
exports.myDetails = catchAsyncErrors(async (req,res,next) => {

    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        user
    })

});

// Update Admin Profile Details 
exports.updateAdminProfile = catchAsyncErrors(async (req,res,next) => {
   let user =  await User.findById(req.user.id)

   if (!user) {
    return next(new ErrorHandler(`User not found`,404))
};


    const newUserData = {
        name: req.body.name,
        email: req.body.email
    }

    if ( req.body.avatar ) {
        let user = await User.findById(req.user.id);
        const imageId = user.avatar.public_id;
        await cloudinary.v2.uploader.destroy(imageId);
            
        const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar,{
            folder:"Wweb-avatars",
            quality:80,
            progressive:true
        })
    
        newUserData.avatar = {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
          };
        }


     user = await User.findByIdAndUpdate(req.user.id,newUserData,{
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

  
    res.status(200).json({
        success: true,
        user
    })
});