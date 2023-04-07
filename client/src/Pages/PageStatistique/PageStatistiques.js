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


import AcceptationouRefus from "../../composants/images/AcceptationRefus.png"



import RemboursementElement from "../../composants/RemboursementElement/RemboursementElement";

import PopUpWindowRemboursement from "../../composants/PopUpWindowRemboursement/PopUpWindowRemboursement"






import BarChart from "../../composants/Charts/BarCharts";

import LineChart from "../../composants/Charts/LineChart";

import LineChartRemb from "../../composants/Charts/LineChartRemb";


import PieChartParAge from '../../composants/Charts/RépartitionParAgePieChart'

import DoughnutParTypeCrédit from '../../composants/Charts/RépartitiondesDemandesParTypeCrédit'

import NouveauxClientsHommeFemme from "../../composants/Charts/NouveauxClientsHommeFemme"

import './PageStatistiques.css'






function PageRemboursementOuverteParAdmin() {

 
  const [el,setel]=useState(false);
  const [el2,setel2]=useState(false);

  const[el3,setel3]=useState(false)





const[el10, setel10]=useState(false)

















  return (
<div>
    <div className='containerPageProfilClient'>

        <Navbar TriggerDeconnexion={el3} setTriggerDeconnexion={setel3} photo={localStorage.getItem("PhotoProfilSessionAdmin")} Statut={"Administrateur"} nom={localStorage.getItem("nomSessionAdmin")} prénom={localStorage.getItem("prenomSessionAdmin")}  />
        <Sidebar></Sidebar>

            
            <div className='client_main'>
                <TitreDuMain titre={"Statistiques"} description={"Voici quelques modélisations de données "}></TitreDuMain>


     

<div className="StatistiquesGloContainer">


  <div className="Line1Stat">

     <div className="BarchartNombNvHomFem"> 
       <NouveauxClientsHommeFemme ></NouveauxClientsHommeFemme>
     </div>

      <div className="EvolutionNomNvxClients"> 
        <LineChart ></LineChart>
      </div>

  
  </div>



  <div className="Line1Stat">

       
  <div className="BarchartNombNvHomFem"> 
    <BarChart ></BarChart>
  </div>

      <div className="EvolutionNomNvxClients"> 
        <LineChartRemb ></LineChartRemb>
      </div>

  
  </div>














  <div className="Line1Stat">

       
  <div className="RepréseantationParAge"> 
    <PieChartParAge ></PieChartParAge>
  </div>


  <div className="RepréseantationParAge"> 
    <DoughnutParTypeCrédit ></DoughnutParTypeCrédit>
  </div>

  
  </div>






  
  






</div>



        




    </div>

 


    <div>
      <PopUpWindowAreYouSure trigger={el} setTrigger={setel} trigger2={el2} setTrigger2={setel2}></PopUpWindowAreYouSure>
    </div>


                
                
        

    
</div>


<div>
<PopUpWindowRemboursement  triggerRemboursement={el10} settriggerRemboursement={setel10}></PopUpWindowRemboursement>

</div>

<div>
        <PopUpWindowDeconnexion TriggerDeconnexion={el3} setTriggerDeconnexion={setel3}></PopUpWindowDeconnexion>
    </div>

</div>

  );
}

export default PageRemboursementOuverteParAdmin;
























