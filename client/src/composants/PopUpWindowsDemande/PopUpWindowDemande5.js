
import './PopUpWindowsDemande.css'
import LogoStb from '../../composants/images/Logo_STB.png'
import alertPhoto from '../../composants/images/alertPhoto.png'


import submit_icone from "../images/submit_icone.png"



const PopUpWindowDemande5 =(props)=>{
var liste_doc;

    if(window.type==="Crédit auto"){
        liste_doc=
        <p>
            <ul>
                <li> Une demande de crédit</li>
                <li> Pièce d'identité en cours de validité : passeport ou carte d'identité, titre de séjour.</li>
                <li> Un justificatif de revenu :(3 derniers bulletins de salaires) </li>
                <li> Un justificatif de domicile de moins de 3 mois :(quittance de loyer, facture d'énergie) </li>
                <li> Un justificatif de dépense :(Facture pro forma délivrée par le Concessionnaire, s'il s'agit d'une voiture neuve ou une promesse de vente et photocopie de la carte grise, s'il s'agit d'une voiture d'occasion.)</li>

            </ul>
        </p>

    }



    if(window.type==="Crédit Direct"){
        liste_doc=
        <p>
            <ul>
                <li>Une demande de crédit</li>
                <li> La dernière fiche de paie ou de pension (pour les salariés et les retraités)</li>
                <li> Un engagement de domiciliation des revenus et les relevés des six derniers mois pour les professions libérales et les commerçants n'ayant pas de courant d'affaires avec la banque </li>
                <li> La Déclaration Unique de Revenus pour les professions libérales et les commerçants</li>

            </ul>
        </p>

    }



    if(window.type==="Crédit Eslah"){
        liste_doc=
        <p>
            <ul>
                <li>Une demande de crédit</li>
                <li> La dernière fiche de paie </li>
                <li> Un engagement de domiciliation des revenus et les relevés des six derniers mois pour les professions libérales et les commençants n'ayant pas de courant d'affaires avec la banque.
 </li>
                <li> Les devis des travaux exécutés et des travaux restant à exécuter
</li>










            </ul>
        </p>

    }



    return(props.triggerdemande5)  ?   (
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

                 
                 <h3>
                 Les documents de {window.type} :

                 </h3>
                 
                    <h5>
                    {liste_doc}
                    </h5>
                        
                              </h4>

           </div>

            
            <div className="PopUpWindowTwoButtonsValidationContainer">

                            
<div   onClick={()=>{props.settriggerdemande5(!props.triggerdemande5);}} className="btn_annuler ButtonValidationPopUp">
    <h4> Annuler</h4>
</div>

<div onClick={()=>{props.settriggerdemande5(!props.triggerdemande5);props.settriggerdemande6(true);}} className="btn_valider ButtonValidationPopUp"  >
    <h4> Suivant</h4>
</div>
    
</div>
           </div>



                    </div>

                </div>
            

        </>
            ):"";

}


export default PopUpWindowDemande5;