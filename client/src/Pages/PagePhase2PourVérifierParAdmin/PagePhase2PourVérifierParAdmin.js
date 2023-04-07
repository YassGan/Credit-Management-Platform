import "../PagePhasesUploader/PagePhasesUploader.css"



import React from 'react';
import { useState,useEffect } from 'react';
import axios from "axios";
import Sidebar from '../../composants/sidebar/sidebar';
import Navbar from '../../composants/navbar/navbar';
import ProfileInformationBox from '../../composants/profile_information_box/profileInformationBox';
import TitreDuMain from '../../composants/titreduMain/titreDuMain';

import PopUpWindowAreYouSure from '../../composants/PopUpWindowAreYouSure/PopUpWindowAreYouSure';

import PopUpWindowDeconnexion from '../../composants/PopUpWindowDeconnexion/PopUpWindowDeconnexion';

import ImageZooming from "../../composants/ImageZooming/ImageZooming";


import DocBox from "../../composants/DocBox/DocBox";

import DoxBoxVérification from "../../composants/DocBoxVérification/DocBoxVérification"

import ValidatoinBox from "../../composants/ValidationBox/ValidationBox";

import './PagePhase2PourVérifierParAdmin.css'

import ValidaitonBoxPetit from "../../composants/ValidationBoxPetit/ValidationBoxPetit";




import Pending_Img from '../../composants/images/Pending.png'
import Validate from  '../../composants/images/Validate.png'
import Refuse from '../../composants/images/RefuseAdmin.png'






