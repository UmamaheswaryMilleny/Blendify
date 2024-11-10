const mongoose = require("mongoose");
const {Schema}=mongoose;

const categorySchema=new mongoose.Schema({
    name:{
        type:String,
        requires:true,
        unique:true
    },
    description:{
        type:String,
        requires:true
    },
    isListed:{
        type:Boolean,
        default:true
    },
    CategoryOffer:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const Category=mongoose.model("Category",categorySchema)
module.exports=Category