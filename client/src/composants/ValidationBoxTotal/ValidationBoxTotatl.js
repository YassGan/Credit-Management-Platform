


import Pending_Img from '../images/Pending.png'
import Validate from '../images/Validate.png'
import Refuse from '../images/RefuseAdmin.png'
import { useState,useEffect } from 'react'
import axios from 'axios'



const ValidatoinBoxGlo=(props)=>{


    const [idpDe,setidpDe]=useState("")
    const [newStatutDemande,setnewStatutDemande]=useState("")


    const [tabDemandes,settabDemandes]=useState([])

    
    useEffect(()=>{
        axios.get("http://localhost:3001/getDemandes").then((response)=>{
            settabDemandes(response.data)
        })
          },[])


          console.log(localStorage.getItem("StatutGlobalDemandeOuverte "))
  










    const   RefuserStatutGlo=()=>{


        if (props.fonctionRefuserDemnadeOuverte==="RefuserDemande"){
            setnewStatutDemande("Demande Refusée")
            setidpDe(localStorage.getItem("idDemandeOuverte "))
    
            ////alert("l'id efefefefef"+idpDe)
            ////alert("le statut "+newStatutDemande)
    
    
            axios.put("http://localhost:3001/UpdateDemande/:id",{
                idpDe:idpDe,
                newStatutDemande:newStatutDemande
            })
    
        }
    }
  
  
  
  
  
    const   ValiderStatutGlo=()=>{

  
    if (props.fonctionValiderDemnadeOuverte==="ValiderDemande"){
        setnewStatutDemande("Demande Validée")
        setidpDe(localStorage.getItem("idDemandeOuverte "))

        //alert("l'id efefefefef"+idpDe)
        //alert("le statut "+newStatutDemande)


        axios.put("http://localhost:3001/UpdateDemande/:id",{
            idpDe:idpDe,
            newStatutDemande:newStatutDemande
        })

    }

    }

    







const   EncoursStatutGlo=()=>{

    
    if (props.fonctionEnCoursDemnadeOuverte==="EnCoursDemande"){

        setnewStatutDemande("En cours")
        setidpDe(localStorage.getItem("idDemandeOuverte "))

        //alert("l'id efefefefef"+idpDe)
        //alert("le statut "+newStatutDemande)


        axios.put("http://localhost:3001/UpdateDemande/:id",{
            idpDe:idpDe,
            newStatutDemande:newStatutDemande
        })

    }
}



    





    return(
        <>
        
        <div className="ValidaitonBoxWrapper">
              




            <div className='ValidationBoxContainer'>
               

               <div className='ValidationBox'>

           
                    <div className='Validation button'>
                        <img onClick={ValiderStatutGlo} className='imgScaleButtonValidation' src={Validate}/>

                    </div>


           
                   <div className='En cours button'>
                        <img  onClick={EncoursStatutGlo} className='imgScaleButtonValidation' src={Pending_Img}/>
                   </div>
               


                   <div className='Refuser button'>
                   <img onClick={RefuserStatutGlo} className='imgScaleButtonValidation' src={Refuse}/>

                   </div>


               </div>
               
              
               
            
            
            </div>

        </div>



        </>
    )
}

export default ValidatoinBoxGlo;