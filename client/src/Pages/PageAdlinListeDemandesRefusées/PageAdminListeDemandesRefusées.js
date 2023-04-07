


import ConteneurClientsRefusées from "../../composants/conteneur_demandes_refusées/conteneur_demandes_refusées";
import Sidebar from '../../composants/sidebar/sidebar';
import Navbar from '../../composants/navbar/navbar';
import TitreduMain from '../../composants/titreduMain/titreDuMain'
import PopUpWindowAjout from "../../composants/PopUpWindowAjout/PopUpWindowAjout";
import { useState } from "react";
import PopUpWindowDeconnexion from "../../composants/PopUpWindowDeconnexion/PopUpWindowDeconnexion"



const PageAdminListeClients =()=>{

    const [AffichAjout,setAffichAjout]=useState(false);
    const[el3,setel3]=useState(false)







    const [Statut,setStatut]=useState("Administrateur")

    const [id,setId]=useState("@1112")
    const [prénom,setPrénom]=useState(localStorage.getItem("prenomSessionAdmin"))
    const [nom,seNom]=useState(localStorage.getItem("nomSessionAdmin"))
    const [date_de_naissance,setdate_de_naissance]=useState(localStorage.getItem("DatedeNaissanceSessionAdmin"))
    const [date_d_inscription,setdate_d_inscription]=useState("22/02/2022")
    const [NumTel,setNumTel]=useState( localStorage.getItem("NumTelSessionAdmin"))
    const [AdresseMail,setAdresseMail]=useState( localStorage.getItem("mailSessionAdmin"))
    const [NumCIN,setNumCIN]=useState(localStorage.getItem("NumCINSessionAdmin"))
    const [lienPhoto,setLienPhoto]=useState(localStorage.getItem("PhotoProfilSessionAdmin"))





    
    
    return(
      
        <>

      <div className="PageAdminListeClientscontainer">
     
        <Sidebar></Sidebar>
        <Navbar TriggerDeconnexion={el3} setTriggerDeconnexion={setel3}  photo={lienPhoto} nom={nom} prénom={prénom} Statut={"Administrateur"}></Navbar>
       
        <div className="PageAdminListeClientsConteneur">
            <div className="titre_conteneur">
                <TitreduMain titre={"Voir les demandes de crédit"} description={"Ceci est une représentation des demandes"}></TitreduMain>
            </div>
            <ConteneurClientsRefusées  triggerAjout={AffichAjout} setTriggerAjout={setAffichAjout}></ConteneurClientsRefusées>
        </div>
        
 

        <div>
<PopUpWindowAjout  triggerAjout={AffichAjout} setTriggerAjout={setAffichAjout}></PopUpWindowAjout>

</div>


        </div>

        
        <div>
        <PopUpWindowDeconnexion lienPhotoo={lienPhoto} TriggerDeconnexion={el3} setTriggerDeconnexion={setel3}></PopUpWindowDeconnexion>
    </div>
        </>
    )
}

export default PageAdminListeClients;