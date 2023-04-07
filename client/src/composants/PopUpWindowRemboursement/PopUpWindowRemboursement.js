
import './PopUpWindowRemboursement.css'
import axios from 'axios';
import { useState,useEffect } from 'react';
import App from '../../App';
const PopUpWindowRemboursement =(props)=>{




    const AjoutRemboursement=()=>{
        const NomPrénom =document.getElementById("NomPrenomInput").value;
      {/*  const RIBInput =document.getElementById("RIBClientInput").value;  */}
        const MontantInput =document.getElementById("MontantInput").value;

      
        const TypeCréditInput =document.getElementById("TypeCréditInput").value;

        const DuréeInput =document.getElementById("DuréeInput").value;

        const IdDemandeInput=document.getElementById("IdDemandeInput").value

        const IdClientInput=document.getElementById("IdClientInput").value

        props.settriggerRemboursement(false);



        alert(NomPrénom+"  "+"  "+MontantInput+"   "+TypeCréditInput+"     "+DuréeInput)



        var today = new Date();

    var date = today.getDate() +'-'+(today.getMonth()+1)+'-'+  today.getFullYear();
    



        axios.post("http://localhost:3001/createRemboursement",
        {
        NomPrénomClient:NomPrénom,
        RIB:"notdef",
        MontantPayé:MontantInput,
        TypeCrédit:TypeCréditInput,
        Durée:DuréeInput,
        dateCréation:date,
        idDemande:IdDemandeInput,
        idClient:IdClientInput

                                                     
    }).then((response)=>{
    alert("Remboursemnt Created")
    })


    }
















    return(props.triggerRemboursement)  ?   (
        <>
            <div className="BgModalPopUp">
                <div className="PopUpWindowDemande1Container">
                    <div className="PopUpWindowRemboursement">
                        
                     <div className='boutonXContainer'>
                      <h1 className='boutonX' onClick={()=>{props.settriggerRemboursement(false);}}> +</h1>
                      </div>
                        <div className="PopUpWindowDemade1DescriptionContainer">
                            <div className='PopUpWindowDemade1Description'>
                              <h3>  Ajouter un nouveau remboursement </h3>
                            </div>
                           

                        </div>


                        <div className='RemboursementForm'>
                            <div className='cadre'>
                                
                                <div className='Block1'>
                                    <div className='inputLabelContainer'>
                                        <h4> Nom et Prénom du client : </h4>

                                    </div>

                               {/*     <div className='inputLabelContainer'>
                                        <h4> RIB du client : </h4>

    </div>  */}

                                    <div className='inputLabelContainer'>
                                        <h4> Montant du payement : </h4>

                                    </div>

                                    <div className='inputLabelContainer'>
                                        <h4> Type du crédit : </h4>

                                    </div>




                                    <div className='inputLabelContainer'>
                                        <h4> Durée : </h4>

                                    </div>

                                    <div className='inputIdDemandeContainer'>
                                        <h4> Id Demande : </h4>

                                    </div>

                                    <div className='inputIdDemandeContainer'>
                                        <h4> Id Client : </h4>

                                    </div>


                                    




                                </div>

                                <div className='Block1'>
                                    <div className='inputLabelContainer'>
                                        <input id="NomPrenomInput" type="text"/>

                                    </div>

                             {/*       <div className='inputLabelContainer'>
                                        <input id='RIBClientInput' type="text"/>

                                    </div>

*/}

                                    <div className='inputLabelContainer'>
                                        <input id='MontantInput' type="text"/>

                                    </div>

                                    <div className='inputLabelContainer'>
                                        <input id='TypeCréditInput' type="text"/>

                                    </div>


                   
                                    <div className='inputLabelContainer'>
                                        <input id='DuréeInput' type="text"/>

                                    </div>



                                    <div className='inputLabelContainer'>
                                        <input id='IdDemandeInput' type="text"/>

                                    </div>

                                    
                                    <div className='inputLabelContainer'>
                                        <input id='IdClientInput' type="text"/>

                                    </div>



                                    



                                </div>




                            </div>
                        </div>


                        <div className="PopUpWindowTwoButtonsValidationContainer">
                            
                            <div onClick={()=>{props.settriggerRemboursement(false);}} className="btn_annuler ButtonValidationPopUp">
                                <h4> Annuler</h4>
                            </div>

                            <div onClick={AjoutRemboursement} className="btn_valider ButtonValidationPopUp">
                                <h4> Ajouter</h4>
                            </div>
                        </div>


                    </div>

                </div>
            
            </div>
            


        </>
    ):"";
}


export default PopUpWindowRemboursement;