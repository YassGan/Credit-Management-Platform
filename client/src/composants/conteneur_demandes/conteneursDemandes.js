


import './conteneurDemandes.css'
import '../conteneur_clients/conteneurClients.css'



import Portrait1 from '../images/Portrait1.png'
import Xmark from '../images/Xmark.png'
import consulter_icone from '../images/consulter_icone.png'
import refuse from '../images/refuse.png'
import folder from '../images/folder.png'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { Navigate,useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import validateico from '../../composants/images/validateico.png'


const ConteneurDemandes=()=>{
    const navigate= useNavigate();


    const ConsulterFunction=(id)=>{
        alert("l'id de la demande est :  "+id)
        localStorage.setItem("IdDemandePourConsulterParAdmin",id)
      //  alert("valeur idée stockée par localstorage "+localStorage.getItem("IdDemandePourConsulterParAdmin"))
        navigate('/p18');

    }

    const [tabDemandes, setTabDemandes]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3001/getDemandes").then((response)=>{
            setTabDemandes(response.data)
        })
          },[])

          let TabEnCours=[];
          var TabEnC;
          for (TabEnC in tabDemandes){
              if(tabDemandes[TabEnC].statutGlobal==="En cours"){
               TabEnCours.push(tabDemandes[TabEnC])
              }

          }



          console.log(tabDemandes)



    return(
        <>


<div className='conteneurprincipal'>
            <div className="listeClientsContainer">
                <div className="CLientsContainer">
                   <div className='clients2emecontainer'>
                        
                        <div className='searchBarContainer'>
                            <div className='searchBar'>
                            </div>
                        </div>


                        <div> 
                            <div className='liste2buttonsContainer'> 
                                
                                
                                
                            <Link to='/p6'>

                                <div className='ListeClientsButton ListeClients'>
                                    <div className='button1_container'>
                                    <img className='people_icone' src={folder}/>

                                    <h3> Liste des demandes en cours</h3>
                                    </div>
                                    <hr className='lignne_horizental_liste_button'></hr>
                                </div>
                                </Link>




                                <Link to='/p20'>


                                <div className='ListeClientsButton ListeClientsdésactivés'>
                                <div className='button1_container'>
                                    <img className='people_icone' src={validateico}/>

                                    <h3> Liste des demandes Validées</h3>
                                    </div>                                    
                                </div>

                                </Link>


                                
                                <Link to='/p21'>


                                <div className='ListeClientsButton ListeClientsdésactivés'>
                                <div className='button1_container'>
                                    <img className='people_icone' src={refuse}/>

                                    <h3> Liste des demandes refusées</h3>
                                    </div>                                    
                                </div>

                                </Link>





                            </div>
                        </div>

                        <div className='table_container'>
                            <div className='table'>
                                <div className='table_ligne_principale'>
                               
                                    
                                   
                                    
                                    <div id='nom' >
                                         <h4 className='title_elementdemande'> Client</h4>


                                         {        
                            TabEnCours.map((e)=>{        

                                 return(
                                         <h4 className='title_elementdemande'>{e.nomClient} </h4>
                                        )})

                                         }






                                    </div>


                                    
                                    <div id='TypeDeLaDemande' >
                                         <h4 className='title_elementdemande'> Type crédit </h4>

                                         {        
                            TabEnCours.map((e)=>{        

                                 return(
                                         <h4 className='title_elementdemande'> {e.type_demande} </h4>
                                        )})

                                         }


                                    </div>
                                    
                                    <div id='Montantdemande' >
                                         <h4 className='title_elementdemande'>Montant </h4> 

                                         {        
                            TabEnCours.map((e)=>{        

                                 return(
                                    <h4 className='title_elementdemande'> {e.montant} dt </h4> 
                                    )})

                                         }
                                      
                                    </div>
                                    
                         

                                    <div id='mensualité' >
                                         <h4 className='title_elementdemande'> Mensualité </h4>



                                         {        
                            TabEnCours.map((e)=>{        

                                 return(
                                    <h4 className='title_elementdemande'> {e.mensualité} dt </h4>
                                    )})

                                         }



                                    </div>

                                    <div id='durée' >
                                         <h4 className='title_elementdemande'> Durée </h4>

                                         {        
                            TabEnCours.map((e)=>{        

                                 return(
                                    <h4 className='title_elementdemande'> {e.durée} Mois </h4>
                                    )})

                                         }


                                    </div>



                                    <div id='DatePremierdepotdemande' > 
                                        <h4 className='title_elementdemande'> Date du premier dépot </h4>



                                        {        
                            TabEnCours.map((e)=>{        

                                 return(
                                    <h4 className='title_elementdemande'> {e.Date_de_creation} </h4>
                                    )})

                                         }






                                    </div>
                                    
                        
                                    
                                    <div id='ConsulterElementdemande' >
                                         <h4 className='title_elementdemande'> Supprimer </h4>

                                         {        
                            TabEnCours.map((e)=>{        

                                 return(
           
                                    <div className='title_elementdemande XmarkContainer'>  
                                       
                                       <img onClick={() =>{ConsulterFunction(e._id)}} id="Xmark" src={Xmark}/>
                                  </div>

                                    )})
                                         }   


                                    </div>
                                    

                                    <div id='SupprimerElement' >
                                    <h4 className='title_elementdemande'> Consulter </h4>

                          

                                    {        
                            TabEnCours.map((e)=>{        

                                 return(
           
                                    <div className='title_elementdemande XmarkContainer'>  
                                       
                                       <img onClick={() =>{ConsulterFunction(e._id)}} id="Xmark" src={consulter_icone}/>
                                  </div>

                                    )})
                                         }      
                                            </div>

                                

                                
                                </div>
                                <div className='horizental_line_elements_container'>
                                </div>
                            </div>
                        </div>

                </div>
                </div>
            </div>
        </div>









        </>
    )
}

export default ConteneurDemandes;