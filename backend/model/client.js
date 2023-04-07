const mongoose = require("mongoose");


const schema =new mongoose.Schema({
    name:{
        type:String
        },
    prnom:{
        type:String
    },
    mail:{
        type:String
    },
    password:{
        type:String
    },
    profession:{
        type:String
    },
    NumCIN:{
        type:String
    },
    NumTel:{
        type:String
    },
    Adresse:{
        type:String
    },
    DatedeNaissance:{
        type:String
    },
    PhotoProfil:{
        type:String
    }





})



const Userdb2 =mongoose.model("userdb2",schema);
module.exports=Userdb2;