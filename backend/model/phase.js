const mongoose = require("mongoose");


const schema =new mongoose.Schema({
    nom:{
        type:String
        },
    NumPhase:{
        type:String   //Num Phase dans la table phase va etre au lieu de id phase

            },
    idDemande:{
        type:String
        },
    Statut:{
        type:String
        },
    idDocument:{
        type:String
        },
    dateCréation:{
        type:String
        } 
})


const phase =mongoose.model("phase",schema);
module.exports=phase;