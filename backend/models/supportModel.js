const mongoose = require('mongoose');


// Support Schema Activities Schema
const supportSchema = new mongoose.Schema({
    title:{
        type: String,
        required:[true, 'Please Enter Academic Support  title'],
    },
    description:{
        type: String,
        required:[true, 'Please Enter Academic Support  description'],
    },
    avatar:{
        public_id:{
            type: String,
            required: true,
        },
        url:{
            type: String,
            required: true,
        }
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('Support', supportSchema);