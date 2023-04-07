const express = require ("express")
const app = express();
const mongoose = require('mongoose');
const UserModel= require('../backend/model/model')
const Demande =require('../backend/model/demande')
const Phase = require("../backend/model/phase")
const Documentt =require("../backend/model/document")
const message =require("../backend/model/message")
const ClientSTB =require("../backend/model/client")
const Remboursement =require("../backend/model/remboursement")






app.use(express.json());

const cors =require("cors");
const phase = require("../backend/model/phase");

app.use(cors());




const connectDB = async ()=>{
    try{
        const con = await mongoose.connect("mongodb+srv://yassine:yassine123@crud.fterk.mongodb.net/CRUD?retryWrites=true&w=majority ",{
        })
        console.log(`MongoDB connected :${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1)
    }
}

connectDB()







app.get("/",(req,res)=>{
    res.send("crud application:");

})

app.get("/getUsers",(req,res)=>{
    UserModel.find({},(err,result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result);
            console.log(result)
        }
    })
});




app.get("/getPhases",(req,res)=>{
    Phase.find({},(err,result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result);
            console.log(result)
        }
    })
});

app.get("/getDemandes",(req,res)=>{
    Demande.find({},(err,result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result);
            console.log(result)
        }
    })
});



app.get("/getDocuments",(req,res)=>{
    Documentt.find({},(err,result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result);
            console.log(result)
        }
    })
});


app.get("/getMessages",(req,res)=>{
    message.find({},(err,result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result);
            console.log(result)
        }
    })
});


app.get("/getRemboursements",(req,res)=>{
    Remboursement.find({},(err,result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result);
            console.log(result)
        }
    })
});



app.post("/createUser", async (req,res)=>{

    const user =req.body;
    const newUser= new UserModel(user);
    await newUser.save();

    res.json(user)

});











app.post("/createDemande", async (req,res)=>{

    const demande =req.body;
    const newDemande= new Demande(demande);
    await newDemande.save();

    res.json(demande)

});



app.post("/createRemboursement", async (req,res)=>{

    const rembour =req.body;
    const newRemboursement= new Remboursement(rembour);
    await newRemboursement.save();

    res.json(rembour)

});







app.post("/createPhase", async (req,res)=>{

    const phase =req.body;
    const newPhase= new Phase(phase);
    await newPhase.save();

    res.json(phase)

});

app.post("/createDocument", async (req,res)=>{

    const documentt =req.body;
    const newdocument= new Documentt(documentt);
    await newdocument.save();

    res.json(newdocument)

});




app.post("/createMessage", async (req,res)=>{

    try{
    const Message =req.body;
    const newmessage= new message(Message);
    await newmessage.save();

    res.json(newmessage)
    }
    catch(err){
        console.log(err)
    }

});









app.put("/updateAdminName",async (req,res)=>{
const newName=req.body.newName;
const id =req.body.id;


try{
await UserModel.findById(id,(err,updatedAdmin)=>{
    updatedAdmin.name=newName;
    updatedAdmin.save();
    res.send("update");
})
}
catch(err){
    console.log(err); 
}

})



app.put("/updateAdminPrenom",async (req,res)=>{
    const newPrnom=req.body.newPrnom;
    const id =req.body.id;
    
    
    try{
    await UserModel.findById(id,(err,updatedAdmin)=>{
        updatedAdmin.prnom=newPrnom;
        updatedAdmin.save();
        res.send("update");
    })
    }
    catch(err){
        console.log(err); 
    }
    
    })









    app.put("/updateAdminTel",async (req,res)=>{
        const newTel=req.body.newTel;
        const id =req.body.id;
        
        
        try{
        await UserModel.findById(id,(err,updatedAdmin)=>{
            updatedAdmin.NumTel=newTel;
            updatedAdmin.save();
            res.send("update");
        })
        }
        catch(err){
            console.log(err); 
        }
        
        })



        app.put("/updateAdminMail",async (req,res)=>{
            const newMail=req.body.newMail;
            const id =req.body.id;
            
            
            try{
            await UserModel.findById(id,(err,updatedAdmin)=>{
                updatedAdmin.mail=newMail;
                updatedAdmin.save();
                res.send("update");
            })
            }
            catch(err){
                console.log(err); 
            }
            
            })
    



            app.put("/updateAdminMp",async (req,res)=>{
                const newMp=req.body.newMp;
                const id =req.body.id;
                
                
                try{
                await UserModel.findById(id,(err,updatedAdmin)=>{
                    updatedAdmin.password=newMp;
                    updatedAdmin.save();
                    res.send("update");
                })
                }
                catch(err){
                    console.log(err); 
                }
                
                })


                app.put("/updateAdminPhotoModif",async (req,res)=>{
                    const UrlImageProfil2=req.body.UrlImageProfil2;
                    const id =req.body.id;
                    
                    
                    try{
                    await UserModel.findById(id,(err,updatedAdmin)=>{
                        updatedAdmin.PhotoProfil=UrlImageProfil2;
                        updatedAdmin.save();
                        res.send("update");
                    })
                    }
                    catch(err){
                        console.log(err); 
                    }
                    
                    })




                

















    
    app.delete("/deletePhase/:id", async(req, res)=>{

        const id= req.params.id;
        
        await Phase.findByIdAndRemove(id).exec();
        res.send("deleted")
    
    })




app.delete("/delete/:id", async(req, res)=>{

    const id= req.params.id;
    
    await UserModel.findByIdAndRemove(id).exec();
    res.send("deleted")

})


app.delete("/deleteDocuments/:id", async(req, res)=>{

    const id= req.params.id;
    
    await Documentt.findByIdAndRemove(id).exec();
    res.send("deleted")

})


app.put('/UpdateDoc/:id',async (req,res)=>{
    try{
        await Documentt.findByIdAndUpdate({_id:req.body.id},{
            statutDoc :req.body.newStatut

            
        })
    }
    catch(err){
        res.send(err)
    }
})



app.put('/UpdateDemande/:id',async (req,res)=>{
    try{
        await Demande.findByIdAndUpdate({_id:req.body.idpDe},{
            statutGlobal :req.body.newStatutDemande
        })
    }
    catch(err){
        res.send(err)
    }
})


app.put('/UpdatePhase/:id',async (req,res)=>{
    try{
        await Phase.findByIdAndUpdate({_id:req.body.idp},{
            Statut:req.body.newStatut
        })
    }
    catch(err){
        res.send(err)
    }
})




app.put('/UpdateMessage/:id',async (req,res)=>{
    try{
        await message.findByIdAndUpdate({_id:req.body.IdVue},{
            VueRécepteur:req.body.ChangeVue
        })
    }
    catch(err){
        res.send(err)
    }
})








app.listen(3001,()=>{console.log(`server is running on http://localhost:${3001}`)})

