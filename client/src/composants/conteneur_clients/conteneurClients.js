import './conteneurClients.css'

import Portrait1 from '../images/Portrait1.png'
import Xmark from '../images/Xmark.png'
import consulter_icone from '../images/consulter_icone.png'
import people from '../images/people.png'
import unlink from '../images/unlink.png'
import { useState } from 'react'
import Axios from 'axios'
import { useEffect } from 'react'
import { Navigate,useNavigate } from 'react-router-dom'
import axios from 'axios'

const ConteneurClients=(props)=>{
    const [searching,setsearching]=useState("")
    const navigate= useNavigate();

    var Utilisateur_Consulter={nom:"test",prenom:"test",mail:"test",
                               password:"test",profession:"test",NumCIN:"test",
                               NumTel:"test",Adresse:"test",DatedeNaissance:"test",PhotoProfil:"test",
                               _id:"test"

                            };

    window.Utilisateur_Consulter=Utilisateur_Consulter;//declaring global variable by window object  

    const [listeofusers, setlistofusers]=useState([]);


    useEffect(()=>{
        Axios.get("http://localhost:3001/getUsers").then((response)=>{
          setlistofusers(response.data)
        })
          },[])



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

                    window.id_personne_timeline=id;



                  localStorage.setItem("window.Utilisateur_Consulter.nom",window.Utilisateur_Consulter.nom)
                  localStorage.setItem("window.Utilisateur_Consulter.prenom",window.Utilisateur_Consulter.prenom)

                  localStorage.setItem("window.Utilisateur_Consulter.mail",window.Utilisateur_Consulter.mail)
                  localStorage.setItem("window.Utilisateur_Consulter.password",window.Utilisateur_Consulter.password)
                  localStorage.setItem("window.Utilisateur_Consulter.profession", window.Utilisateur_Consulter.profession)


                  localStorage.setItem("window.Utilisateur_Consulter.NumCIN", window.Utilisateur_Consulter.NumCIN)
                  localStorage.setItem("window.Utilisateur_Consulter.NumTel", window.Utilisateur_Consulter.NumTel)
                  localStorage.setItem("window.Utilisateur_Consulter.Adresse", window.Utilisateur_Consulter.Adresse)

                  localStorage.setItem("window.Utilisateur_Consulter.DatedeNaissance", window.Utilisateur_Consulter.DatedeNaissance)
                  localStorage.setItem("window.Utilisateur_Consulter.PhotoProfil", window.Utilisateur_Consulter.PhotoProfil)
                  localStorage.setItem("window.Utilisateur_Consulter._id", window.Utilisateur_Consulter._id)


                  localStorage.setItem("window.id_personne_modif",window.id_personne_modif)
                  localStorage.setItem("window.id_personne_timeline", window.id_personne_timeline)


               













                    alert( " L'id du client cliqué est : "+ window.id_personne_timeline)

                    localStorage.setItem("IdSessionClientMessage",id)


                  }
                }
            
                navigate('/p8');

          }


          const SupprimerFunction =(id)=>{
            alert("Supprimer l'utilisateur avec cet id : "+id)
            axios.delete(`http://localhost:3001/delete/${id}`)

      }

      const fonctionChercher=()=>{
          var Nom_A_chercher =document.getElementById("searchingName").value;
          alert("Client "+ Nom_A_chercher +" trouvé Vouez vous consulter son profil ")
          var i;
          var idChercher;
          for ( i in listeofusers){
              if (listeofusers[i].name==Nom_A_chercher){
                  console.log("Client trouvé")
                  idChercher=listeofusers[i]._id;

                  ConsulterFunction(idChercher)
              }
          }

      }

    return(
      <>
      <div className='conteneurprincipal'>
            <div className="listeClientsContainer">
                <div className="CLientsContainer">
                   <div className='clients2emecontainer'>
                        
                        <div className='searchBarContainer'>
                            <div className='searchBar'>
                                <input onChange={(e)=>  setsearching(e.target.value)} className='input_search_bar' id='searchingName' placeholder='Entrer un nom de client' type='text'></input>
                                <button onClick={fonctionChercher} className='boutonChercher' > Chercher </button>
                            </div>

                        <div onClick={()=>{props.setTriggerAjout(true)}} className='AjouterUnClientButton'>
                            <h4> Ajouter client </h4>
                        </div>

                        </div>


                        <div> 
                            <div className='clientTypesContainer'> 
                                <div className='ListeClientsButton ListeClients'>
                                    <div className='button1_container'>
                                    <img className='people_icone' src={people}/>

                                    <h3> Liste des clients en cours</h3>
                                    </div>
                                    <hr className='lignne_horizental_liste_button'></hr>
                                </div>

                                <div className='ListeClientsButton ListeClientsdésactivés'>
                              {/*  <div className='button1_container'>
                                    <img className='people_icone' src={unlink}/>

                                    <h3> Liste des clients désactivés</h3>
    </div>   */  }                               
                                </div>
                            </div>
                        </div>

                        <div className='table_container'>
                            <div className='table'>
                                
                                
               
                                <div className='table_ligne_principale'>
                                    <div id='imageEelement' >
                                         <h4 className='title_element'> Image  </h4>

                                      
                                         {        
                            listeofusers.map((e)=>{        

                                 return(
                                        <div className='info_element info_element_img  '>
                                       <img className='portraitimg' src={e.PhotoProfil}/>  
                                        </div>
                                        )})

                                         }
                                      
                           
                                    
                                    </div>
                                    
                                    <div id='IdElement' className='title_element'>
                                         <h4 className='title_element'> NumCIN  </h4>



                                         {        
                            listeofusers.map((e)=>{        

                                 return(
                                        <h4 className='info_element '>
                                       <h4> {e.NumCIN} </h4>  
                                        </h4>
                                        )})

                                         }

                                    </div>
                                    
                                    <div id='NomPrenomElement' className='title_element'>
                                         <h4 className='title_element'> Nom et Prénom</h4>    
                                         {        
                            listeofusers.map((e)=>{        

                                 return(
                                        <h4 className='info_element'>
                                             {e.name} {e.prnom}
                                        </h4>
                                        )})

                                         }
                                    </div>
                                    
                                    <div id='DatedeNaissanceElement' className='title_element'>
                                         <h4 className='title_element'>Né(e) le </h4> 


                                         {        
                            listeofusers.map((e)=>{        

                                 return(
                                        <h4 className='info_element'>
                                             {e.DatedeNaissance} 
                                        </h4>
                                        )})

                                         }


                                    </div>
                                    
                                    <div id='ProfessionElement' className='title_element'> 
                                        <h4 className='title_element'> Profession </h4>



                                        {        
                            listeofusers.map((e)=>{        

                                 return(
                                        <h4 className='info_element'>
                                             {e.profession} 
                                        </h4>
                                        )})

                                         }



                                    </div>

                           
                                    
                                    <div id='AdresseMailElement' className='title_element'> 
                                        <h4  className='title_element'> Adresse </h4>


                                        {        
                            listeofusers.map((e)=>{        

                                 return(
                                        <h4 className='info_element'>
                                             {e.Adresse} 
                                        </h4>
                                        )})

                                         }










                                    </div>
                                    
                                    <div id='NumTelElement' className='title_element'> 
                                        <h4 className='title_element'>Num tél </h4>





                                        {        
                            listeofusers.map((e)=>{        

                                 return(
                                        <h4 className='info_element'>
                                             {e.NumTel} 
                                        </h4>
                                        )})

                                         }







                                     </div>
                                    
                                    <div id='ConsulterElement' className='title_element'>
                                         <h4 className='title_element'> Supprimer </h4>
                                     

                                       {        
                            listeofusers.map((e)=>{    if(e.name==="Gana")  {

                                 return(
                                        <h4 className='info_element info_element_img'>
                                            <img   className="pointer_consulter" id="Xmark" src={Xmark}/>
                                        </h4>
                                        )
                                 }
                                 else{
                                     return(
                                        <h4 className='info_element info_element_img'>
                                        <img  onClick={() =>{SupprimerFunction(e._id)}} className="pointer_consulter" id="Xmark" src={Xmark}/>
                                    </h4>
                                     )
                                 }
                                    
                                    
                                    
                                    
                                    })

                                         }



                                         




                                    </div>
                                    
                                    <div id='SupprimerElement' className='title_element'>
                                         <h4 className='title_element'> Consulter </h4>





                                         {        
                            listeofusers.map((e)=>{        

                                 return(
                                        <h4 className=' info_element info_element_img'>
                                            <img onClick={() =>{ConsulterFunction(e._id)}}  id='hjk' className="pointer_consulter Xmark" src={consulter_icone}/>
                                        </h4>
                                        )})

                                         }
                                         
                                         <div className='XmarkContainer'>  
                                       </div>
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

export default ConteneurClients;