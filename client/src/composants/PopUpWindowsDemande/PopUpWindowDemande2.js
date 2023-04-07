import './PopUpWindowsDemande.css'
import LogoStb from '../../composants/images/Logo_STB.png'

import Simulateur from '../simulateur/simulateur'

import submit_icone from "../images/submit_icone.png"

import { useState } from 'react'



const PopUpWindowDemande2 =(props)=>{



    const [typeCrédit,settypeCrédit]=useState("")
    const [montant,setmontant]=useState("")
    const [durée,setdurée]=useState("")



    const loaddd=()=>{
        document.getElementById("DuréeCréditDirect").style.display='none';
        document.getElementById("DuréeCréditEslah").style.display='none';
        document.getElementById("DuréeCréditauto").style.display='none';
        document.getElementById("montantCréditEslah").style.display='none';
        document.getElementById("montantCréditDirect").style.display='none';
        document.getElementById("montantCréditauto").style.display='none';

        settypeCrédit("")
        setmontant("")
        setdurée("")




        
        }


        const clickingRésulat=()=>{
            if(typeCrédit==="Crédit auto"){
                setmontant (document.getElementById("montantCréditauto").value);
                setdurée(document.getElementById("duréeCréditauto").value);
               // var Mensualité = [capital × (TAEG/12)]/[1 – (1 + (TAEG/12) – (12 × nombre d'années de remboursement))]
        
        
               var Mensualité =parseFloat(montant) * (0.0306/12)  /   1 - (1 + (0.0306/12) - (12 * parseFloat(durée))) 
        
                alert("Le type de crédit est "+typeCrédit+" le montant est "+montant+" La durée est "+durée +"et la mensualité est "+Mensualité)
        
            }
        
        
        
        
            if(typeCrédit==="Crédit Eslah"){
                setmontant (document.getElementById("montantCréditEslah").value);
                setdurée(document.getElementById("DuréeCréditEslah").value);
               // var Mensualité = [capital × (TAEG/12)]/[1 – (1 + (TAEG/12) – (12 × nombre d'années de remboursement))]
        
        
               var Mensualité = parseFloat(montant) * (0.0306/12)  /   1 - (1 + (0.0306/12) - (12 * parseFloat(durée))) 
        
                alert("Le type de crédit est <"+typeCrédit+">\nLe montant est <"+montant+"dt>\nLa durée est <"+durée +" Mois>\nLa mensualité est <"+Mensualité+">")
        
            }
        
        
        
        
        
            if(typeCrédit==="Crédit Direct"){
                setmontant (document.getElementById("montantCréditDirect").value);
                setdurée(document.getElementById("DuréeCréditDirect").value);
               // var Mensualité = [capital × (TAEG/12)]/[1 – (1 + (TAEG/12) – (12 × nombre d'années de remboursement))]
        
        
               var Mensualité = parseFloat(montant) * (0.0306/12)  /   1 - (1 + (0.0306/12) - (12 * parseFloat(durée))) 
        
                alert("Le type de crédit est "+typeCrédit+" le montant est "+montant+" La durée est "+durée +"et la mensualité est "+Mensualité)
        
            }
        
        
        
        
        
        
        
        
        
            
        }

        
const clicking2=()=>{
}


const clicking=()=>{
    if(document.getElementById("type_créditt").value==="Crédit auto"){
       


        settypeCrédit("Crédit auto");


        document.getElementById("DuréeCréditDirect").style.display='none';
        document.getElementById("DuréeCréditEslah").style.display='none';



        document.getElementById("montantCréditDirect").style.display='none';
        document.getElementById("montantCréditEslah").style.display='none';


        document.getElementById("duréeVierge").style.display='none';
        document.getElementById("montantvierge").style.display='none';


        



        document.getElementById("DuréeCréditauto").style.display='flex';
        document.getElementById("montantCréditauto").style.display='flex';


    }

        if(document.getElementById("type_créditt").value==="Crédit Direct"){

            settypeCrédit("Crédit Direct");


            document.getElementById("DuréeCréditDirect").style.display='flex';
            document.getElementById("DuréeCréditEslah").style.display='none';
    
    
    
            document.getElementById("montantCréditDirect").style.display='flex';
            document.getElementById("montantCréditEslah").style.display='none';
    
    
            document.getElementById("duréeVierge").style.display='none';
            document.getElementById("montantvierge").style.display='none';
    
    
    
            document.getElementById("DuréeCréditauto").style.display='none';
            document.getElementById("montantCréditauto").style.display='none';
      
      
      
    }



    if(document.getElementById("type_créditt").value==="Crédit Eslah"){


        settypeCrédit("Crédit Eslah");


        document.getElementById("DuréeCréditDirect").style.display='none';
        document.getElementById("DuréeCréditEslah").style.display='flex';



        document.getElementById("montantCréditDirect").style.display='none';
        document.getElementById("montantCréditEslah").style.display='flex';


        document.getElementById("duréeVierge").style.display='none';
        document.getElementById("montantvierge").style.display='none';



        document.getElementById("DuréeCréditauto").style.display='none';
        document.getElementById("montantCréditauto").style.display='none';



    }




}


    const simulation=()=>{






if (typeCrédit==="Crédit Direct"){

    var Mensualité = parseFloat(document.getElementById("montantCréditDirect").value) * (0.0306/12)  /   1 - (1 + (0.0306/12) - (12 * parseFloat(document.getElementById("DuréeCréditDirect").value))) 


    var roundMens=Math.round(Mensualité)


        window.Montant=document.getElementById("montantCréditDirect").value;
        window.tauxdinteret=6.25
        window.durée= document.getElementById("DuréeCréditDirect").value;
        window.mensualité=roundMens
        window.type=typeCrédit;
}


if (typeCrédit==="Crédit Eslah"){



    var Mensualité = parseFloat(document.getElementById("montantCréditEslah").value) * (0.0306/12)  /   1 - (1 + (0.0306/12) - (12 * parseFloat(document.getElementById("DuréeCréditEslah").value))) 


    var roundMens=Math.round(Mensualité)





    window.Montant=document.getElementById("montantCréditEslah").value;
    window.tauxdinteret=6.25
    window.durée= document.getElementById("DuréeCréditEslah").value;
    window.mensualité=roundMens
    window.type=typeCrédit;
}

     
       





if (typeCrédit==="Crédit auto"){



    var Mensualité = parseFloat(document.getElementById("montantCréditauto").value) * (0.0306/12)  /   1 - (1 + (0.0306/12) - (12 * parseFloat(document.getElementById("DuréeCréditauto").value))) 


    var roundMens=Math.round(Mensualité)





    window.Montant=document.getElementById("montantCréditauto").value;
    window.tauxdinteret=6.25
    window.durée= document.getElementById("DuréeCréditauto").value;
    window.mensualité=roundMens
    window.type=typeCrédit;
}
















    }


    return(props.triggerdemande2)  ?   (
        <>
            <div onLoad={loaddd} className="BgModalPopUp2">
                <div className="PopUpWindowDemande2Container">
                    <div className="PopUpWindowDemande2">
                        
                       <div  onClick={()=>{props.settriggerdemande2(!props.triggerdemande2);}} className='closingButtonContainer'>
                           <h4 className='closingButton'> +</h4>
                       </div>
                       
                       
                        <div className="PopUpWindowDemade2DescriptionContainer">
                                               
  
                            <h4 className="PopUpWindowDemade2Description">Commencez par simuler le crédit </h4>
        
                        </div>

                        
                        <div className='PopUpWindowSTBLogoContainer'>
                            <div className="PopUpWindowSTBLogo">
                                <img  className='logoStb' src={LogoStb}/>      
                            </div>
                        </div>

                        
                        <div className='combowetContainer'>
                        <div className="comboboxes_container_PopUp">






                        <div onLoad={loaddd} className="comboboxes_container">
                <div className="combo_stand type_crédit_combobox">

                    <select onChange={clicking}  className="combo_stand " name="type_crédit" id="type_créditt">
                        <option  value="Type1">Type du crédit</option>
                        <option onClick={clicking2} value="Crédit auto">Crédit auto</option>
                        <option value="Crédit Direct">Crédit Direct</option>
                        <option value="Crédit Eslah">Crédit Eslah</option>
                    </select>

                </div>


                <div className="ao elCombMont Montant">
                        <select className="combo_stand " name="type_crédit" id="montantvierge">
                            <option value="0">Montant</option>
                        </select>
                </div>



                <div className="ao elCombDur Durée">
                    <select className="combo_stand " name="type_crédit" id="duréeVierge">
                        <option value="0">Durée</option>
                    </select>
                </div>




                <div className="ao elCombMont Montant">

                        <select className="combo_stand " name="type_crédit" id="montantCréditEslah">
                        
                        <option value="0">Montant</option>
                        <option value="55000">55000 dt</option>

                        <option value="50000">50000 dt</option>
                        <option value="45000">45000 dt</option>
                        <option value="40000">40000 dt</option>
                        <option value="35000">35000 dt</option>
                        <option value="30000">30000 dt</option>
                        <option value="25000">25000 dt</option>
                        <option value="20000">20000 dt</option>
                        <option value="15000">15000 dt</option>

                        <option value="10000">10000 dt</option>
                        <option value="7500">7500 dt</option>
                        <option value="5000">5000 dt</option>
                        <option value="2500">2500 dt</option>



                        </select>
                </div>

                <div className="ao elCombDur Durée">
                    <select className="combo_stand " name="type_crédit"  id="DuréeCréditEslah">
                            <option value="Type1">Durée</option>

                            <option id='type60' value="60">60 Mois</option>
                            <option id='type54' value="54">54 Mois</option>
                            <option id='type48' value="48">48 Mois</option>
                            <option id='type42' value="42">42 Mois</option>

                            <option id='type36' value="36">36 Mois</option>
                            <option id='type30' value="30">30 Mois</option>
                            <option id='type24' value="24">24 Mois</option>
                            <option id='type18' value="18">18 Mois</option>
                            <option id='type12' value="12">12 Mois</option>
                            <option id='type6' value="6">6 Mois</option>

                        </select>

                </div>


                <div className="ao elCombMont Montant">

                        <select className="combo_stand " name="type_crédit" id="montantCréditauto">
                        
                        <option value="0">Montant</option>
                        <option value="45000">50000 dt</option>

                        <option value="45000">45000 dt</option>
                        <option value="40000">40000 dt</option>
                        <option value="35000">35000 dt</option>
                        <option value="30000">30000 dt</option>
                        <option value="25000">25000 dt</option>
                        <option value="20000">20000 dt</option>
                        <option value="15000">15000 dt</option>

                        <option value="10000">10000 dt</option>
                        <option value="7500">7500 dt</option>
                        <option value="5000">5000 dt</option>
                        <option value="2500">2500 dt</option>



                        </select>
                </div>

                <div className="ao elCombDur Durée" >
                    <select className="combo_stand "  id="DuréeCréditauto">
                            <option value="Type1">Durée</option>

      


                            <option  value="84">84 Mois</option>
                            <option  value="78">78 Mois</option>

                            <option  value="72">72 Mois</option>
                            <option  value="66">66 Mois</option>
                            <option  value="60">60 Mois</option>
                            <option  value="54">54 Mois</option>
                            <option  value="48">48 Mois</option>
                            <option  value="42">42 Mois</option>





                            <option  value="36">36 Mois</option>
                            <option  value="30">30 Mois</option>
                            <option  value="24">24 Mois</option>
                            <option  value="18">18 Mois</option>
                            <option  value="12">12 Mois</option>
                            <option value="6">6 Mois</option>

                        </select>

                </div>




                <div className="ao elCombMont Montant">

                        <select className="combo_stand " name="type_crédit" id="montantCréditDirect">
                        
                        <option value="0">Montant</option>
                        <option value="40000">40000 dt</option>
                        <option value="35000">35000 dt</option>
                        <option value="30000">30000 dt</option>
                        <option value="25000">25000 dt</option>
                        <option value="20000">20000 dt</option>
                        <option value="15000">15000 dt</option>

                        <option value="10000">10000 dt</option>
                        <option value="7500">7500 dt</option>
                        <option value="5000">5000 dt</option>
                        <option value="2500">2500 dt</option>



                        </select>
                </div>











                <div className="ao elCombDur Durée">
                    <select className="combo_stand " name="type_crédit" id="DuréeCréditDirect">
                            <option value="Type1">Durée</option>

      

                            <option id='type36' value="36">36 Mois</option>
                            <option id='type30' value="30">30 Mois</option>
                            <option id='type24' value="24">24 Mois</option>
                            <option id='type18' value="18">18 Mois</option>
                            <option id='type12' value="12">12 Mois</option>
                            <option id='type6' value="6">6 Mois</option>

                        </select>

                </div>


                <div   onClick={
                    ()=>{
                        props.settriggerdemande2(!props.triggerdemande2) ;
                        props.settriggerdemande3(!props.triggerdemande3);
                        simulation()
                    }
                    } className="pointer result_button">
                   <h5> Résultat </h5>
                    <img id="result_button" className="icone_scale" src={submit_icone}></img>

                </div>

</div>




















































    

           


            </div>

                        </div>

                        <div className="PopUpWindowTwoButtonsValidationContainer">

                            
                            <div onClick={()=>{props.settriggerdemande2(!props.triggerdemande2);}} className="btn_annuler ButtonValidationPopUp">
                                <h4> Annuler</h4>
                            </div>

                            <div onClick={()=>{props.settriggerdemande2(!props.triggerdemande2);props.settriggerdemande3(!props.triggerdemande3);simulation();}} className="btn_valider ButtonValidationPopUp">
                                <h4> Suivant</h4>
                            </div>
                                
                        </div>


                    </div>

                </div>
            
            </div>

        </>
        ):"";

}


export default PopUpWindowDemande2;