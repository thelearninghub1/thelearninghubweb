const mongoose = require('mongoose');


const afiliationSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true,"Please Enter Afiliation  Title"]
    },
    description:{
        type: String,
        required: [true,"Please Enter Afiliation  Description"]
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


module.exports = mongoose.model("Afiliation", afiliationSchema);