


import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import PageProfilClient from './Pages/PageProfilClient/PageProfilClient';
import Admin_dahboard from './Pages/Pages_Admin_Dahboard/Admin_Dashboard';
import PageAdminListeDemandes from './Pages/PageAdminListeDemandes/PageAdminListeDemandes';
import PageInscription from './Pages/Page_Inscription1/PageInscription'
import PageInscriptiontwo from './Pages/Page_inscription2/PageInscriptiontwo'
import PageConnexion from './Pages/Page_connexion/PageConnexion'
import PageClieOuverteparAdmin from './Pages/PageClientOuverteparAdmin/PageClientOuverteparAdmin';
import PageDemandeOuverteparClient from './Pages/PageDemandeOuverteparClient/PageDemandeOuverteparClient';
import PageAdminListeClients from './Pages/PageAdminListeClients/PageAdminListeClients';
import PagePrincipale from './Pages/Page_principale/PagePrincipale';
import Page_NotFound from './Pages/Page_NotFound/Page_NotFound';
import PageSuccesInscription from  './Pages/PageSuccesInscription/PageSuccesInscription'
import PageInscriptionFinale from './Pages/PageInscriptionFinale/PageInscriptionFinale';
import PagePhasesUploader from './Pages/PagePhasesUploader/PagePhasesUploader';

import PagePhasesUploaderVerif from './Pages/PagePhaseUploaderVerif/PagePhaseUploaderVerif';

import PagePhase2 from './Pages/PagePhase2/PagePhase2';
import PagePhase3 from './Pages/PagePhase3/PagePhase3';
import PagePhase4 from './Pages/PagePhase4/PagePhase4';
import PagePhase5 from './Pages/PagePhase5/PagePhase5';
import PageDemandePourVériferParAdmin from './Pages/PageDemandePourVerifierParAdmin/PageDemandePourVérifierParAdmin'
import PageAdminListeDemandesValidées from './Pages/PageAdminListeDemandesValidées/PageAdminListeDemandesValidées';
import PageAdminListeDemandesRefusées from './Pages/PageAdlinListeDemandesRefusées/PageAdminListeDemandesRefusées';


import PagePhase2PourVérifierParAdmin from './Pages/PagePhase2PourVérifierParAdmin/PagePhase2PourVérifierParAdmin'

import PagePhase3Verif from './Pages/PagePhase3Verif/PagePhase3Verif'
import PagePhase4Verif from './Pages/PagePhase4Verif/PagePhase4Verif'

import PagePhase5Verif from './Pages/PagePhase5Verif/PagePhase5Verif'

import PageMessagerieOuverteParAdmin from './Pages/PageMessagerieOuverteParAdmin/PageMessagerieOuverteParAdmin'
import PageMessagerieOuverteParClient from './Pages/PageMessagerieOuverteParClient/PageMessagerieOuverteParClient'

import PageMessagerie from './Pages/PageMessagerie/PageMessagerie'

import PageRemboursementOuverteParAdmin from "./Pages/PageRemboursementOuverteParAdmin/PageRemboursementOuverteParAdmin"
import PageHistoriqueClient from './Pages/PageHistoriqueClient/PageHistoriqueClient'

import PageStatistiques from "./Pages/PageStatistique/PageStatistiques"

import PageAccueilModerne from "./Pages/PageAccueilModerner/PageAccueilModerne"

import PagePhase2CréditDirect from "./Pages/PagePhase2CréditDirect/PagePhase2CréditDirect"
import PagePhase2CréditEslah from "./Pages/PagePhase2CréditEslah/PagePhase2CréditEslah"

import PagePhase2CréditDirectPourVérif from "./Pages/PagePhase2CréditDirectPourVérifierParAdmin/PagePhase2CréditDirectPourVérifierParAdmin"

import PagePhase2CréditEslahPourVérif from "./Pages/PagePhase2CréditEslahPourVérifierParAdmin/PagePhase2CréditEslahPourVérifierParAdmin"





import ClipLoader from "react-spinners/ClipLoader";
import Axios from 'axios'




