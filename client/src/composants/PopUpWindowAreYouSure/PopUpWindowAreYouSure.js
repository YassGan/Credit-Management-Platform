
import './PopUpWindowAreYouSure.css'

import interrogationIcone from '../../composants/images/interrogationIcone.png'


const PopUpWindowAreYouSure=(props)=>{




       
       
        return(props.trigger2)  ?   (

       <>
        <div className="bgAreYouSure">
            <div className="PopUpWindowAreYouSureContainer">
                <div className="PopUpWindowAreYouSure">
                    <div  onClick={()=>{props.setTrigger2(false)}}  className='closeButtonContainer'>
                        <h3 className='closeButton'> + </h3>
                    </div>
                    <div className='title_container'>
                        <h4> Etes vous sure ?</h4>
                    </div>

                    <div className='interrogationIconeScale_container'>
                        <img className='interrogationIconeScale' src={interrogationIcone}/>
                    </div>

                    <div className='twoButtonsValidation'>
                        <div  onClick={()=>{props.setTrigger2(!props.trigger2);props.setTrigger(!props.trigger)}} className='ButtonValidation btn_annuler'> <h4> Annuler </h4> </div>
                        <div onClick={()=>{props.setTrigger2(false);props.setTrigger(false)}}   className='ButtonValidation btn_valider'> <h4> Valider </h4> </div>


                    </div>

                </div>

            </div>
        </div>
        </>
    ):"";


}

export default PopUpWindowAreYouSure