const sendToken  =  (user,statusCode,res) => {

    const token = user.getJWTToken();

    const options =  {
        httpOnly:true,
        expires: new Date(Date.now() +  process.env.COOKIES_EXPIRES * 24 *60 *60 * 1000)
    }

    res.status(statusCode).cookie("token",token,options).json({
        success:true,
        user,
        token
    })

}

module.exports = sendToken