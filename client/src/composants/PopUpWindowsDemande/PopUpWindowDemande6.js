
import './PopUpWindowsDemande.css'
import LogoStb from '../../composants/images/Logo_STB.png'
import start from '../../composants/images/start2.png'

import alertPhoto from '../../composants/images/alertPhoto.png'

import axios from 'axios'
import submit_icone from "../images/submit_icone.png"
import { useState,useEffect } from 'react'





const PopUpWindowDemande6 =(props)=>{

    const [tabUsers3,settabUsers3]=useState([]);



    useEffect(()=>{
        axios.get("http://localhost:3001/getPhases").then((response)=>{
            settabUsers3(response.data)
        })
          },[])






 {/*  <h4> {window.type} </h4>
    </div> 
   
    <div className='coordonnes_line'>
        <h4> {window.Montant} dt </h4>
    </div>  

    <div className='coordonnes_line'>
        <h4> {window.mensualité}  dt</h4>
    </div> 

    <div className='coordonnes_line'>
        <h4> {window.durée} mois  </h4>
    </div> 

    <div className='coordonnes_line'>
        <h4> {window.tauxdinteret} % </h4>
*/}






   const creerNvDemande =()=>{
    var today = new Date();

    var date = today.getDate() +'-'+(today.getMonth()+1)+'-'+  today.getFullYear();
    

    function generateRandom(max){
        return Math.random() * max;
    }



 

window.idDemandeGénéréRandomly=generateRandom( 9999);
window.idPhase1GénéréRandomly=generateRandom( 9999); // il va etre généré dans la case id_phase 
window.idPhase2GénéréRandomly=generateRandom( 9999);
window.idPhase3GénéréRandomly=generateRandom( 9999);
window.idPhase4GénéréRandomly=generateRandom( 9999);
window.idPhase5GénéréRandomly=generateRandom( 9999);
window.idD1=generateRandom(4697798798798754);
window.idD2=generateRandom(4697798798798754);
window.idD3=generateRandom(4697798798798754);
window.idD4=generateRandom(4697798798798754);
window.idD5=generateRandom(4697798798798754);
window.idD6=generateRandom(4697798798798754);
window.idD7=generateRandom(4697798798798754);

//Num Phase dans la table phase va etre au lieu de id phase


    axios.post("http://localhost:3001/createPhase",
    {
    nom:"Phase1 "+localStorage.getItem("nomSessionCLient")+" "+localStorage.getItem("prenomSessionCLient")+" "+localStorage.getItem("NumCINSessionClient"),
    NumPhase:window.idPhase1GénéréRandomly,
    idDemande:window.idDemandeGénéréRandomly,
    Statut:"phase_validée",
    idDocument:"phase_validée",
    dateCréation:date 
                                                 
}).then((response)=>{
alert("user created")
})

axios.post("http://localhost:3001/createPhase",
{
    nom:"Phase2 "+localStorage.getItem("nomSessionCLient")+" "+localStorage.getItem("prenomSessionCLient")+" "+localStorage.getItem("NumCINSessionClient"),
NumPhase:window.idPhase2GénéréRandomly,
idDemande:window.idDemandeGénéréRandomly,
Statut:"phase_pas_encore",
idDocument:"Pas encore",
dateCréation:date

                                             
}).then((response)=>{
alert("user created")
})

axios.post("http://localhost:3001/createPhase",
{
    nom:"Phase3 "+localStorage.getItem("nomSessionCLient")+" "+localStorage.getItem("prenomSessionCLient")+" "+localStorage.getItem("NumCINSessionClient"),
NumPhase:window.idPhase3GénéréRandomly,
idDemande:window.idDemandeGénéréRandomly,
Statut:"phase_pas_encore",
idDocument:"Pas encore",
dateCréation:date

                                             
}).then((response)=>{
alert("user created")
})
  

axios.post("http://localhost:3001/createPhase",
{
    nom:"Phase4 "+localStorage.getItem("nomSessionCLient")+" "+localStorage.getItem("prenomSessionCLient")+" "+localStorage.getItem("NumCINSessionClient"),
NumPhase:window.idPhase4GénéréRandomly,
idDemande:window.idDemandeGénéréRandomly,
Statut:"phase_pas_encore",
idDocument:"Pas encore",
dateCréation:date

                                             
}).then((response)=>{
alert("user created")
})

axios.post("http://localhost:3001/createPhase",
{
    nom:"Phase5 "+localStorage.getItem("nomSessionCLient")+" "+localStorage.getItem("prenomSessionCLient")+" "+localStorage.getItem("NumCINSessionClient"),
NumPhase:window.idPhase5GénéréRandomly,
idDemande:window.idDemandeGénéréRandomly,
Statut:"phase_pas_encore",
idDocument:"Pas encore",
dateCréation:date

                                             
}).then((response)=>{
alert("user created")
})











axios.post("http://localhost:3001/createDemande",
{
id_demande:window.idDemandeGénéréRandomly,
type_demande:window.type,
id_client_associé:localStorage.getItem("IdSessionClient"),
nomClient:localStorage.getItem("nomSessionCLient")+" "+localStorage.getItem("prenomSessionCLient"),
montant:window.Montant,
durée:window.durée,
taux_d_interet:window.tauxdinteret,
mensualité:window.mensualité,
id_phase1:window.idPhase1GénéréRandomly,
id_phase2:window.idPhase2GénéréRandomly,
id_phase3:window.idPhase3GénéréRandomly,
id_phase4:window.idPhase4GénéréRandomly,
id_phase5:window.idPhase5GénéréRandomly,

statutGlobal:"En cours",

Date_de_creation:date

                                             
}).then((response)=>{
alert("user created")
})












  }












    const commencerProcessus  = ()=>{

        creerNvDemande();

        window.location.reload();

    }


    return(props.triggerdemande6)  ?   (
        <>
            <div className="BgModalPopUp4">
                <div className="PopUpWindowDemande4Container">
                    <div className="PopUpWindowDemande4">
                        
                       <div className='closingButtonContainer4'>
                           <h4  onClick={()=>{props.settriggerdemande6(false);}} className='pointer closingButton4'> +</h4>
                       </div>
                       
          

                        
                        <div className='PopUpWindowSTBLogoContainerPopUp4'>
                            <div className="StbLogoPhot">
                                <img  className='logoStb' src={LogoStb}/>      
                            </div>
                        </div>

        
                       
                        <div className='title4container'>
               <h4 className='title4'> 

                 
                 <h2>

                 </h2>
                 
                 <div className='CommençonsContainer'>
                    <h3>
Vous voulez procéder à la création de la demande ? 
                        </h3>
                        </div>

                        <div className='startIconeContainer'>
                           <div >
                            <img className='imgStart' src={start} />
                            </div>
                        </div>
                        
                              </h4>

           </div>

            
            <div className="PopUpWindowTwoButtonsValidationContainerdernier">

                            
<div   onClick={()=>{props.settriggerdemande6(false);}} className="btn_annuler ButtonValidationPopUp">
    <h4> Annuler</h4>
</div>

<div  onClick={commencerProcessus} className="btn_valider ButtonValidationPopUp">
    <h4> Créer </h4>
</div>
    
</div>
           </div>



                    </div>

                </div>
            

        </>
            ):"";

}


export default PopUpWindowDemande6;