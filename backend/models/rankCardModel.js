const mongoose = require("mongoose");



/// Schema 
const rankSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Card Name"]
    },
    value:{
        type:String,
        required:[true,"Please Enter Card Value"]
    },
    avatar:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Rank",rankSchema)