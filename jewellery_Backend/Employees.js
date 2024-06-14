const mongoose= require ('mongoose')

const userSchema=new mongoose.Schema({
    name:String,
     email:{
       type:String,
       unique:true  
     },
    password:String
})

const employeeModel= mongoose.model("employees",userSchema)

module.exports=employeeModel

