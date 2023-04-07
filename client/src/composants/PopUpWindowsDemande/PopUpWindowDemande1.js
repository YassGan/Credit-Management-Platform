import './PopUpWindowsDemande.css'
import LogoStb from '../../composants/images/Logo_STB.png'
import PopUpWindowDemande2 from './PopUpWindowDemande2';

const PopUpWindowDemande1 =(props)=>{


    return(props.triggerdemande1)  ?   (
        <>
            <div className="BgModalPopUp">
                <div className="PopUpWindowDemande1Container">
                    <div className="PopUpWindowDemande1">
                        
                     <div className='boutonXContainer'>
                      <h1 className='boutonX' onClick={()=>{props.settriggerdemande1(false);}}> +</h1>
                      </div>
                        <div className="PopUpWindowDemade1DescriptionContainer">
                            <div className='PopUpWindowDemade1Description'>
                                Pour déposer une nouvelle demande de crédit dans la STB il faut passer par n phases.
                            </div>
                           

                        </div>

                        
                        <div className='PopUpWindowSTBLogoContainer'>
                            <div className="PopUpWindowSTBLogo">
                                <img  className='logoStb' src={LogoStb}/>      
                            </div>
                        </div>

                        <div className="PopUpWindowTwoButtonsValidationContainer">
                            
                            <div onClick={()=>{props.settriggerdemande1(!props.triggerdemande1);}} className="btn_annuler ButtonValidationPopUp">
                                <h4> Annuler</h4>
                            </div>

                            <div onClick={()=>{props.settriggerdemande1(!props.triggerdemande1); props.settriggerdemande2(true);}} className="btn_valider ButtonValidationPopUp">
                                <h4> Suivant</h4>
                            </div>
                        </div>


                    </div>

                </div>
            
            </div>
            


        </>
    ):"";
}


export default PopUpWindowDemande1;