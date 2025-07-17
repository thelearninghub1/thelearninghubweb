const mongoose = require('mongoose');



// Contact Us Schema

const contactUsSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    message: {
        type: String,
    },
    country:{
        type: String,
    },
    companyName:{
        type: String,
    },
    phoneNo:{
        type: String,
    },
    WhatsAppNo:{
        type: String,
    },
    program:{
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('ContactUs', contactUsSchema);