function App() {

  const [listeofusers, setlistofusers]=useState([]);
const[listofusers2,setlistofusers2]=useState([])







  useEffect(()=>{
Axios.get("http://localhost:3001/getUsers").then((response)=>{
  setlistofusers(response.data)
})
  },[])


  useEffect(()=>{
    Axios.get("http://localhost:3001/getUserdb2").then((response)=>{
      setlistofusers2(response.data)
    })
      },[])






 





  const [Loading1,setLoading1]=useState(false);
  const [loadingtime,setloadingtime]=useState(1000);



  

  useEffect(()=>{
    setLoading1(true)
    setTimeout(()=>{
      setLoading1(false)
    },loadingtime)
  },[])



  return (




    <>
{
Loading1  ?


<div className='LoadingPage'>

<div className='LoaderContainer'>
<ClipLoader color="white" loading={Loading1}  size={110} />



<div className='LoadingWord'>
<h3>Loading ... </h3>
</div>


</div>


</div>
:



<Router>
      <Routes>
        <Route path='/' element={<PagePrincipale/>}/>  
        <Route path='/p1' element={<PagePrincipale/>}/>  
        <Route path='/p2' element={<PageConnexion/>}/>  
        <Route path='/p3' element={<PageInscription/>}/>  
        <Route path='/p4' element={<PageInscriptiontwo/>}/>  
        <Route path='/p5' element={<Admin_dahboard/>}/>  
        <Route path='/p6' element={<PageAdminListeDemandes/>}/> 
        <Route path='/p7' element={<PageAdminListeClients/>}/>  
        <Route path='/p8' element={<PageClieOuverteparAdmin/>}/>  
        <Route path='/p9' element={<PageProfilClient/>}/> 
        <Route path='/p10' element={<PageDemandeOuverteparClient/>}/> 
        <Route path='/p11' element={<PageSuccesInscription/>}/> 
        <Route path='/p12' element={<PageInscriptionFinale/>}/> 
        <Route path='/p13' element={<PagePhasesUploader/>}/> 
        <Route path='/p14' element={<PagePhase2/>}/> 
        <Route path='/p15' element={<PagePhase3/>}/> 
        <Route path='/p16' element={<PagePhase4/>}/> 
        <Route path='/p17' element={<PagePhase5/>}/> 

        <Route path='/p18' element={<PageDemandePourVériferParAdmin/>}/> 

        <Route path='/p19' element={<PagePhase2PourVérifierParAdmin/>}/> 
        <Route path='/p20' element={<PageAdminListeDemandesValidées/>}/> 
        <Route path='/p21' element={<PageAdminListeDemandesRefusées/>}/> 


        <Route path='/p22' element={<PagePhasesUploaderVerif/>}/> 
        
        <Route path='/p23' element={<PagePhase3Verif/>}/> 

        <Route path='/p24' element={<PagePhase4Verif/>}/> 

        <Route path='/p25' element={<PagePhase5Verif/>}/> 

        <Route path='/p26' element={<PageMessagerieOuverteParAdmin/>}/> 

        <Route path='/p27' element={<PageMessagerieOuverteParClient/>}/> 


        <Route path='/p28' element={<PageMessagerie/>}/> 

        <Route path='/p29' element={<PageRemboursementOuverteParAdmin/>}/> 



        <Route path='/p30' element={<PageHistoriqueClient/>}/> 

        <Route path='/p31' element={<PageStatistiques/>}/> 


        <Route path='/p32' element={<PageAccueilModerne/>}/> 




        <Route path='/p33' element={<PagePhase2CréditDirect/>}/> 

        <Route path='/p34' element={<PagePhase2CréditEslah/>}/> 



        <Route path='/p35' element={<PagePhase2CréditDirectPourVérif/>}/> 



        <Route path='/p36' element={<PagePhase2CréditEslahPourVérif/>}/> 

        

        

        

        

        


        


        


        <Route path='*'    element={<Page_NotFound/>}/> 
      </Routes>






 </Router>

}

</>
  );
}



export default App;
