const mongoose = require("mongoose");

const calenderSchema = new mongoose.Schema({
    date:{
        type:String
    },
    details:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
});


module.exports = mongoose.model("Calender",calenderSchema)