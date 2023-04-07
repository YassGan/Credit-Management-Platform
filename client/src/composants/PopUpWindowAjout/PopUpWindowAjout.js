import { useState } from 'react'

import './PopUpWindowAjout.css'

import '../PopUpWindowModification1/PopUpWindowModification1.css'



import PhotoProfil from '../../composants/images/Portrait1.png'
import { queryAllByAltText } from '@testing-library/react';
import PopUpWindowAreYouSure from '../PopUpWindowAreYouSure/PopUpWindowAreYouSure';
import axios from 'axios';





const PopUpWindowAjout=(props)=>{
    const [newName,setnewName]=useState("")
    const [newPrnom,setnewPrnom]=useState("")
    const [newNumCIN,setnewNumCIN]=useState("")
    const [newDateNaissance,setnewDateNaissance]=useState("")
    const [newNumTel,setnewNumTel]=useState("")
    const [newAdresseMail,setnewAdresseMail]=useState("")
    const [newMotDePasse,setnewMotDePasse]=useState("")
    const [newProfession,setnewProfession]=useState("")
    const [newAdresse,setnewAdresse]=useState("")
    const[UrlImageProfil2,setUrlImageProfil2]=useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973461__340.png")



const ajouterfunction=()=>{
    props.setTriggerAjout(false);
    axios.post("http://localhost:3001/createUser",
    {
    name:newName,
    prnom:newPrnom,
    PhotoProfil:UrlImageProfil2,
      
    mail:newAdresseMail,
    password:newMotDePasse,
    profession:newProfession,
    NumCIN:newNumCIN,
    NumTel:newNumTel,
    Adresse:newAdresse,
    DatedeNaissance:newDateNaissance


   

}).then((response)=>{
alert("user created")
})
}


    const [AffichWindow,setAffichWindow]=useState(true)


    const [errorMessageNom,seterrorMessageNom]=useState("Le nom ne doit avoir que des lettres")
    const [errorMessagePrenom,seterrorMessagePrenom]=useState("Le prénom ne doit avoir que des lettres")
    const [errorMessageMail,seterrorMessageMail]=useState("Veuillez introduire une adresse valide")
    const [errorMessagePassword,seterrorMessagePassword]=useState("le mot de passe doit etre solide")
    const [errorMessagePasswordconfirmation,seterrorMessagePasswordconfirmation]=useState("Les mots de passe ne sont pas compatibles")

    var test_nom;
    var test_prenom;
    var test_adressemail;
    var test_motdepasse;
    var test_confirmermotdepasse;

    const regex=/^[a-zA-Z\s]*$/;

    

    const[file,setfile]=useState()


    const uploadImage2 = async () =>{
        
        const form = new FormData()
        form.append("file",file)
        form.append("upload_preset","YassineGn");
        await axios.post("https://api.cloudinary.com/v1_1/ddqjpcqum/upload",form).then((result)=>   setUrlImageProfil2(result.data.secure_url));

    }




  

   const triggering = ()=>{props.setTriggerAjout(false)}
  

    const onClick1 =()=>{
        triggering();
    }
        
    


    return(props.triggerAjout)  ?   (
    <>    
        
        
         <div className='bgModal'>
            <div className='PopUpWindowModification1Container'>
                <div className='PopUpWindowModification1'>
                    <div className='ModifierProfilTitleContainer'>
                        <div className='ModifierProfilTitle'>
                            <h4> Ajouter Client</h4>
                        </div>

                        <div className='closeTagContainer'>
                            <h4 onClick={()=>{props.setTriggerAjout(false)}} id='closeButton' className='closeTag'>+</h4>
                            {props.children}
                        </div>


                    </div>

                    <hr></hr>

                    <div className='input_containers'>
                    <div>

                    <div className='NomContainer'>
                        <div className='title NomInputContainerTitle'>
                           <div className='NomContainerTitle'> 
                                <h4> Nom :</h4>
                           </div>
                           <div className=' InputContainer'>
                                <input id="nomInput"  onChange={(e)=>  setnewName(e.target.value)}  type='text'></input>
                                <span id='errNom'> Saisissez un nom valide</span>
                           </div>
                        </div>
                    </div>

                    <div className='PrenomContainer'>
                        <div className='title PrenomInputContainerTitle'>
                           <div className='PrenomContainerTitle'> 
                                <h4> Prénom :</h4>
                           </div>
                           <div className='InputContainer'>
                                <input onChange={(e)=>  setnewPrnom(e.target.value)}  id='prenom_modif' type='text'></input>
                                
                           </div>
                        </div>
                    </div>

                    <div className='CINContainer'>
                        <div className='title CINInputContainerTitle'>
                           <div className='CINContainerTitle'> 
                                <h4> Carte d'identité nationale :</h4>
                           </div>
                           <div className='InputContainer'>
                                <input onChange={(e)=>  setnewNumCIN(e.target.value)}  id='NumCIN_modif' type='text'></input> 
                           </div>
                        </div>
                    </div>

                    <div className='DateCINContainer'>
                        <div className='title DateCINInputContainerTitle'>
                           <div className='DateCINContainerTitle'> 
                                <h4> Date de délivrance :</h4>
                           </div>
                           <div className='InputContainer'>
                                <input  id='Datedeliv_modif' type='Date'></input>
                           </div>
                        </div>
                    </div>

                    <div className='DateNaissanceContainer'>
                        <div className='title DateNaissanceInputContainerTitle'>
                           <div className='DateNaissanceContainerTitle'> 
                                <h4> Date de naissance :</h4>
                           </div>
                           <div className='InputContainer'>
                                <input onChange={(e)=>  setnewDateNaissance(e.target.value)} id='DateNaissance_modif' type='Date'></input>
                           </div>
                        </div>
                    </div>

                    <div className='NumTelContainer'>
                        <div className='title NumTelInputContainerTitle'>
                           <div className='NumTelContainerTitle'> 
                                <h4> Numéro téléphone :</h4>
                           </div>
                           <div className='InputContainer'>
                                <input onChange={(e)=>  setnewNumTel(e.target.value)} id='NumTel_modif' type='text'></input>
                           </div>
                        </div>
                    </div>

                    <div className='AdresseMailContainer'>
                        <div className='title AdresseMailInputContainerTitle'>
                           <div className='AdresseMailContainerTitle'> 
                                <h4> Adresse mail :</h4>
                           </div>
                           <div className='InputContainer'>
                                <input onChange={(e)=>  setnewAdresseMail(e.target.value)} id='Adresse_modif' type='text'></input>
                           </div>
                        </div>
                    </div>

                    <div className='MotDePasseContainer'>
                        <div className=' title MotDePasseInputContainerTitle'>
                           <div className='MotDePasseContainerTitle'> 
                                <h4> Mot de passe :</h4>
                           </div>
                           <div className='InputContainer'>
                                <input   onChange={(e)=>  setnewMotDePasse(e.target.value)} id='MotdePasse_modif' type='text'></input>
                           </div>
                        </div>
                    </div>

                    <div className='ProfessionContainer'>
                        <div className='title ProfessionInputContainerTitle'>
                           <div className='ProfessionContainerTitle'> 
                                <h4> Profession :</h4>
                           </div>
                           <div className='InputContainer'>
                                <input onChange={(e)=>  setnewProfession(e.target.value)} id='Profession_modif' type='text'></input>
                           </div>
                        </div>
                    </div>

                    <div className='SalaireContainer'>
                        <div className='title SalaireInputContainerTitle'>
                           <div className='SalaireContainerTitle'> 
                                <h4> Adresse :</h4>
                           </div>
                           <div className='InputContainer'>
                                <input onChange={(e)=>  setnewAdresse(e.target.value)} id='Salaire_modif' type='text'></input>
                           </div>
                        </div>
                    </div>
                    </div>
                    </div>

                    <div className='SalaireContainer'>
                       

                        
                        
                        <div className=''>

                                <div className='InputUploadContainer'>       
                                   <div className='InputButton'>
                                    <input className='InputButton' id='inputButtnoImg' type="file" onChange= { (e) => setfile(e.target.files[0])} />
                                    </div>
                                    <div className='uploadImgbtn'>
                                        <button className='uploadImgbtnvierge' onClick={uploadImage2}> Upload </button>
                                    </div>
                                </div>

                                <div className='imgcontainer'>
                                <img className='ProfileUploadingImageScale2' src={UrlImageProfil2}/>
                                </div>

                        </div>




            


                        <div className='twoButtonsContainerValidation'>
                            <div onClick={()=>{props.setTriggerAjout(false)}} id='AnnulerButton' className='ButtonContainer'>
                                <div   className=' '>
                                    <h5> Annuler </h5>
                                </div>
                            </div>


                            <div onClick={ajouterfunction} id='ValiderButton' className='ButtonContainer'>
                                <div>
                                    <h5 > Valider</h5>
                                </div>
                            </div>



                        </div>
                    </div>


                    


                </div>

            </div>

        </div>

    </>
    
    
    
    
    
    
    
    
    
    
    ) : "";
}


export default PopUpWindowAjout;