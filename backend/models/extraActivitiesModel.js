const mongoose = require('mongoose');


// Extra Curricuam Activities Schema
const extraActivitiesSchema = new mongoose.Schema({
    title:{
        type: String,
        required:[true, 'Please Enter activity title'],
    },
    description:{
        type: String,
        required:[true, 'Please Enter activity description'],
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


module.exports = mongoose.model('ExtraActivities', extraActivitiesSchema);