


import './PopUpWindowsDemande.css'
import LogoStb from '../../composants/images/Logo_STB.png'
import alertPhoto from '../../composants/images/alertPhoto.png'


import submit_icone from "../images/submit_icone.png"



const PopUpWindowDemande4 =(props)=>{


    return(props.triggerdemande4)  ?   (
        <>
            <div className="BgModalPopUp4">
                <div className="PopUpWindowDemande4Container">
                    <div className="PopUpWindowDemande4">
                        
                       <div className='closingButtonContainer4'>
                           <h4  onClick={()=>{props.settriggerdemande4(!props.triggerdemande4);}} className='pointer closingButton4'> +</h4>
                       </div>
                       
          

                        
                        <div className='PopUpWindowSTBLogoContainerPopUp4'>
                            <div className="StbLogoPhot">
                                <img  className='logoStb' src={LogoStb}/>      
                            </div>
                        </div>

          

                        
      

          
                       
                        <div className='title4container'>
               <h4 className='title4'> 
               <h4 className='phraseintro'>La demande de crédit passe principalement par 5 phases: </h4>

                    <h5> 
                       <ul> 
                         <li> La phase n°1 est la phase d'initiation ou la demande est créée. </li>
                         <li> La phase n°2 est la phase d'import des documents où vous devez importer les documents nécessaires. </li>
                         <li> La phase n°3 est la phase d'étude du dossier de la demande est étudiée par les services de la banque. </li>
                         <li> La phase n°4 est la phase de déclaration de la décision de la banque. </li>
                         <li> La phase n°5 est la dernière phase ,dans cette phase on fait la signature du contrat et le déblocage des fonds. </li>

                        
                       </ul>
                         </h5>
               </h4>

           </div>

            
            <div className="PopUpWindowTwoButtonsValidationContainer">

                            
<div   onClick={()=>{props.settriggerdemande4(!props.triggerdemande4);}} className="btn_annuler ButtonValidationPopUp">
    <h4> Annuler</h4>
</div>

<div  onClick={()=>{props.settriggerdemande4(!props.triggerdemande4);props.settriggerdemande5(true);}} className="btn_valider ButtonValidationPopUp">
    <h4> Suivant</h4>
</div>
    
</div>
           </div>



                    </div>

                </div>
            

        </>
            ):"";

}


export default PopUpWindowDemande4;