


import Pending_Img from '../images/Pending.png'
import Validate from '../images/Validate.png'
import Refuse from '../images/RefuseAdmin.png'
import { useState,useEffect } from 'react'
import axios from 'axios'



import './ValidationBox.css'
const ValidatoinBox=(props)=>{


    const [idp,setidp]=useState("")
    const [newStatut,setnewStatut]=useState("")


    const [tabPhasess,settabPhasess]=useState([])

    
    useEffect(()=>{
        axios.get("http://localhost:3001/getPhases").then((response)=>{
            settabPhasess(response.data)
        })
          },[])
  








  const   ValiderStatutGlo=()=>{

    var iop;
    for (iop in tabPhasess){
        if(tabPhasess[iop].NumPhase===localStorage.getItem("idPhase2Demande")){
            setidp(tabPhasess[iop]._id)

            if (props.fonctionValiderGlo==="ValiderDemande"){
                setnewStatut("phase_validée")
        
                //alert("l'id efefefefef"+idp)
                //alert("le statut "+newStatut)
        
        
                axios.put("http://localhost:3001/UpdatePhase/:id",{
                    idp:idp,
                    newStatut:newStatut
                })
        
            }

        }


    }

    



    }



 const   RefuserStatutGlo=()=>{

    var iop;
    for (iop in tabPhasess){
        if(tabPhasess[iop].NumPhase===localStorage.getItem("idPhase2Demande")){
            setidp(tabPhasess[iop]._id)

        }
    }







    if (props.fonctionRefuserGlo==="RefuserDemande"){
        setnewStatut("phase_refusée")

        //alert("l'id efefefefef"+idp)
        //alert("le statut "+newStatut)


        axios.put("http://localhost:3001/UpdatePhase/:id",{
            idp:idp,
            newStatut:newStatut
        })

    }
}




const   EncoursStatutGlo=()=>{

    var iop;
    for (iop in tabPhasess){
        if(tabPhasess[iop].NumPhase===localStorage.getItem("idPhase2Demande")){
            setidp(tabPhasess[iop]._id)

        }
    }






    if (props.fonctionEnCoursGlo==="EnCoursDemande"){
        setnewStatut("phase_en_cours_d_etude")

        //alert("l'id efefefefef"+idp)
      //  alert("le statut "+newStatut)


        axios.put("http://localhost:3001/UpdatePhase/:id",{
            idp:idp,
            newStatut:newStatut
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

export default ValidatoinBox;