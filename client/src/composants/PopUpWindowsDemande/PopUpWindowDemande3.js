


import './PopUpWindowsDemande.css'
import LogoStb from '../../composants/images/Logo_STB.png'


import submit_icone from "../images/submit_icone.png"



const PopUpWindowDemande3 =(props)=>{


    return(props.triggerdemande3)  ?   (
        <>
            <div className="BgModalPopUp3">
                <div className="PopUpWindowDemande3Container">
                    <div className="PopUpWindowDemande3">
                        
                       <div onClick={()=>{props.settriggerdemande3(!props.triggerdemande3);}} className=' closingButtonContainer3'>
                           <h4 className='pointer closingButton3'> +</h4>
                       </div>
                       
                       
                       <div className='title3container'>
               <h4 className='title3'> 
                    Voici le résultat de la simulation
               </h4>

           </div>

                        
                        <div className='PopUpWindowSTBLogoContainer'>
                            <div className="PopUpWindowSTBLogo">
                                <img  className='logoStb' src={LogoStb}/>      
                            </div>
                        </div>

                        
      

           <div className='résultat_et_coordonnées_container'>
               <div className='coordonnées1_container coordonnées_container'>
               <div className='coordonnes_line'>
                        <h4> Type du crédit : </h4>
                    </div>  
                   
                    <div className='coordonnes_line'>
                        <h4> Montant : </h4>
                    </div>  

                    <div className='coordonnes_line'>
                        <h4> Mensualité : </h4>
                    </div> 

                    <div className='coordonnes_line'>
                        <h4> Duréée : </h4>
                    </div> 

                    <div className='coordonnes_line'>
                      { /* <h4> Taux d'intéret : </h4> */}
                    </div> 
                </div>  


                <div className='coordonnées2_container coordonnées_container'>
                <div className='coordonnes_line'>
                        <h4> {window.type} </h4>
                    </div> 
                   
                    <div className='coordonnes_line'>
                        <h4> {window.Montant} dt </h4>
                    </div>  

                    <div className='coordonnes_line'>
                        <h4> {window.mensualité}  dt</h4>
                    </div> 

                    <div className='coordonnes_line'>
                        <h4> {window.durée} mois  </h4>
                    </div> 

                    <div className='coordonnes_line'>
                      { /* <h4> {window.tauxdinteret} % </h4> */}
                    </div> 
                </div>  



       
                

               

                
                

           





                
            </div>

            
            <div className="PopUpWindowTwoButtonsValidationContainer">

                            
<div  onClick={()=>{props.settriggerdemande3(!props.triggerdemande3);}} className="btn_annuler ButtonValidationPopUp">
    <h4> Annuler</h4>
</div>

<div  onClick={()=>{props.settriggerdemande3(!props.triggerdemande3);props.settriggerdemande4(!props.triggerdemande4);}} className="btn_valider ButtonValidationPopUp">
    <h4> Suivant</h4>
</div>
    
</div>
           </div>



                    </div>

                </div>
            

        </>
            ):"";

}


export default PopUpWindowDemande3;