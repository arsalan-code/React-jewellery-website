const mongoose= require ('mongoose')

const addSchema=new mongoose.Schema({
    id:String,
    status:String,
    address:String,
    city:String,
    state:String,
    landmark:String,
    pincode:String
},
 {timestamps:true}
);

const addModel= mongoose.model("address",addSchema)
module.exports=addModel