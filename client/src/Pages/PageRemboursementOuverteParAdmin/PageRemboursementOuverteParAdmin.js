import "../PagePhasesUploader/PagePhasesUploader.css"
import "../PagePhase3/PagePhase3.css"




import React from 'react';
import { useState,useEffect } from 'react';
import axios from "axios";
import Sidebar from '../../composants/sidebar/sidebar';
import Navbar from '../../composants/navbar/navbar';
import ProfileInformationBox from '../../composants/profile_information_box/profileInformationBox';
import TitreDuMain from '../../composants/titreduMain/titreDuMain';

import PopUpWindowModification1 from '../../composants/PopUpWindowModification1/PopUpWindowModification1'
import PopUpWindowAreYouSure from '../../composants/PopUpWindowAreYouSure/PopUpWindowAreYouSure';

import PopUpWindowDeconnexion from '../../composants/PopUpWindowDeconnexion/PopUpWindowDeconnexion';

import ImageZooming from "../../composants/ImageZooming/ImageZooming";

import AcceptationouRefus from "../../composants/images/AcceptationRefus.png"
import DocBox from "../../composants/DocBox/DocBox";

import ValidatoinBox from "../../composants/ValidationBox/ValidationBox";


import RemboursementElement from "../../composants/RemboursementElement/RemboursementElement";

import PopUpWindowRemboursement from "../../composants/PopUpWindowRemboursement/PopUpWindowRemboursement"


import './PageRemboursementOuverteParAdmin.css'




function PageRemboursementOuverteParAdmin() {

 
  const [el,setel]=useState(false);
  const [el2,setel2]=useState(false);

  const[el3,setel3]=useState(false)





const[el10, setel10]=useState(false)







let i=0;




const [tabRemboursement,settabRemboursement]=useState([])


useEffect(()=>{
    axios.get("http://localhost:3001/getRemboursements").then((response)=>{
        settabRemboursement(response.data)
    })
      },[])


      console.log("Tab rembour")
      console.log(tabRemboursement)













  




  return (
<div>
    <div className='containerPageProfilClient'>

        <Navbar TriggerDeconnexion={el3} setTriggerDeconnexion={setel3} photo={localStorage.getItem("PhotoProfilSessionAdmin")} Statut={"Administrateur"} nom={localStorage.getItem("nomSessionAdmin")} prénom={localStorage.getItem("prenomSessionAdmin")}  />
        <Sidebar></Sidebar>

            
            <div className='client_main'>
                <TitreDuMain titre={"Remboursement crédit par clients"} description={"Consultez les remboursements faits par les clients ou ajouter un nouveau remboursement "}></TitreDuMain>



    <div className="ligneBoutonNvRemb">

        <div onClick={()=>setel10(true)} className="boutonNv">
           <span> Nouveau Remboursement </span>
        </div>
    
    </div>


  




 {tabRemboursement.map((e)=>{
     i+=1;
     return(

<RemboursementElement nb={i} NomPrénomCLinet={e.NomPrénomClient} RIBClient={e.RIB} MontantPayé={e.MontantPayé} TypeCrédit={e.TypeCrédit} Durée={e.Durée} DatePaiement={e.dateCréation}></RemboursementElement>
     )
 })}



















          

        




    </div>

 


    <div>
      <PopUpWindowAreYouSure trigger={el} setTrigger={setel} trigger2={el2} setTrigger2={setel2}></PopUpWindowAreYouSure>
    </div>

    <div>
        <PopUpWindowDeconnexion TriggerDeconnexion={el3} setTriggerDeconnexion={setel3}></PopUpWindowDeconnexion>
    </div>

                
                
        

    
</div>


<div>
<PopUpWindowRemboursement  triggerRemboursement={el10} settriggerRemboursement={setel10}></PopUpWindowRemboursement>

</div>

</div>

  );
}

export default PageRemboursementOuverteParAdmin;
























