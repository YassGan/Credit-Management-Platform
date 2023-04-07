
import { useState,useEffect } from 'react';
import './timeline.css'
import { Navigate,useNavigate } from 'react-router-dom';
import axios from 'axios';


const Timeline=(props)=>{

    const navigate= useNavigate();
   
   
    const [tabDemandes, setTabDemandes]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3001/getDemandes").then((response)=>{
            setTabDemandes(response.data)
        })
          },[])








    if (props.phase1==="phase_validée"){
            var cercle1="phase_validée cercle";
            
    }

    if (props.phase1==="phase_refusée"){
        var cercle1="phase_refusée cercle";
    }

    if (props.phase1==="phase_en_cours_d_etude"){
        var cercle1="phase_en_cours_d_etude cercle";
    }

    if (props.phase1==="phase_pas_encore"){
        var cercle1="phase_pas_encore cercle";
    }
//////////////////////////////////////////////////////////////
    if (props.phase2==="phase_validée"){
        var rectangle1="phase_validée rectangle";
        var cercle2="phase_validée cercle";
    }

    if (props.phase2==="phase_refusée"){
        var rectangle1="phase_refusée rectangle";
        var cercle2="phase_refusée cercle";
    }

    if (props.phase2==="phase_en_cours_d_etude"){
        var rectangle1="phase_en_cours_d_etude rectangle";
        var cercle2="phase_en_cours_d_etude cercle";
    }

    if (props.phase2==="phase_pas_encore"){
        var rectangle1="phase_pas_encore rectangle";
        var cercle2="phase_pas_encore cercle";
    }
//////////////////////////////////////////////////////////////
    if (props.phase3==="phase_validée"){
        var rectangle2="phase_validée rectangle";
        var cercle3="phase_validée cercle";
    }

    if (props.phase3==="phase_refusée"){
        var rectangle2="phase_refusée rectangle";
        var cercle3="phase_refusée cercle";
    }

    if (props.phase3==="phase_en_cours_d_etude"){
        var rectangle2="phase_en_cours_d_etude rectangle";
        var cercle3="phase_en_cours_d_etude cercle";
    }

    if (props.phase3==="phase_pas_encore"){
        var rectangle2="phase_pas_encore rectangle";
        var cercle3="phase_pas_encore cercle";
    }
//////////////////////////////////////////////////////////////////
if (props.phase4==="phase_validée"){
    var rectangle3="phase_validée rectangle";
    var cercle4="phase_validée cercle";
}

if (props.phase4==="phase_refusée"){
    var rectangle3="phase_refusée rectangle";
    var cercle4="phase_refusée cercle";
}

if (props.phase4==="phase_en_cours_d_etude"){
    var rectangle3="phase_en_cours_d_etude rectangle";
    var cercle4="phase_en_cours_d_etude cercle";
}

if (props.phase4==="phase_pas_encore"){
    var rectangle3="phase_pas_encore rectangle";
    var cercle4="phase_pas_encore cercle";
}
//////////////////////////////////////////////////////////////////
if (props.phase5==="phase_validée"){
    var rectangle4="phase_validée rectangle";
    var cercle5="phase_validée cercle";
}

if (props.phase5==="phase_refusée"){
    var rectangle4="phase_refusée rectangle";
    var cercle5="phase_refusée cercle";
}

if (props.phase5==="phase_en_cours_d_etude"){
    var rectangle4="phase_en_cours_d_etude rectangle";
    var cercle5="phase_en_cours_d_etude cercle";
}

if (props.phase5==="phase_pas_encore"){
    var rectangle4="phase_pas_encore rectangle";
    var cercle5="phase_pas_encore cercle";
}




console.log(props.idDemande)


const consulterPhase1 = ()=>{



    console.log("Id phase1 avec localStorage sous forme de NumPhase "+  props.idPhase1);
    localStorage.setItem("idPhase1Demande",props.idPhase1)

    localStorage.setItem("idPhase1DemandePage1",props.idPhase1)


    //alert("Id phase1 après localStorage"+  localStorage.getItem("idPhase1Demande"));


  // alert("affichage par localStorage "+ localStorage.getItem("idPhase1"))
    




    if(localStorage.getItem("NavigationClickTimeLine")==="Client"){
        navigate('/p13')

    }

else{
    navigate('/p22')


}


    
}

