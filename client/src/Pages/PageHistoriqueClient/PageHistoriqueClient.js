import "../PagePhasesUploader/PagePhasesUploader.css"



import React from 'react';
import { useState,useEffect } from 'react';
import axios from "axios";
import SidebarClient from '../../composants/clientSidebar/clientSidebar';
import Navbar from '../../composants/navbar/navbar';
import ProfileInformationBox from '../../composants/profile_information_box/profileInformationBox';
import TitreDuMain from '../../composants/titreduMain/titreDuMain';

import PopUpWindowModification1 from '../../composants/PopUpWindowModification1/PopUpWindowModification1'
import PopUpWindowAreYouSure from '../../composants/PopUpWindowAreYouSure/PopUpWindowAreYouSure';

import PopUpWindowDeconnexion from '../../composants/PopUpWindowDeconnexion/PopUpWindowDeconnexion';

import ImageZooming from "../../composants/ImageZooming/ImageZooming";

import EtudeDem from "../../composants/images/etudeDemande.jpg"
import DocBox from "../../composants/DocBox/DocBox";
import RemboursementElement from "../../composants/RemboursementElement/RemboursementElement";


import "./PageHistroiqueClient.css"

function PageHistoriqueClient() {

 
  const [el,setel]=useState(false);
  const [el2,setel2]=useState(false);

  const[el3,setel3]=useState(false)


  const [Statut,setStatut]=useState("Client")

  const [id,setId]=useState("@1112")
  const [prénom,setPrénom]=useState(localStorage.getItem("prenomSessionCLient"))
  const [nom,seNom]=useState(localStorage.getItem("nomSessionCLient"))
  const [date_de_naissance,setdate_de_naissance]=useState(localStorage.getItem("DatedeNaissanceSessionClient"))
  const [date_d_inscription,setdate_d_inscription]=useState("22/02/2022")
  const [NumTel,setNumTel]=useState(localStorage.getItem("NumTelSessionClient"))
  const [AdresseMail,setAdresseMail]=useState(localStorage.getItem("mailSessionClient"))
  const [NumCIN,setNumCIN]=useState(localStorage.getItem("NumCINSessionClient"))
  const [lienPhoto,setLienPhoto]=useState(localStorage.getItem("PhotoProfilSessionClient"))



















let tabDemandeSessionClient=[];

let i=0;


const [tabRem,setTabRem]=useState([])


  useEffect(()=>{
    axios.get("http://localhost:3001/getRemboursements").then((response)=>{
        setTabRem(response.data)
    })
      },[])
      console.log(tabRem)





      var ino;
for (ino in tabRem){
    if (tabRem[ino].idClient===localStorage.getItem("IdSessionClient"))
    {
        console.log("helllllllllllllllllllllloi")
        tabDemandeSessionClient.push(tabRem[ino])
    }
}






  




  return (
<div>
    <div className='containerPageProfilClient'>

    <Navbar TriggerDeconnexion={el3} setTriggerDeconnexion={setel3} photo={lienPhoto} Statut={Statut} nom={nom} prénom={prénom}  />
        <SidebarClient></SidebarClient>

            
            <div className='client_main'>
                <TitreDuMain titre={"Historique "} description={" Voici vos anciens payements"}></TitreDuMain>



                <div className="El">
                </div>

              

              {tabDemandeSessionClient.map((e)=>{
                  i+=1;
                  return(

<RemboursementElement nb={i} NomPrénomCLinet={e.NomPrénomClient} RIBClient={e.RIB} MontantPayé={e.MontantPayé} TypeCrédit={e.TypeCrédit} Durée={e.Durée} DatePaiement={e.dateCréation}></RemboursementElement>
                      
                  )
              })}




            </div>

    </div>


    <div>
        <PopUpWindowDeconnexion TriggerDeconnexion={el3} setTriggerDeconnexion={setel3}></PopUpWindowDeconnexion>
    </div>

                
     
    
</div>
  );
}

export default PageHistoriqueClient;
