function PagePhasesUploader() {

    localStorage.setItem("UrlCINRecto","https://previews.123rf.com/images/cthoman/cthoman1507/cthoman150703921/42751294-une-illustration-de-bande-dessin%C3%A9e-d-un-document-vierge-debout-.jpg")
    localStorage.setItem("UrlCINRectoStatut","Pas encore")

    localStorage.setItem("UrlCINVerso","https://previews.123rf.com/images/cthoman/cthoman1507/cthoman150703921/42751294-une-illustration-de-bande-dessin%C3%A9e-d-un-document-vierge-debout-.jpg")
    localStorage.setItem("UrlCINVersoStatut","Pas encore")




    localStorage.setItem("Justificatifdedomicile","https://previews.123rf.com/images/cthoman/cthoman1507/cthoman150703921/42751294-une-illustration-de-bande-dessin%C3%A9e-d-un-document-vierge-debout-.jpg")
    localStorage.setItem("UrlJustifDomicileStatut","Pas encore")

    
    
    localStorage.setItem("BulleteinPaie1","https://previews.123rf.com/images/cthoman/cthoman1507/cthoman150703921/42751294-une-illustration-de-bande-dessin%C3%A9e-d-un-document-vierge-debout-.jpg")
    localStorage.setItem("UrlBulletein1Statut","Pas encore")                    





    localStorage.setItem("BulleteinPaie2","https://previews.123rf.com/images/cthoman/cthoman1507/cthoman150703921/42751294-une-illustration-de-bande-dessin%C3%A9e-d-un-document-vierge-debout-.jpg")
    localStorage.setItem("UrlBulletein2Statut","Pas encore")






    localStorage.setItem("BulleteinPaie3","https://previews.123rf.com/images/cthoman/cthoman1507/cthoman150703921/42751294-une-illustration-de-bande-dessin%C3%A9e-d-un-document-vierge-debout-.jpg")
    localStorage.setItem("UrlBulletein3Statut","Pas encore")






    localStorage.setItem("Facture","https://previews.123rf.com/images/cthoman/cthoman1507/cthoman150703921/42751294-une-illustration-de-bande-dessin%C3%A9e-d-un-document-vierge-debout-.jpg")
    localStorage.setItem("FactureStatut","Pas enocre")


    




 
  const [el,setel]=useState(false);
  const [el2,setel2]=useState(false);

  const[el3,setel3]=useState(false)

  const[elZooming,setelZooming]=useState(false)
  const[UrlImagePourZoomer,setUrlImagePourZoomer]=useState("")





  const [Statut,setStatut]=useState("Administrateur")

  const [id,setId]=useState("@1112")
  const [prénom,setPrénom]=useState(localStorage.getItem("prenomSessionAdmin"))
  const [nom,seNom]=useState(localStorage.getItem("nomSessionAdmin"))
  const [date_de_naissance,setdate_de_naissance]=useState(localStorage.getItem("nomCLient"))
  const [date_d_inscription,setdate_d_inscription]=useState("22/02/2022")
  const [NumTel,setNumTel]=useState(localStorage.getItem("NumTelSessionClient"))
  const [AdresseMail,setAdresseMail]=useState(localStorage.getItem("mailSessionClient"))
  const [NumCIN,setNumCIN]=useState(localStorage.getItem("NumCINSessionClient"))
  const [lienPhoto,setLienPhoto]=useState(localStorage.getItem("PhotoProfilSessionClient"))
  


  
    const [tabTousLesDocumentsVerifAdmin,settabTousLesDocuemntsVerifAdmin]=useState([]);



    useEffect(()=>{
        axios.get("http://localhost:3001/getDocuments").then((response)=>{
            settabTousLesDocuemntsVerifAdmin(response.data)
        })
          },[])

          console.log(tabTousLesDocumentsVerifAdmin)




    const [tabTouteslesDemandes,settabTouteslesDemandes]=useState([]);


    useEffect(()=>{
            axios.get("http://localhost:3001/getDemandes").then((response)=>{
                settabTouteslesDemandes(response.data)
            })
              },[])
    
              console.log(tabTouteslesDemandes)



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









        var iDD;      
        for (iDD in tabTouteslesDemandes){
            if(tabTouteslesDemandes[iDD].id_phase2===localStorage.getItem("idPhase2Demande")){
                localStorage.setItem("StatutGlobalDemande",tabTouteslesDemandes[iDD].statutGlobal)
                localStorage.setItem("idDemandeOuverteVerif",tabTouteslesDemandes[iDD]._id)

            }
        }



    







          var iRe;
          for (iRe in tabTousLesDocumentsVerifAdmin){
              if (tabTousLesDocumentsVerifAdmin[iRe].idPhaseAssociée===localStorage.getItem("idPhase2Demande"))
              {
            if(tabTousLesDocumentsVerifAdmin[iRe].typeDocument==="RectoDocumentCIN"){
                console.log("Document Recto CIN trouvé")
                localStorage.setItem("UrlCINRecto",tabTousLesDocumentsVerifAdmin[iRe].Url)
                localStorage.setItem("UrlCINRectoStatut",tabTousLesDocumentsVerifAdmin[iRe].statutDoc)
                localStorage.setItem("_idCINRectoStatut",tabTousLesDocumentsVerifAdmin[iRe]._id)

            }




            if(tabTousLesDocumentsVerifAdmin[iRe].typeDocument==="VersoDocumentCIN"){
                    console.log("Document Verso CIN trouvé")
                    localStorage.setItem("UrlCINVerso",tabTousLesDocumentsVerifAdmin[iRe].Url)
                    localStorage.setItem("_idCINVersoStatut",tabTousLesDocumentsVerifAdmin[iRe]._id)
                    localStorage.setItem("UrlCINVersoStatut",tabTousLesDocumentsVerifAdmin[iRe].statutDoc)
                    
                }


                if(tabTousLesDocumentsVerifAdmin[iRe].typeDocument==="Justificatif de domicile"){
                    console.log("Document Justificatif de domicile trouvé")
                    localStorage.setItem("Justificatifdedomicile",tabTousLesDocumentsVerifAdmin[iRe].Url)
                    localStorage.setItem("_idJustifDomicile",tabTousLesDocumentsVerifAdmin[iRe]._id)
                    localStorage.setItem("UrlJustifDomicileStatut",tabTousLesDocumentsVerifAdmin[iRe].statutDoc)
                   
                }



                if(tabTousLesDocumentsVerifAdmin[iRe].typeDocument==="Bulletin de paie n°1 "){
                    console.log("Bulletein de paie n°1 trouvé")
                    localStorage.setItem("BulleteinPaie1",tabTousLesDocumentsVerifAdmin[iRe].Url)
                    localStorage.setItem("_idBulletein1",tabTousLesDocumentsVerifAdmin[iRe]._id)
                    localStorage.setItem("UrlBulletein1Statut",tabTousLesDocumentsVerifAdmin[iRe].statutDoc)                    
                }

                if(tabTousLesDocumentsVerifAdmin[iRe].typeDocument==="Bulletin de paie n°2 "){
                    console.log("Bulletein de paie n°2 trouvé")
                    localStorage.setItem("BulleteinPaie2",tabTousLesDocumentsVerifAdmin[iRe].Url)
                    localStorage.setItem("_idBulletein2",tabTousLesDocumentsVerifAdmin[iRe]._id)
                    localStorage.setItem("UrlBulletein2Statut",tabTousLesDocumentsVerifAdmin[iRe].statutDoc)


                    
                }
                if(tabTousLesDocumentsVerifAdmin[iRe].typeDocument==="Bulletin de paie n°3 "){
                    console.log("Bulletein de paie n°3 trouvé")
                    localStorage.setItem("BulleteinPaie3",tabTousLesDocumentsVerifAdmin[iRe].Url)
                    localStorage.setItem("_idBulletein3",tabTousLesDocumentsVerifAdmin[iRe]._id)
                    localStorage.setItem("UrlBulletein3Statut",tabTousLesDocumentsVerifAdmin[iRe].statutDoc)


                    
                }
                if(tabTousLesDocumentsVerifAdmin[iRe].typeDocument==="justificatif de dépense "){
                    console.log("justificatif de dépense trouvé")
                    console.log(tabTousLesDocumentsVerifAdmin[iRe].Url)
                    localStorage.setItem("Facture",tabTousLesDocumentsVerifAdmin[iRe].Url)
                    localStorage.setItem("FactureStatut",tabTousLesDocumentsVerifAdmin[iRe].statutDoc)
                    localStorage.setItem("_idJustifDépense",tabTousLesDocumentsVerifAdmin[iRe]._id)

                    console.log("Statut Facture est "+localStorage.getItem("FactureStatut"))


                    
                }
    
            }
          }

          console.log(localStorage.getItem("UrlCINRecto"))
          console.log(localStorage.getItem("UrlCINVerso"))
          console.log(localStorage.getItem("Justificatifdedomicile"))
          console.log(localStorage.getItem("BulleteinPaie1"))
          console.log(localStorage.getItem("BulleteinPaie2"))
          console.log(localStorage.getItem("BulleteinPaie3"))
          console.log(localStorage.getItem("Facture"))

          console.log(localStorage.getItem("_idCINRectoStatut"))
          console.log(localStorage.getItem("_idCINVersoStatut"))
          console.log(localStorage.getItem("_idJustifDomicile"))
          console.log(localStorage.getItem("_idBulletein1"))
          console.log(localStorage.getItem("_idBulletein2"))
          console.log(localStorage.getItem("_idBulletein3"))
          console.log(localStorage.getItem("_idJustifDépense"))


      const  BoutonVérifierValider=()=>{
         // alert("hello")
      }



  return (
<div>
    <div className='containerPageProfilClient'>

        <Navbar TriggerDeconnexion={el3} setTriggerDeconnexion={setel3} photo={lienPhoto} Statut={Statut} nom={nom} prénom={prénom}  />
        <Sidebar></Sidebar>

            
            <div className='client_main'>
                <TitreDuMain titre={"Phase 2 : Dépot de la demande avec les documents justificatifs "} description={"Dans cette phase vous devez remplir le formulaire de la demande et importer quelques documents qui sont nécessaires dans le processus. "}></TitreDuMain>
                  
                 <div className="ListeDocumentesWrapper">
                  <div className="listeDocumentsContainer">
                   <div className="listeDocuments">
                    <ul >
                    <li>Pièce d'identité en cours de validité : passeport ou carte d'identité, titre de séjour.  </li>
                    <li>Un justificatif de domicile de moins de 3 mois :(quittance de loyer, facture d'énergie)  </li>
                    <li>Un justificatif de revenu :(3 derniers bulletins de salaires)  </li>
                    <li>Un justificatif de dépense :(Facture pro forma délivrée par le Concessionnaire, s'il s'agit d'une voiture neuve
ou une promesse de vente et photocopie de la carte grise, s'il s'agit d'une voiture d'occasion.)  </li>



                     </ul>
                     </div>
                     </div>
                     </div>




                     <div className="TitreContainer" >
                          <h2 className="fonting"> Changez le statut global de la phase </h2>
                     </div>

                    
                    
                     <div className="TitreContainer2" >
                         <h2 className={localStorage.getItem("StatutPhase")} >Statut : {localStorage.getItem("StatutPhase")} </h2>
                     </div>




                     <ValidatoinBox fonctionValiderGlo="ValiderDemande" fonctionRefuserGlo="RefuserDemande"  fonctionEnCoursGlo="EnCoursDemande"></ValidatoinBox>
                     



                     <div className="DoxBoxWrapper">

                     <div className="DocBoxContainerVerif colorin">
                     <DoxBoxVérification statutDoc={localStorage.getItem("UrlCINRectoStatut")} UrlDocument={localStorage.getItem("UrlCINRecto")}  titre={"Recto CIN : "+localStorage.getItem("UrlCINRectoStatut")} photoimgBoxContainerScale="imgBoxContainerDemandeCIN"  photoimgBoxScale="imgScaleCIN" ></DoxBoxVérification>
                  
              

                         <ValidaitonBoxPetit fonctionValider="ValiderRectoCIN" fonctionRefuser="RefuserRectoCIN" ></ValidaitonBoxPetit>

                    </div>




                    <div className="DocBoxContainerVerif">
                     <DoxBoxVérification statutDoc={localStorage.getItem("UrlCINVersoStatut")} UrlDocument={localStorage.getItem("UrlCINVerso")}titre={"Verso CIN : "+localStorage.getItem("UrlCINVersoStatut")}  photoimgBoxContainerScale="imgBoxContainerDemandeCIN"  photoimgBoxScale="imgScaleCIN" ></DoxBoxVérification>

                    <ValidaitonBoxPetit   fonctionValider="ValiderVersoCIN" fonctionRefuser="RefuserVersoCIN" ></ValidaitonBoxPetit>

                    </div>

                     </div>



                     <div className="DoxBoxWrapper">
                     
                     <div className="DocBoxContainer">
                     <DoxBoxVérification statutDoc={localStorage.getItem("UrlJustifDomicileStatut")} UrlDocument={localStorage.getItem("Justificatifdedomicile")} titre={"Justificatif domicile : "+localStorage.getItem("UrlJustifDomicileStatut")}  photoimgBoxContainerScale="imgBoxContainerDemandeDocumantNormal"  photoimgBoxScale="imgScaleNormalDocument" photoDemandeBoxScale=""></DoxBoxVérification>
                     <ValidaitonBoxPetit   fonctionValider="ValiderJustifDomicile" fonctionRefuser="RefuserJustifDomicile" ></ValidaitonBoxPetit>

                    
                    </div>

                    <div className="DocBoxContainer">
                     <DoxBoxVérification statutDoc={localStorage.getItem("UrlBulletein1Statut")} UrlDocument={localStorage.getItem("BulleteinPaie1")}  titre={"Bulletein de paie 1 : "+localStorage.getItem("UrlBulletein1Statut")} photoimgBoxContainerScale="imgBoxContainerDemandeDocumantNormal"  photoimgBoxScale="imgScaleNormalDocument" photoDemandeBoxScale=""></DoxBoxVérification>
                     <ValidaitonBoxPetit   fonctionValider="ValiderBulletein1" fonctionRefuser="RefuserBulletein1" ></ValidaitonBoxPetit>

                   
                    </div>
                  
                              

                     </div>

    




                     <div className="DoxBoxWrapper">
                     
                     <div className="DocBoxContainer">
                     <DoxBoxVérification  statutDoc={localStorage.getItem("UrlBulletein2Statut")}  UrlDocument={localStorage.getItem("BulleteinPaie2")} titre={"Bulletein de paie 2 : "+localStorage.getItem("UrlBulletein2Statut")} photoimgBoxContainerScale="imgBoxContainerDemandeDocumantNormal"  photoimgBoxScale="imgScaleNormalDocument" photoDemandeBoxScale=""></DoxBoxVérification>
                     <ValidaitonBoxPetit   fonctionValider="ValiderBulletein2" fonctionRefuser="RefuserBulletein2" ></ValidaitonBoxPetit>

                    </div>

                    <div className="DocBoxContainer">
                     <DoxBoxVérification  statutDoc={localStorage.getItem("UrlBulletein3Statut")}  UrlDocument={localStorage.getItem("BulleteinPaie3")}  titre={"Bulletein de paie 3 : "+localStorage.getItem("UrlBulletein3Statut")} photoimgBoxContainerScale="imgBoxContainerDemandeDocumantNormal"  photoimgBoxScale="imgScaleNormalDocument" photoDemandeBoxScale=""></DoxBoxVérification>
                     <ValidaitonBoxPetit   fonctionValider="ValiderBulletein3" fonctionRefuser="RefuserBulletein3" ></ValidaitonBoxPetit>

                    </div>
                  
                     </div>



                     <div className="DoxBoxWrapper">
                     
                     <div className="DocBoxContainer">
                     <DoxBoxVérification  statutDoc={localStorage.getItem("FactureStatut")} UrlDocument={localStorage.getItem("Facture")}  titre={"Justificatif dépense : "+localStorage.getItem("FactureStatut")} photoimgBoxContainerScale="imgBoxContainerDemandeDocumantNormal"  photoimgBoxScale="imgScaleNormalDocument" photoDemandeBoxScale=""></DoxBoxVérification>
                     <ValidaitonBoxPetit   fonctionValider="ValiderJustifDépense" fonctionRefuser="RefuserJustifDépense" ></ValidaitonBoxPetit>

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
