const consulterPhase2 = ()=>{
    localStorage.setItem("idPhase2Demande",props.idPhase2)
 //   alert("id de la phase "+ localStorage.getItem("idPhase2Demande"))



  var TabEnC;
  for (TabEnC in tabDemandes){
      if(tabDemandes[TabEnC].id_phase2===props.idPhase2){


        if(tabDemandes[TabEnC].type_demande==="Crédit auto"){
            if(localStorage.getItem("NavigationClickTimeLine")==="Client"){
                navigate('/p14')
        
            }
            else{
                navigate('/p19')
                
                }
          }

          if(tabDemandes[TabEnC].type_demande==="Crédit Direct"){
            if(localStorage.getItem("NavigationClickTimeLine")==="Client"){
                navigate('/p33')
        
            }
            else{
                navigate('/p35')
                
                }
          }

          if(tabDemandes[TabEnC].type_demande==="Crédit Eslah"){
            if(localStorage.getItem("NavigationClickTimeLine")==="Client"){
                navigate('/p34')
        
            }
            else{
                navigate('/p36')
                
                }
          }

    }

  }










}

const consulterPhase3 = ()=>{



    localStorage.setItem("idPhase2Demande",props.idPhase3)


    
    if(localStorage.getItem("NavigationClickTimeLine")==="Client"){
        navigate('/p15')

    }


    else{
        navigate('/p23')
        
        }




}

const consulterPhase4 = ()=>{

    localStorage.setItem("idPhase2Demande",props.idPhase4)


    
    if(localStorage.getItem("NavigationClickTimeLine")==="Client"){
        navigate('/p16')

    }


    else{
        navigate('/p24')
        
        }}

const consulterPhase5 = ()=>{


    localStorage.setItem("idPhase2Demande",props.idPhase5)


    
    if(localStorage.getItem("NavigationClickTimeLine")==="Client"){
        navigate('/p17')

    }


    else{
        navigate('/p25')
        
        }












}


    return(
        <>
        <div className='component_container'>

             <div className='timeline_container'>
             
             <div className='timeline_title'>
                <h3>Demande  {props.numéro} </h3>
                <div className='statut_global_de_la_demande_container'>
                <h4 className='statut_global_de_la_demande'>{props.statut_demande} </h4>
                </div>

            </div>

            <div className='demande_some_info'>
               

            <div className='credit_info_elemnt'> 
                    <h4> - Date du premier dépot : </h4>
                    <div className='reponsecont'> {props.date_premier_dépot} </div>
                </div>


                <div className='credit_info_elemnt'> 
                    <h4> - Type crédit : </h4>
                    <div className='reponsecont'>   {props.type} </div>
                </div>
                
                <div className='credit_info_elemnt'> 
                    <h4> - Montant : </h4>
                    <div className='reponsecont'>   {props.montant} </div>
                    <div className='reponsecont'>dt</div>

                </div>
                
                <div className='credit_info_elemnt'> 
                    <h4> - Mensualité : </h4>
                    <div className='reponsecont'>   {props.mensualité} </div>
                    <div className='reponsecont'>dt</div>

                </div>

                <div className='credit_info_elemnt'> 
                    <h4> - Durée : </h4>
                    <div className='reponsecont'>   {props.durée} </div>
                    <div className='reponsecont'>Mois</div>

                </div>
    


            </div>
                 <div className='timeline'>

                     <div onClick={consulterPhase1} id='phase1' className='  phase'>
                         <div id='Cerclen°1' className={cercle1}>    
                         </div>

                        <div className=  {rectangle1}>
                        </div>
                     </div>

                     <div onClick={consulterPhase2} id='phase1' className='  phase'>
                         <div id='Cerclen°2'  className={cercle2}>    
                         </div>

                         <div className=  {rectangle2}>
                        </div>
                     </div>



                     <div onClick={consulterPhase3} id='phase1' className=' phase'>
                        <div id='Cerclen°3'  className={cercle3}>
                        </div>

                        <div className=  {rectangle3}>
                        </div>
                     </div>




                     
                     <div  id='phase1' className='phase'>
                        <div onClick={consulterPhase4} id='Cerclen°4' className= {cercle4}>
                        </div>

                        <div className=  {rectangle4}>
                        </div>

                        <div onClick={consulterPhase5} id='Cerclen°5' className={cercle5}>
                             

                        </div>
                     </div>

                 </div>



                 <div className='phases_titles_container'>
                     <div   className='phase_title' id=''>
                        <h4> Initiation de la demande </h4>
                     </div>
                     <div  className='phase_title'>
                        <h4> Import des documents </h4>
                     </div>
                     <div id='EtudeDossierBabel'  className='phase_title'>
                     <h4>Etude du  dossier</h4>
                     </div>
                     <div  className='phase_title'>
                     <h4>Résultat de l'étude </h4>
                     </div>
                     <div  className='phase_title'>
                     <h4>  Déblocage des fonds </h4>
                     </div>
                 
                 
                 </div>


             </div>
        </div>
        </>
    )
}

export default Timeline;