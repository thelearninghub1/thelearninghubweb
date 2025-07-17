const mongoose = require('mongoose');

// Technology Partner Schema

const partnerSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true , "Please Enter Partner Name"]
    },
    description:{
        type: String,
        required: [true , "Please Enter Partner Description"]
    },
    avatar:{
        public_id:{
            type: String,
            required: true
        },
        url:{
            type: String,
            required: true
        }
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('partner', partnerSchema);