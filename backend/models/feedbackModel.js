const mongoose = require("mongoose");

// Feedback Schema
const feedbackSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Client Name"]
    },
    title:{
        type:String,
        required:[true,"Please Enter Client Title"]
    },
    description:{
        type:String,
        required:[true,"Please Enter Client Feedback"]
    },
    avatar:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});


module.exports = mongoose.model("Feedback",feedbackSchema)