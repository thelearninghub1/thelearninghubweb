const mongoose = require('mongoose');


// Extra Curricuam Activities Schema
const featueSchema = new mongoose.Schema({
    title:{
        type: String,
        required:[true, 'Please Enter Feature title'],
    },
    description:{
        type: String,
        required:[true, 'Please Enter feature description'],
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


module.exports = mongoose.model('Feature', featueSchema);