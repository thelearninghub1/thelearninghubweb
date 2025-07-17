const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true , "Please Enter Member Name"]
    },
    title:{
        type: String,
        required: [true , "Please Enter Member Title"]
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
})

module.exports = mongoose.model('Team', teamSchema);