const mongoose= require ('mongoose')

const favSchema=new mongoose.Schema({
    name:String,
    status:String,
    user_name:String,
    product_id:String
},
 {timestamps:true}
);

const favModel= mongoose.model("favourites",favSchema)
module.exports=favModel