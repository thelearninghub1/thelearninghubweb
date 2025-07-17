const mongoose = require('mongoose');


// Teacher Schema
const TeacherSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true , "Please Enter Teacher Name"]
    },
    title:{
        type: String,
        required: [true , "Please Enter Teacher Title"]
    },
    description:{
        type: String,
        required: [true , "Please Enter Teacher Description"]
    },
    avatar:{
        public_id:{
            type: String,
            required:true
        },
        url:{
            type: String,
            required:true
        }
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports  = mongoose.model('teacher', TeacherSchema);