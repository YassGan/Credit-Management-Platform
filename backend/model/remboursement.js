const mongoose = require("mongoose");


const schema =new mongoose.Schema({
    NomPrénomClient:{
        type:String
        },
    RIB:{
        type:String   //Num Phase dans la table phase va etre au lieu de id phase

            },
    MontantPayé:{
        type:Number
        },
    TypeCrédit:{
        type:String
        },
    Durée:{
        type:String
        },
    dateCréation:{
        type:String
        } ,
        idDemande:{
            type:String
        },idClient:{
            type:String
        }
})




const remboursement =mongoose.model("remboursement",schema);
module.exports=remboursement;