import React from 'react';
import { useState } from 'react';
import Sidebar from '../../composants/sidebar/sidebar';
import Navbar from '../../composants/navbar/navbar';
import Main from '../../composants/main/main';
import './AdminDashboard.css'
import PopUpWindowModification1 from '../../composants/PopUpWindowModification1/PopUpWindowModification1';
import PopUpWindowAreYouSure from '../../composants/PopUpWindowAreYouSure/PopUpWindowAreYouSure';
import PopUpWindowDeconnexion from '../../composants/PopUpWindowDeconnexion/PopUpWindowDeconnexion';
import TitreDuMain from '../../composants/titreduMain/titreDuMain';
import Axios from 'axios';
import { useEffect } from 'react';

function Admin_dahboard(props) {


  const[el,setel]=useState(false)
  const[el2,setel2]=useState(false)
  const[el3,setel3]=useState(false)

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

  



  const [nbClients,setnbClients]=useState(13)
  const [nbDemandes,setnbDemandes]=useState(3)


  




  const [listeClientts, setlisteClientts]=useState([]);


  useEffect(()=>{
      Axios.get("http://localhost:3001/getUsers").then((response)=>{
        setlisteClientts(response.data)
      })
        },[])



        const [listeDemndees, setlisteDemndees]=useState([]);


        useEffect(()=>{
            Axios.get("http://localhost:3001/getDemandes").then((response)=>{
              setlisteDemndees(response.data)
            })
              },[])
      










  return (
<div>
    <div className='Admin_Dashboardcontainer'>

        <Navbar  TriggerDeconnexion={el3} setTriggerDeconnexion={setel3}  photo={lienPhoto}  Statut={Statut} nom={localStorage.getItem("prenomSessionAdmin")} prénom={localStorage.getItem("nomSessionAdmin")}  />
       
        <Sidebar></Sidebar>
        <div className='ModifierBttonLine'  onClick={()=>{setel(true)}}>
          <div className='ButtonModifier'>
         <span> Modifier  </span>
          </div>
        </div>
        <Main trigger={el} setTrigger={setel}   nbClients={listeClientts.length} nbDemandes={listeDemndees.length} nbMessages={"Pas encore"}></Main>

        </div>

    

    <div>
      <PopUpWindowModification1 trigger={el} setTrigger={setel} trigger2={el2} setTrigger2={setel2} ></PopUpWindowModification1>
    </div>

    <div>
        <PopUpWindowAreYouSure trigger={el} setTrigger={setel} trigger2={el2} setTrigger2={setel2}></PopUpWindowAreYouSure>
    </div>

    
    <div>
        <PopUpWindowDeconnexion lienPhotoo={lienPhoto} TriggerDeconnexion={el3} setTriggerDeconnexion={setel3}></PopUpWindowDeconnexion>
    </div>

</div>
  );
}

export default Admin_dahboard;
