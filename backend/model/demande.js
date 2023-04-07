const mongoose = require("mongoose");


const schema =new mongoose.Schema({
    id_demande:{
        type:String
        },
    type_demande:{
        type:String
    },
    id_client_associé:{
        type:String
    },
    nomClient:{
        type:String
    },
    montant:{
        type:Number
    },
    durée:{
        type:Number
    },
    taux_d_interet:{
        type:Number
    },
    mensualité:{
        type:Number
    },
    id_phase1:{
        type:String
    },
    id_phase2:{
        type:String
    },
    id_phase3:{
        type:String
    },
    id_phase4:{
        type:String
    },
    id_phase5:{
        type:String
    },
    statutGlobal:{
        type:String
    },
    Date_de_creation:{
        type:String
    }

})



const demande =mongoose.model("demande",schema);
module.exports=demande;