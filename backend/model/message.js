const mongoose = require("mongoose");


const schema =new mongoose.Schema({
    id:{
        type:String
        },
    idClient:{
        type:String
    },  
      idAgent:{
        type:String
    },   
    VueRécepteur:{
        type:String
    },   
    Contenu:{
        type:String
    },   
    Date:{
        type:String
    },  
    Time:{
        type:String
    },  
    Envoyeur:{
        type:String
    },   
    UrlPhotoEnvoyeur:{
        type:String
    },UrlPhotoClient:{
        type:String
    },NomClient:{
        type:String
    },PrénomClient:{
        type:String
    },DateTri:{
        type:String
    }
})


const message =mongoose.model("message",schema);
module.exports=message;