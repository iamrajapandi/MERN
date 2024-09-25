const mongoose=require('mongoose')

const userschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    about:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})

const User=mongoose.model("User",userschema)
module.exports=User;