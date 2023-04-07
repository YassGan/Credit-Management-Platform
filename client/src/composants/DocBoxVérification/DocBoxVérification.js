



import './DocBoxVérification.css'





import CINPhoto from '../images/CINPhoto.png'
import Doucment from "../images/document.jpg"

import ValidatoinBox from '../ValidationBox/ValidationBox'




function DocBoxVérification(props){


 return(
    <>
        
    
           <div >
               
               <div className='ContainerPhotoDocuemnt'>
              



            


               <div className="titreDuBox">
                    <h3 className={props.statutDoc}> {props.titre}  </h3>    {/* on va changer le tag de h4 RectoCIN par props.titre */}  
                
                </div>

            
            
            
            <div className={props.photoDemandeBoxScale}>   {/* on va changer la className PhototDemandeBox par props.photoDemandeBoxScale (Cin ou Document normal) */}  

                <div className={props.photoimgBoxContainerScale}> {/* on va changer la className imgBoxContainerDemande par props.photoimgBoxContainerScale (Cin ou Document normal) */}

                    <div>     
                        <img className={props.photoimgBoxScale} src={props.UrlDocument} />  {/* on va changer la className imgScale par props.photoimgBoxScale (Cin ou Document normal) */}
                    </div>
                </div>


            </div>


            
            </div>

          
            </div>
            
    
    
    </>
)









}



export default DocBoxVérification;
