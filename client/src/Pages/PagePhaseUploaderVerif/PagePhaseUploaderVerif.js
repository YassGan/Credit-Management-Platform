


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

import ValidatoinBox from '../../composants/ValidationBox/ValidationBox';


import DocBox from "../../composants/DocBox/DocBox";





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
  


  const [tabdemandess,settabdemandess]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:3001/getDemandes").then((response)=>{
      settabdemandess(response.data)
    })
      },[])


      console.log(tabdemandess)



      var iD2D;      
      for (iD2D in tabdemandess){
          if(tabdemandess[iD2D].id_phase1===localStorage.getItem("idPhase1DemandePage1")){

            localStorage.setItem("Mensualité",tabdemandess[iD2D].mensualité)
            localStorage.setItem("montant",tabdemandess[iD2D].montant)
            localStorage.setItem("durée",tabdemandess[iD2D].durée)
            localStorage.setItem("Date_de_creation",tabdemandess[iD2D].Date_de_creation)
            localStorage.setItem("type_demande",tabdemandess[iD2D].type_demande)

            
            



          }
      }


 

  




  return (
<div>
    <div className='containerPageProfilClient'>

        <Navbar TriggerDeconnexion={el3} setTriggerDeconnexion={setel3} photo={lienPhoto} Statut={Statut} nom={nom} prénom={prénom}  />
        <Sidebar></Sidebar>

            
        <div className='client_main'>
                <TitreDuMain titre={"Phase 1 : Simulation du crédit et initiation de la demande"} description={"La phase 1 représente le choix et le résultat de la simulation faite par le client, voici les informations de sa demande: "}></TitreDuMain>

              <div className="InfoWrapper">
                <div className="InfoContainer">
                  <div className="Info">
                    <p>
                      <ul className="listaD">
                     
                     
                    <li  className="flexing" >
                     
                      <h3 className="Title_Page1"> - Date de création de la demande :</h3>
                       {localStorage.getItem("Date_de_creation")}
                       </li>


<li className="flexing">

<h3 className="Title_Page1" > - Type du crédit  : </h3>
{localStorage.getItem("type_demande")}
</li>


<li className="flexing">


<h3 className="Title_Page1">
- Montant  :

</h3>
{localStorage.getItem("montant")}
dt
</li>


<li className="flexing">


<h3 className="Title_Page1">

- Mensualité :

</h3 >
{localStorage.getItem("Mensualité") }dt

</li>

<li className="flexing">

<h3 className="Title_Page1">

- Durée :
</h3>
{localStorage.getItem("durée")} Mois

</li>
</ul>
</p>

                  </div>
                </div>
              
              </div>


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
























