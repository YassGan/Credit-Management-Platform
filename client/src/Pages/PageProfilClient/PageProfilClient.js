import React from 'react';
import { useState } from 'react';
import SidebarClient from '../../composants/clientSidebar/clientSidebar';
import Navbar from '../../composants/navbar/navbar';
import ProfileInformationBox from '../../composants/profile_information_box/profileInformationBox';
import TitreDuMain from '../../composants/titreduMain/titreDuMain';

import PopUpWindowModification1 from '../../composants/PopUpWindowModification1/PopUpWindowModification1'
import PopUpWindowAreYouSure from '../../composants/PopUpWindowAreYouSure/PopUpWindowAreYouSure';

import PopUpWindowDeconnexion from '../../composants/PopUpWindowDeconnexion/PopUpWindowDeconnexion';

import './PageProfilClient.css'




function PageProfilClient() {


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
  
/*

  const ConsulterFunction =(id)=>{

    //  window.Utilisateur_Consulter.nom=;
             
    var i;
              for (i in listeofusers ){
                if(  (listeofusers[i]._id)  ===id    ) {
                    
                  window.Utilisateur_Consulter.nom=listeofusers[i].name;
                  window.Utilisateur_Consulter.prenom=listeofusers[i].prnom;
                  window.Utilisateur_Consulter.mail=listeofusers[i].mail;
                  window.Utilisateur_Consulter.password=listeofusers[i].password;
                  window.Utilisateur_Consulter.profession=listeofusers[i].profession;
                  window.Utilisateur_Consulter.NumCIN=listeofusers[i].NumCIN;
                  window.Utilisateur_Consulter.NumTel=listeofusers[i].NumTel;
                  window.Utilisateur_Consulter.Adresse=listeofusers[i].Adresse;
                  window.Utilisateur_Consulter.DatedeNaissance=listeofusers[i].DatedeNaissance;
                  window.Utilisateur_Consulter.PhotoProfil=listeofusers[i].PhotoProfil;
                  window.Utilisateur_Consulter._id=id;

                  window.id_personne_modif=id;
                  console.log(window.id_personne_modif)


                }
              }
          
              navigate('/p8');

        }
        */



  return (
<div>
    <div className='containerPageProfilClient'>

        <Navbar TriggerDeconnexion={el3} setTriggerDeconnexion={setel3} photo={lienPhoto} Statut={Statut} nom={nom} prénom={prénom}  />
        <SidebarClient></SidebarClient>

            
            <div className='client_main'>
                <TitreDuMain titre={"Voir le profil"} description={"Ce sont vos informations personelles"}></TitreDuMain>


 
          
                <div  className='ModifierLinePageProfilClient' onClick={()=>{setel(!el)}}>
                    <div className='ModifierBttonPageClient'>
                      <h3> Modifier  </h3>
                    </div>
                </div>

                <ProfileInformationBox prénom={prénom} nom={nom} id={id} Statut={Statut}  date_de_naissance={date_de_naissance} date_d_inscription={date_d_inscription}
                    
                    NumTel={NumTel} photo={lienPhoto}  AdresseMail={AdresseMail}  NumCIN={NumCIN}

                    trigger={el} setTrigger={setel}>

                </ProfileInformationBox>

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

    
</div>
  );
}

export default PageProfilClient;
