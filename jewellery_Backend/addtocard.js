const mongoose= require ('mongoose')

const cartSchema=new mongoose.Schema({
    status:String,
    user_name:String,
    product_id:String,
    quantity: {
        type: Number,
        required: true,
        default:"1"
      },
    cuponcode:String,
    discount:String,
    price:String,
    total_price:String

},

 {timestamps:true}
);

const cartModel= mongoose.model("addtocart",cartSchema)
module.exports=cartModel