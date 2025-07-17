const mongoose = require('mongoose');


// Student Schema
const studentFeedbackSchema = new mongoose.Schema({
    ytLink:{
        type: String,
        required: [true, "Please Enter Youtube Embedded Link"],
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
})


module.exports = mongoose.model("StudentFeedback", studentFeedbackSchema);