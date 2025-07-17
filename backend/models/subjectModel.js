const mongoose = require('mongoose');


// Subject Schema
const subjectSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true , "Please Enter Subject Name"]
    },
    grade:{
        type: String,
        required: [true , "Please Enter Subject Grade Level"]
    },
    teacher:{
        type:String,
        required: [true , "Please Enter Subject Teacher Name"]
    },
    teacherQualification:{
        type: String,
        required: [true , "Please Enter Subject Teacher Qualification"]
    },
    description:{
        type: String,
        required: [true , "Please Enter Subject Description"]
    },
    images:[
        {
            public_id:{
                type: String,
                required: true
            },
            url:{
                type: String,
                required: true
            }
        }
    ],
    createdAt:{
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Subject', subjectSchema);