const mongoose=require('mongoose')
 

const newSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    msg:{
        type:String,
        required:true
    }

})

const userQuery=mongoose.model("userQuery",newSchema)
module.exports = userQuery
