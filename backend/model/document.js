const mongoose = require("mongoose");


const schema =new mongoose.Schema({
    id:{
        type:String
        },
    typeDocument:{
        type:String
        },
    Url:{
        type:String
        },
    idClientAssocié:{
        type:String
        },
    DateAjout:{
        type:String
        },
    idPhaseAssociée:{
        type:String
            },
            statutDoc:{
                type:String
                    }
})


const document =mongoose.model("document",schema);
module.exports=document;