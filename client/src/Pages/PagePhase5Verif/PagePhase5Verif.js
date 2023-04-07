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

import Contrat from "../../composants/images/contrat.jpg"
import DocBox from "../../composants/DocBox/DocBox";


import ValidatoinBox from "../../composants/ValidationBox/ValidationBox";
import ValidatoinBoxTotal from '../../composants/ValidationBoxTotal/ValidationBoxTotatl'




function PagePhasesUploader() {

 
  const [el,setel]=useState(false);
  const [el2,setel2]=useState(false);

  const[el3,setel3]=useState(false)

  const[elZooming,setelZooming]=useState(false)
  const[UrlImagePourZoomer,setUrlImagePourZoomer]=useState("")





  const [Statut,setStatut]=useState("Administrateur")

  const [id,setId]=useState("@1112")
  const [prénom,setPrénom]=useState(localStorage.getItem("prenomSessionCLient"))
  const [nom,seNom]=useState(localStorage.getItem("nomSessionCLient"))
  const [date_de_naissance,setdate_de_naissance]=useState(localStorage.getItem("nomCLient"))
  const [date_d_inscription,setdate_d_inscription]=useState("22/02/2022")
  const [NumTel,setNumTel]=useState(localStorage.getItem("NumTelSessionClient"))
  const [AdresseMail,setAdresseMail]=useState(localStorage.getItem("mailSessionClient"))
  const [NumCIN,setNumCIN]=useState(localStorage.getItem("NumCINSessionClient"))
  const [lienPhoto,setLienPhoto]=useState(localStorage.getItem("PhotoProfilSessionClient"))
  




  
  const [tabTouteslesPhasesss,settabTouteslesPhasesss]=useState([]);


  useEffect(()=>{
          axios.get("http://localhost:3001/getPhases").then((response)=>{
            settabTouteslesPhasesss(response.data)
          })
            },[])
  
            console.log(tabTouteslesPhasesss)


            var iD2D;      
            for (iD2D in tabTouteslesPhasesss){
                if(tabTouteslesPhasesss[iD2D].NumPhase===localStorage.getItem("idPhase2Demande")){
                    localStorage.setItem("StatutPhase",tabTouteslesPhasesss[iD2D].Statut)
                    console.log( "statut phasssssse "+ localStorage.getItem("StatutPhase"))
    
                }
            }




            
    const [tabDemandes,settabDemandes]=useState([])

    
    useEffect(()=>{
        axios.get("http://localhost:3001/getDemandes").then((response)=>{
            settabDemandes(response.data)
        })
          },[])
  




          var uio;
          for (uio in tabDemandes){
            if (tabDemandes[uio].id_phase5===localStorage.getItem("idPhase2Demande")){
               
              
              
              localStorage.setItem("StatutGlobalDemandeOuverte ",tabDemandes[uio].statutGlobal)
              localStorage.setItem("idDemandeOuverte ",tabDemandes[uio]._id)

            }
          }











  




  return (
<div>
    <div className='containerPageProfilClient'>

        <Navbar TriggerDeconnexion={el3} setTriggerDeconnexion={setel3} photo={lienPhoto} Statut={Statut} nom={nom} prénom={prénom}  />
        <Sidebar></Sidebar>

            
            <div className='client_main'>
                <TitreDuMain titre={"Phase 5 : Signature du contrat"} description={"Une fois les phase précédentes sont validées nous vous invitons de venir signer le contrat. "}></TitreDuMain>


<br></br>
<br></br>



<div className="TitreContainer2" >
                         <h2 className={localStorage.getItem("StatutPhase")} >Statut : {localStorage.getItem("StatutPhase")} </h2>
                     </div>

                     
                     <div className="TitreContainer" >
                          <h2 className="fonting"> Changez le statut global de la phase </h2>
                     </div>

                     <ValidatoinBox  fonctionValiderGlo="ValiderDemande" fonctionRefuserGlo="RefuserDemande"  fonctionEnCoursGlo="EnCoursDemande"></ValidatoinBox>


              <div className="ImgWrapper">
                <div>
                    <img className="ContratScale" src={Contrat}/>
                </div>
                </div>


                <div className="TitreContainer" >
                          <h2 className="fonting"> Changez le statut global de la demande </h2>
                     </div>
                     <ValidatoinBoxTotal  fonctionValiderDemnadeOuverte="ValiderDemande" fonctionRefuserDemnadeOuverte="RefuserDemande"  fonctionEnCoursDemnadeOuverte="EnCoursDemande"></ValidatoinBoxTotal>




<div className="contenuD">
<div  className="ImporterDoCBoxesContainer">





{/*
<DocBox   triggerZooming={elZooming} settriggerZooming={setelZooming} UrlImagePourZoomer={UrlImagePourZoomer}
setUrlImagePourZoomer={setUrlImagePourZoomer}
titre="Importer la demande de crédit"></DocBox>

*/}



          

        



</div>
</div>

              

            </div>

    </div>

    <div>
      <PopUpWindowModification1 trigger2={el2} setTrigger2={setel2} trigger={el} setTrigger={setel}></PopUpWindowModification1>
    </div>


    <div>
      <PopUpWindowAreYouSure trigger={el} setTrigger={setel} trigger2={el2} setTrigger2={setel2}></PopUpWindowAreYouSure>
    </div>

    <div>
        <PopUpWindowDeconnexion TriggerDeconnexion={el3} setTriggerDeconnexion={setel3}></PopUpWindowDeconnexion>
    </div>

                
                
                <div>
                    <ImageZooming triggerZooming={elZooming} settriggerZooming={setelZooming}
                    UrlImagePourZoomer={UrlImagePourZoomer}
                    setUrlImagePourZoomer={setUrlImagePourZoomer}
                    ></ImageZooming>
                </div>

    
</div>
  );
}

export default PagePhasesUploader;
























