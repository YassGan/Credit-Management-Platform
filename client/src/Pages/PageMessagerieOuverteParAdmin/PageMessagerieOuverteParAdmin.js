


import Navbar from "../../composants/navbar/navbar";
import Sidebar from "../../composants/sidebar/sidebar";
import ConteneurDemandes from "../../composants/conteneur_demandes/conteneursDemandes";
import TitreDuMain from "../../composants/titreduMain/titreDuMain";
import PopUpWindowDeconnexion from '../../composants/PopUpWindowDeconnexion/PopUpWindowDeconnexion';


import { useState } from "react";
import ConteneursMessagesOuvertClient from "../../composants/conteneurMessagesOuvertClient/conteneurMessagesOuvertClient";

import ConteneursMessagesOuvertAdmin from "../../composants/conteneurMessagesOuvertAdmin/conteneurMessageOuvertAdmin"







const PageAdminListeDemandes=()=>{
 
    const[el3,setel3]=useState(false)


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







    return(
        <div className="PageAdminListeDemandesContainer">
            <Navbar TriggerDeconnexion={el3} setTriggerDeconnexion={setel3}  photo={lienPhoto}  Statut={Statut} nom={localStorage.getItem("prenomSessionAdmin")} prénom={localStorage.getItem("nomSessionAdmin")} ></Navbar>
            <Sidebar></Sidebar>

            <div className="titreduMainContainer">
                <TitreDuMain titre={"Voir les messages avec le client" } description={"Voici les messages  "}></TitreDuMain>
               <div className="conteneurclient_container"></div> 





               <div className="MessagerieWrapper">
                   

                   <div className="MessagerieContainer">

               <ConteneursMessagesOuvertAdmin></ConteneursMessagesOuvertAdmin>

</div>

</div>

            </div>


            
    
    <div>
        <PopUpWindowDeconnexion lienPhotoo={lienPhoto} TriggerDeconnexion={el3} setTriggerDeconnexion={setel3}></PopUpWindowDeconnexion>
    </div>

        </div>
    )
}

export default PageAdminListeDemandes;