import "../PagePhasesUploader/PagePhasesUploader.css"

import "./PageDemandePourVérifierParAdmin.css"



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


import EtudeDem from "../../composants/images/etudeDemande.jpg"
import DocBox from "../../composants/DocBox/DocBox";

import Timeline from "../../composants/timeline/timeline";





function PageDemandePourVériferParAdmin() {

 
  const [el,setel]=useState(false);
  const [el2,setel2]=useState(false);

  const[el3,setel3]=useState(false)

  const[elZooming,setelZooming]=useState(false)
  const[UrlImagePourZoomer,setUrlImagePourZoomer]=useState("")






  const [Statut,setStatut]=useState("Administrateur")

  const [id,setId]=useState("@1112")
  const [prénom,setPrénom]=useState(   localStorage.getItem("nomSessionAdmin"))
  const [nom,seNom]=useState( localStorage.getItem("prenomSessionAdmin"))
  const [date_de_naissance,setdate_de_naissance]=useState( localStorage.getItem("DatedeNaissanceSessionAdmin"))
  const [date_d_inscription,setdate_d_inscription]=useState("22/02/2022")
  const [NumTel,setNumTel]=useState(localStorage.getItem("NumTelSessionAdmin"))
  const [AdresseMail,setAdresseMail]=useState(localStorage.getItem("mailSessionAdmin"))
  const [NumCIN,setNumCIN]=useState(localStorage.getItem("NumCINSessionAdmin"))
  const [lienPhoto,setLienPhoto]=useState(localStorage.getItem("PhotoProfilSessionAdmin"))



  const [tabDemandesPageVerif, setTabDemandesPageVerif]=useState([])

  useEffect(()=>{
      axios.get("http://localhost:3001/getDemandes").then((response)=>{
        setTabDemandesPageVerif(response.data)
      })
        },[])

        console.log(tabDemandesPageVerif)


        const [tabPhasesPageVerif, setTabPhasesPageVerif]=useState([])

        useEffect(()=>{
            axios.get("http://localhost:3001/getPhases").then((response)=>{
                setTabPhasesPageVerif(response.data)
            })
              },[])
      
              console.log(tabPhasesPageVerif)



        var iParc;
        for (iParc in tabDemandesPageVerif){
            if(tabDemandesPageVerif[iParc]._id===localStorage.getItem("IdDemandePourConsulterParAdmin" )){
                console.log("Demande trouvée")
                 localStorage.setItem("idPhaseUne",tabDemandesPageVerif[iParc].id_phase1) ;
                 localStorage.setItem("idPhaseDeux",tabDemandesPageVerif[iParc].id_phase2) ;
                 localStorage.setItem("idPhaseTrois",tabDemandesPageVerif[iParc].id_phase3) ;
                 localStorage.setItem("idPhaseQuatre",tabDemandesPageVerif[iParc].id_phase4) ;
                 localStorage.setItem("idPhaseCinq",tabDemandesPageVerif[iParc].id_phase5) ;
                 localStorage.setItem("StatutDemandePourConsulterParAdmin",tabDemandesPageVerif[iParc].statutGlobal) ;
                 localStorage.setItem("MensualitéPourConsulterParAdmin",tabDemandesPageVerif[iParc].mensualité) ;
                 localStorage.setItem("montantPourConsulterParAdmin",tabDemandesPageVerif[iParc].montant) ;
                 localStorage.setItem("duréePourConsulterParAdmin",tabDemandesPageVerif[iParc].durée) ;

                 localStorage.setItem("type_demandePourConsulterParAdmin",tabDemandesPageVerif[iParc].type_demande) ;

                 localStorage.setItem("date_premier_dépotPourConsulterParAdmin",tabDemandesPageVerif[iParc].Date_de_creation) ;

                 var iParcPhase
                    for (iParcPhase  in tabPhasesPageVerif){
                        if(tabPhasesPageVerif[iParcPhase].NumPhase===localStorage.getItem("idPhaseUne" )){
                            localStorage.setItem("StatutPhase1",tabPhasesPageVerif[iParcPhase].Statut)

                        }
                        if(tabPhasesPageVerif[iParcPhase].NumPhase===localStorage.getItem("idPhaseDeux" )){
                            localStorage.setItem("StatutPhase2",tabPhasesPageVerif[iParcPhase].Statut)

                        }
                        if(tabPhasesPageVerif[iParcPhase].NumPhase===localStorage.getItem("idPhaseTrois" )){
                            localStorage.setItem("StatutPhase3",tabPhasesPageVerif[iParcPhase].Statut)

                        }
                        if(tabPhasesPageVerif[iParcPhase].NumPhase===localStorage.getItem("idPhaseQuatre" )){
                            localStorage.setItem("StatutPhase4",tabPhasesPageVerif[iParcPhase].Statut)

                        }
                        if(tabPhasesPageVerif[iParcPhase].NumPhase===localStorage.getItem("idPhaseCinq" )){
                            localStorage.setItem("StatutPhase5",tabPhasesPageVerif[iParcPhase].Statut)

                        }
                    }



            }
        }


  




  return (
<div>
    <div className='containerPageProfilClient'>

        <Navbar TriggerDeconnexion={el3} setTriggerDeconnexion={setel3} photo={lienPhoto} Statut={Statut} nom={nom} prénom={prénom}  />
        <Sidebar></Sidebar>

            
            <div className='client_main'>
                <TitreDuMain titre={"Demande du client"} description={"Ce sont les informations de la demande consultée "}></TitreDuMain>


            <div className="timelineWrapper">
            <Timeline idDemande={localStorage.getItem("IdDemandePourConsulterParAdmin" )} idPhase1={localStorage.getItem("idPhaseUne")}   idPhase2={localStorage.getItem("idPhaseDeux")} 
             idPhase3={localStorage.getItem("idPhaseTrois")}  idPhase4={localStorage.getItem("idPhaseQuatre")}  idPhase5={localStorage.getItem("idPhaseCinq")} 
               statut_demande= {localStorage.getItem("StatutDemandePourConsulterParAdmin")} mensualité={ localStorage.getItem("MensualitéPourConsulterParAdmin")} 
               montant={localStorage.getItem("montantPourConsulterParAdmin")} durée={ localStorage.getItem("duréePourConsulterParAdmin")} type={localStorage.getItem("type_demandePourConsulterParAdmin")} date_premier_dépot={  localStorage.getItem("date_premier_dépotPourConsulterParAdmin")}
                phase1={localStorage.getItem("StatutPhase1")} phase2={localStorage.getItem("StatutPhase2")}
                phase3={localStorage.getItem("StatutPhase3")} phase4={localStorage.getItem("StatutPhase4")} phase5={localStorage.getItem("StatutPhase5")}> </Timeline>

            </div>






<div className="contenuD">
<div  className="ImporterDoCBoxesContainer">









          

        



</div>
</div>

              

            </div>

    </div>




    <div>
      <PopUpWindowAreYouSure trigger={el} setTrigger={setel} trigger2={el2} setTrigger2={setel2}></PopUpWindowAreYouSure>
    </div>

    <div>
        <PopUpWindowDeconnexion TriggerDeconnexion={el3} setTriggerDeconnexion={setel3}></PopUpWindowDeconnexion>
    </div>

                
                
        

    
</div>
  );
}

export default PageDemandePourVériferParAdmin;
























