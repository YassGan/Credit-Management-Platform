import './PageDemandeOuverteparClient.css'

import { useState } from 'react';


import Timeline from "../../composants/timeline/timeline";
import ClientSideBar from '../../composants/clientSidebar/clientSidebar';
import Navbar from '../../composants/navbar/navbar';
import TitreDuMain from "../../composants/titreduMain/titreDuMain";
import { useEffect } from 'react';
import axios from 'axios';
//import PopUpWindowDemande1 from '../../composants/PopUpWindowsDemande/PopUpWindowDemande1';



import PopUpWindowDemande1 from '../../composants/PopUpWindowsDemande/PopUpWindowDemande1';
import PopUpWindowDemande2 from '../../composants/PopUpWindowsDemande/PopUpWindowDemande2';
import PopUpWindowDemande3 from '../../composants/PopUpWindowsDemande/PopUpWindowDemande3';
import PopUpWindowDemande4 from '../../composants/PopUpWindowsDemande/PopUpWindowDemande4';
import PopUpWindowDemande5 from '../../composants/PopUpWindowsDemande/PopUpWindowDemande5';
import PopUpWindowDemande6 from '../../composants/PopUpWindowsDemande/PopUpWindowDemande6';

import PopUpWindowDeconnexion from '../../composants/PopUpWindowDeconnexion/PopUpWindowDeconnexion';







const PageDemandeOuverteparClient=()=>{



    

    const [tabToutesLesPhase,settabToutesLesPhase]=useState([]);



    useEffect(()=>{
        axios.get("http://localhost:3001/getPhases").then((response)=>{
            settabToutesLesPhase(response.data)
        })
          },[])


var indice;


const [TabdDmandes,setTabdDmandes]=useState([]);
useEffect(()=>{
    axios.get("http://localhost:3001/getDemandes").then((response)=>{
        setTabdDmandes(response.data)
    })
      },[])






      let tabMiseDemandes=[];
var kio;
      for(kio in TabdDmandes){
          if(TabdDmandes[kio].id_client_associé==localStorage.getItem("IdSessionClient")){
            tabMiseDemandes.push(TabdDmandes[kio])

            console.log("Tro")
          }
      }












useEffect(()=>{
    axios.get("http://localhost:3001/getPhases").then((response)=>{
        settabToutesLesPhase(response.data)
    })
      },[])




  

    
 let retrievingDataFrom_tabDemandesC = JSON.parse(localStorage.getItem("tabDemandesC"));
 
 console.log("Le contenu du tabDemandesC apres retrieving")

 console.log(retrievingDataFrom_tabDemandesC)

    const[el3,setel3]=useState(false)






       

    const [Pop1,setPop1]=useState(false);
    const [Pop2,setPop2]=useState(false);
    const [Pop3,setPop3]=useState(false);
    const [Pop4,setPop4]=useState(false);
    const [Pop5,setPop5]=useState(false);
    const [Pop6,setPop6]=useState(false);




   const [nom,setNom]=useState(localStorage.getItem("nomSessionCLient"))
   const [prénom,setPréNom]=useState(localStorage.getItem("nomSessionCLient"))
   const [photoProfilClient,setphotoProfilClient]=useState(localStorage.getItem("PhotoProfilSessionClient"))

   const [Statut,setStatut]=useState("Client")






    return(

<>
<div  className="PageDemandeOuvertParClientcontainer">
        
        <div className="PageDemandeMainContainer">
           <div className="titre_container "> <TitreDuMain titre={"Voir vos demandes"} description={"Vous pouvez déposer une nouvelle demande en cliquant sur nouvelle demande" }></TitreDuMain>  </div>
           <div className="bouton_container">
               <div onClick={()=>{setPop1(true)}} className="bouton">
                   <h4> Nouvelle demande </h4>
               </div>
           </div>



{/* mapping though timline elements or demande elements */}





{



tabMiseDemandes.map((e)=>{

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








   { /*       <div>

            <div className="time_cont_container">
                <div className="time_contt"> 
                    <Timeline statut_demande={": Validée"}  numéro={1} type={"Crédit auto"} date_premier_dépot={"15/02/2022"} phase1={"phase_validée"} phase2={"phase_validée"} phase3={"phase_validée"} phase4={"phase_validée"} phase5={"phase_validée"}>
                        </Timeline> 
                </div>
            </div>
          


          
            <div className="time_cont_container">
                <div className="time_contt"> 
                    <Timeline statut_demande={": Statut en cours"}  numéro={2} type={"Crédit auto"} date_premier_dépot={"15/02/2022"} phase1={"phase_validée"} phase2={"phase_validée"} phase3={"phase_refusée"} phase4={"phase_pas_encore"} phase5={"phase_pas_encore"}>
                        </Timeline> 
                </div>
            </div>


</div> */}

        </div>



<ClientSideBar></ClientSideBar>
<Navbar nom={nom} prénom={prénom}  TriggerDeconnexion={el3} setTriggerDeconnexion={setel3} photo={localStorage.getItem("PhotoProfilSessionClient")} Statut={Statut}></Navbar>













</div>

<div>
    <PopUpWindowDemande1  triggerdemande1={Pop1}   settriggerdemande1={setPop1} triggerdemande2={Pop2}   settriggerdemande2={setPop2}></PopUpWindowDemande1>
</div>

<div> 
    <PopUpWindowDemande2   triggerdemande2={Pop2}   settriggerdemande2={setPop2} triggerdemande3={Pop3}   settriggerdemande3={setPop3} ></PopUpWindowDemande2>
</div>

<div>
<PopUpWindowDemande3 triggerdemande3={Pop3}   settriggerdemande3={setPop3}  triggerdemande4={Pop4}   settriggerdemande4={setPop4} > </PopUpWindowDemande3>
</div>

<div>
<PopUpWindowDemande4 triggerdemande4={Pop4}   settriggerdemande4={setPop4}  triggerdemande5={Pop5}   settriggerdemande5={setPop5}   > </PopUpWindowDemande4>
</div>

<div>
<PopUpWindowDemande5 triggerdemande5={Pop5}   settriggerdemande5={setPop5}  triggerdemande6={Pop6}   settriggerdemande6={setPop6}   > </PopUpWindowDemande5>
</div>

<div>
<PopUpWindowDemande6 triggerdemande6={Pop6}   settriggerdemande6={setPop6}   > </PopUpWindowDemande6>
</div>


<div>
        <PopUpWindowDeconnexion TriggerDeconnexion={el3} setTriggerDeconnexion={setel3}></PopUpWindowDeconnexion>
    </div>


</>



    )
}


export default PageDemandeOuverteparClient;