const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const ContactUs = require('../models/contactUsModel');
const ErrorHandler = require('../utils/errorhandler');
const sendContactEmail = require('../utils/sendContactEmail');
const sendEmail = require('../utils/sendEmail');



// Create a new contact us message  
exports.createContactUsMessage = catchAsyncErrors(async (req, res, next) => {

    const { name, email, message, country } = req.body;

    
    const contactUsMessage = await ContactUs.create({
        name,
        email,
        message,
        country
    });


    const sendMessage = `Dear Admin, My name is ${name} and I am from ${country}. My email is ${email}. I would like to say: ${message} \n Regards,
${name}.`; 



try {
    
    sendContactEmail({
        email: req.body.email,
        subject: `The Learning Hub Contact Us Message`,
        message: sendMessage
    })

    
    res.status(201).json({
        success: true,
        sendMessage
    });


} catch (error) {
    return next(new ErrorHandler(error.message,400))

}




});



/// Create Partner with  us 
exports.createPartnerContactUsMessage = catchAsyncErrors(async (req, res, next) => {

    const { name, email, message, country , companyName } = req.body;

    
    const contactUsMessage = await ContactUs.create({
        name,
        email,
        message,
        companyName,
        country
    });


    const sendMessage = `Dear Admin, My name is ${name} and I am from ${country} & our company name is ${companyName}. Our bussiness email is ${email}. this is small intro of our company: ${message} \n Regards,
${name}.`; 



try {
    
    sendContactEmail({
        email: req.body.email,
        subject: `The Learning Hub Partner With Us`,
        message: sendMessage
    })

    
    res.status(201).json({
        success: true,
        sendMessage
    });


} catch (error) {
    return next(new ErrorHandler(error.message,400))

}




})






// Request a call back
exports.createCallBack = catchAsyncErrors(async (req, res, next) => {

    const { name, email, country , WhatsAppNo , program , phoneNo } = req.body;

    
    const contactUsMessage = await ContactUs.create({
        name,
        email,
        program, 
        phoneNo,
        WhatsAppNo,
        country
    });


    const sendMessage = `Dear Admin,\nMy name is ${name} and I am from ${country}. My email is ${email} And my Phone Number is : ${phoneNo} And here is my whatsApp Number : ${WhatsAppNo}. I am interested to  take admission in ${program} \nWaiting for your response. \nRegards,
${name}.`; 



try {
    
    sendContactEmail({
        email: req.body.email,
        subject: `Request A Call Back - The Learning Hub`,
        message: sendMessage
    })

    
    res.status(201).json({
        success: true,
        sendMessage
    });


} catch (error) {
    return next(new ErrorHandler(error.message,400))

}});
