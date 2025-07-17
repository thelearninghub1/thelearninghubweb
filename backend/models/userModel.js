const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');


// user Schema
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please Enter Your Name"]
    },
    email:{
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
        validate:[validator.isEmail,"Please Enter Correct Email"]

    },
    password:{
        type: String,
        required: [true, "Please Enter User Password"],
        minLength:[8,"Password must be at least 8 characters"],
        select:false
    },
    role:{
        type: String,
        required:true,
        default: 'User'
    },
    avatar:{
        public_id:{
            type: String,
        },
        url:{
            type: String,
        }
    },
    resetPasswordToken:String,
    resetPasswordExpires:Date,
    createdAt:{
        type: Date,
        default: Date.now
    }
});


// Password Hash 
userSchema.pre("save" , async function(next){
    if(!this.isModified("password")){
        return next();
    }
    this.password = await bcrypt.hash(this.password,10)
})

// Generating token for login 
userSchema.methods.getJWTToken = function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE_TIME  
    })
}


/// Compare Password
userSchema.methods.comparePassword =  function (password) {
     return bcrypt.compare(password,this.password)
};


// Generating Reset Password TOken
userSchema.methods.getResetPasswordToken =  function () {
    const resetToken =   crypto.randomBytes(20).toString("hex");

    this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest("hex");
    this.resetPasswordExpires =  Date.now() + 15 * 60 * 1000;

    return resetToken;
}


module.exports = mongoose.model('User', userSchema);