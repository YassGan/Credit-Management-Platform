import Sidebar from '../../composants/sidebar/sidebar';
import Navbar from '../../composants/navbar/navbar';
import Timeline from '../../composants/timeline/timeline'
import ProfileInformationBox from '../../composants/profile_information_box/profileInformationBox'
import { useState,useEffect } from 'react';
import PopUpWindowModification1 from '../../composants/PopUpWindowModification1/PopUpWindowModification1';
import PopUpWindowAreYouSure from '../../composants/PopUpWindowAreYouSure/PopUpWindowAreYouSure';
import PopUpWindowAjout from '../../composants/PopUpWindowAjout/PopUpWindowAjout';


import './PageClientOuverteparAdmin.css'
import axios from 'axios';
import App from '../../App';
import { Link } from 'react-router-dom';


const PageClieOuverteparAdmin=()=>{



    const [TABDEMANDES,SETTABDEMANDES]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3001/getDemandes").then((response)=>{
            SETTABDEMANDES(response.data)
        })
          },[])

          console.log(TABDEMANDES)
          console.log("WIndow "+window.id_personne_timeline )



let tabTime=[];


          const [tabClientConsluté]=useState([])
          ///////////////////////////////////////////
          //////////////////////////////////////
          ////////////////////////////////
          
          
          var kj;
          for(kj in TABDEMANDES){
              if(TABDEMANDES[kj].id_client_associé===window.id_personne_timeline){
                tabTime.push(TABDEMANDES[kj])
            }
          }
          








    const [tabToutesLesPhase,settabToutesLesPhase]=useState([])


    useEffect(()=>{
        axios.get("http://localhost:3001/getPhases").then((response)=>{
            settabToutesLesPhase(response.data)
        })
          },[])








    const [el,setel]=useState(false);
    const [el2,setel2]=useState(false);

  
  


  
  
    const [id,setId]=useState()
    const [nom,seNom]=useState(localStorage.getItem("window.Utilisateur_Consulter.nom"))
    const [prénom,setPrénom]=useState(localStorage.getItem("window.Utilisateur_Consulter.prenom"))
  
  
    const [Statut,setStatut]=useState("Client")
  
    const [date_de_naissance,setdate_de_naissance]=useState(localStorage.getItem("window.Utilisateur_Consulter.DatedeNaissance"))
    const [date_d_inscription,setdate_d_inscription]=useState("test")
    const [NumTel,setNumTel]=useState(localStorage.getItem("window.Utilisateur_Consulter.NumTel"))
    const [AdresseMail,setAdresseMail]=useState(localStorage.getItem("window.Utilisateur_Consulter.mail"))
    const [NumCIN,setNumCIN]=useState(localStorage.getItem("window.Utilisateur_Consulter.NumCIN"))
    const [lienPhoto,setlienPhoto]=useState(localStorage.getItem("window.Utilisateur_Consulter.PhotoProfil"))


    const [lienPhotoAdmin,setlienPhotoAdmin]=useState(localStorage.getItem("PhotoProfilSessionClient"))
    const [nomAdmin,setnomAdmin]=useState(localStorage.getItem("nomSessionClient"))
    const[prenomAdmin,setprnomAdmin]=useState(localStorage.getItem("prenomSessionClient"))
  

  

const ContactClient = ()=>{
   // alert(localStorage.getItem("IdSessionClientMessage"))
}






    return(
        <div className='PageClientOuverteparAdmincontainer'>
        <Navbar   photo={localStorage.getItem("PhotoProfilSessionAdmin")} prénom={localStorage.getItem("prenomSessionAdmin")} nom={localStorage.getItem("nomSessionAdmin")} Statut={"Administrateur"}></Navbar>
        <Sidebar></Sidebar>


        <div className='MainPageClientOuverteparAdmin'>

            <div className='profile_info_component_container'>
 
            <ProfileInformationBox prénom={prénom} nom={nom} id={id} Statut={Statut}  date_de_naissance={date_de_naissance} date_d_inscription={date_d_inscription}
                    
                    NumTel={NumTel}  AdresseMail={AdresseMail}  NumCIN={NumCIN}

                    trigger={el} setTrigger={setel} photo={lienPhoto} >

                </ProfileInformationBox>


            </div >

            <div className='contacter_button_container'>
               
               <Link to='/p26'>
                <div onClick={ContactClient} className='button_contacter'>
                    <h4> Contacter</h4>

                </div>
                </Link>
            
            </div>

            <div className='timeline_component_container'>









            {


tabTime.map((e)=>{
    let indice;


  for (indice in tabToutesLesPhase){
    if(e.id_phase1==tabToutesLesPhase[indice].NumPhase){
        var etatPhase1 =tabToutesLesPhase[indice].Statut
    }
    if(e.id_phase2==tabToutesLesPhase[indice].NumPhase){
        var etatPhase2 =tabToutesLesPhase[indice].Statut
    }
    if(e.id_phase3==tabToutesLesPhase[indice].NumPhase){
        var etatPhase3 =tabToutesLesPhase[indice].Statut
    }
    if(e.id_phase4==tabToutesLesPhase[indice].NumPhase){
        var etatPhase4 =tabToutesLesPhase[indice].Statut
    }
    if(e.id_phase5==tabToutesLesPhase[indice].NumPhase){
        var etatPhase5 =tabToutesLesPhase[indice].Statut
        var montant =e.durée*e.mensualité

    }
  }
    return(
      <>

                        <div  className="time_cont_container">
                            <div className="time_contt"> 
                                <Timeline  idDemande={e.id_demande} idPhase1={e.id_phase1}   idPhase2={e.id_phase2}  idPhase3={e.id_phase3}  idPhase4={e.id_phase4}  idPhase5={e.id_phase5}    statut_demande= {e.statutGlobal} mensualité={e.mensualité} montant={montant} durée={e.durée} type={e.type_demande} date_premier_dépot={e.Date_de_creation} phase1="phase_validée" phase2={etatPhase2} phase3={etatPhase3} phase4={etatPhase4} phase5={etatPhase5}>
                                </Timeline> 

                            </div>
                        </div>
        </>

    )
})

}





































            </div>


        </div>




<div>
        <div>
      <PopUpWindowModification1 trigger2={el2} setTrigger2={setel2} trigger={el} setTrigger={setel}></PopUpWindowModification1>
    </div>


<div>
  <PopUpWindowAreYouSure trigger={el} setTrigger={setel} trigger2={el2} setTrigger2={setel2}></PopUpWindowAreYouSure>

</div>
</div>






        </div>








    )
}

export default PageClieOuverteparAdmin;