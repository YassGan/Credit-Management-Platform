
import '../PopUpWindowAreYouSure/PopUpWindowAreYouSure.css'

import interrogationIcone from '../../composants/images/interrogationIcone.png'
import { useState } from 'react'
import { Navigate,useNavigate } from 'react-router-dom'


const PopUpWindowDeconnexion=(props)=>{
    const navigate= useNavigate();


    const [deconnexion,setdeconnexion]=useState(false)


    if(deconnexion===true){
        console.log("Deconnexion")
        navigate('/p1')


    }



       
       
        return(props.TriggerDeconnexion)  ?   (

       <>
        <div className="bgAreYouSure">
            <div className="PopUpWindowAreYouSureContainer">
                <div className="PopUpWindowAreYouSure">
                    <div  onClick={()=>{props.setTriggerDeconnexion(false)}}  className='closeButtonContainer'>
                        <h3 className='closeButton'> + </h3>
                    </div>
                    <div className='title_container'>
                        <h4> Voulez vous vraiment vous déconnecter ?</h4>
                    </div>

                    <div className='interrogationIconeScale_container'>
                        <img className='interrogationIconeScale' src={interrogationIcone}/>
                    </div>

                    <div className='twoButtonsValidation'>
                        <div  onClick={()=>{props.setTriggerDeconnexion(!props.TriggerDeconnexion);props.setTriggerDeconnexion(!props.TriggerDeconnexion)}} className='ButtonValidation btn_annuler'> <h4> Annuler </h4> </div>
                        <div onClick={()=>{props.setTriggerDeconnexion(false);props.setTriggerDeconnexion(false);setdeconnexion(true);   }  }   className='ButtonValidation btn_valider'> <h4> Valider </h4> </div>

               
                    </div>

                </div>

            </div>
        </div>
        </>
    ):"";


}

export default PopUpWindowDeconnexion;