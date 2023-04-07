import "../PagePhase2/PagePhase2.css"
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


import DocBox from "../../composants/DocBox/DocBox";





function PagePhase2CréditEslah() {

 
  const [el,setel]=useState(false);
  const [el2,setel2]=useState(false);

  const[el3,setel3]=useState(false)

  const[elZooming,setelZooming]=useState(false)
  const[UrlImagePourZoomer,setUrlImagePourZoomer]=useState("")





  const [Statut,setStatut]=useState("Client")

  const [id,setId]=useState("@1112")
  const [prénom,setPrénom]=useState(localStorage.getItem("prenomSessionCLient"))
  const [nom,seNom]=useState(localStorage.getItem("nomSessionCLient"))
  const [date_de_naissance,setdate_de_naissance]=useState(localStorage.getItem("nomCLient"))
  const [date_d_inscription,setdate_d_inscription]=useState("22/02/2022")
  const [NumTel,setNumTel]=useState(localStorage.getItem("NumTelSessionClient"))
  const [AdresseMail,setAdresseMail]=useState(localStorage.getItem("mailSessionClient"))
  const [NumCIN,setNumCIN]=useState(localStorage.getItem("NumCINSessionClient"))
  const [lienPhoto,setLienPhoto]=useState(localStorage.getItem("PhotoProfilSessionClient"))
  






  const[DocumentViergenonCom,setDocumentViergenonCom]=useState()
  const[filenonCom,setfilenonCom]=useState()
  const[UrlImageProfilnonCom,setUrlImageProfilnonCom]=useState()

  






//partie javascript de divibox noComp
  const[filenono,setfilenono]=useState()
  const[UrlImageProfilnono,setUrlImageProfilnono]=useState("")


  const uploadImagenono = async () =>{
      
      const form = new FormData()
      form.append("file",filenono)
      form.append("upload_preset","YassineGn");
      await axios.post("https://api.cloudinary.com/v1_1/ddqjpcqum/upload",form).then((result)=>   setUrlImageProfilnono(result.data.secure_url));

  }


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








  return (
<div>
    <div className='containerPageProfilClient'>

        <Navbar TriggerDeconnexion={el3} setTriggerDeconnexion={setel3} photo={lienPhoto} Statut={Statut} nom={nom} prénom={prénom}  />
        <SidebarClient></SidebarClient>

            







            <div className='client_main'>
                <TitreDuMain titre={"Phase 2 : Dépot de la demande avec les documents justificatifs "} description={"Dans cette phase vous devez remplir le formulaire de la demande et importer quelques documents qui sont nécessaires dans le processus. "}></TitreDuMain>
                  

              <br></br>
              <br></br>

                <div className="TitreContainer2" >
                         <h2 className={localStorage.getItem("StatutPhase")} >Statut : {localStorage.getItem("StatutPhase")} </h2>
                     </div>
                 <div className="ListeDocumentesWrapper">
                  <div className="listeDocumentsContainer">
                   <div className="listeDocuments">
                    <ul >

                    <li>Une demande de crédit</li>

                    <li>Pièce d'identité en cours de validité : passeport ou carte d'identité, titre de séjour.  </li>
                    <li>Un justificatif de domicile de moins de 3 mois :(quittance de loyer, facture d'énergie)  </li>
                    <li>La dernière fiche de paie ou de pension (pour les salariés et les retraités)  </li>
                    <li>Un engagement de domiciliation des revenus et les relevés des six derniers mois pour les professions libérales et les commerçants n'ayant pas de courant d'affaires avec la banque  </li>

                    <li>Le devis des travaux exécutés et des travaux restant à exécuter </li>











                     </ul>
                     </div>
                     </div>
                     </div>


















                     <div className="DoxBoxWrapper">
                     
                   <div className="docBoxSpeci">
                     <div className="DocBoxContainer">
                     <DocBox  nomDocument="DocumentCIN" ImporterDocuBox={"ImporterDocuBoxCIN"}  imgScale={"CINImgScale"} triggerZooming={elZooming} settriggerZooming={setelZooming} UrlImagePourZoomer={UrlImagePourZoomer}
                    setUrlImagePourZoomer={setUrlImagePourZoomer}
                    titre="Importer le recto de votre Pièce d'identité"></DocBox>
                    </div>
                    </div>
                  
                  
                    <div className="DocBoxContainer">
                     <DocBox   ImporterDocuBox={"ImporterDocuBoxCIN"} imgScale={"CINImgScale test2classes"}  triggerZooming={elZooming} settriggerZooming={setelZooming} UrlImagePourZoomer={UrlImagePourZoomer}
                    setUrlImagePourZoomer={setUrlImagePourZoomer}
                    titre="Importer le verso de votre Pièce d'identité"></DocBox>
                    </div>

                     </div>










                     <div className="DoxBoxWrapper">
                     
                     <div className="DocBoxContainer">
                     <DocBox  ImporterDocuBox={"ImporterDocuBox"} ImgContainer={"ImgContainer"} imgScale={"imgScale"}  triggerZooming={elZooming} settriggerZooming={setelZooming} UrlImagePourZoomer={UrlImagePourZoomer}
                    setUrlImagePourZoomer={setUrlImagePourZoomer}
                    titre="Importer votre justificatif de domicile"></DocBox>
                    </div>
                  
                  
                    <div className="DocBoxContainer">
                     <DocBox ImporterDocuBox={"ImporterDocuBox"} ImgContainer={"ImgContainer"} imgScale={"imgScale"}  triggerZooming={elZooming} settriggerZooming={setelZooming} UrlImagePourZoomer={UrlImagePourZoomer}
                    setUrlImagePourZoomer={setUrlImagePourZoomer}
                    titre="Importer votre dernière fiche de paie"></DocBox>
                    </div>

                     </div>





                     <div className="DoxBoxWrapper">
                     
                     <div className="DocBoxContainer">
                     <DocBox ImporterDocuBox={"ImporterDocuBox"} ImgContainer={"ImgContainer"}  triggerZooming={elZooming} settriggerZooming={setelZooming} UrlImagePourZoomer={UrlImagePourZoomer}
                    setUrlImagePourZoomer={setUrlImagePourZoomer}  imgScale={"imgScale"}
                    titre="Importer l'engagement de domiciliation"></DocBox>
                    </div>


                    <div className="DocBoxContainer">
                     <DocBox ImporterDocuBox={"ImporterDocuBox"} ImgContainer={"ImgContainer"}  triggerZooming={elZooming} settriggerZooming={setelZooming} UrlImagePourZoomer={UrlImagePourZoomer}
                    setUrlImagePourZoomer={setUrlImagePourZoomer}  imgScale={"imgScale"}
                    titre="Importer le devis de travaux"></DocBox>
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

export default PagePhase2CréditEslah;
























