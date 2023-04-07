import { useState } from 'react'

import './PopUpWindowModification1.css'


import PhotoProfil from '../../composants/images/Portrait1.png'
import { queryAllByAltText } from '@testing-library/react';
import PopUpWindowAreYouSure from '../PopUpWindowAreYouSure/PopUpWindowAreYouSure';
import axios from 'axios';





const PopUpWindowModification1=(props)=>{

    window.id_personne_modif=window.id_update;

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

    
 


console.log(localStorage.getItem("PhotoProfilSessionClient"))

    const[file,setfile]=useState()
    const[UrlImageProfil2,setUrlImageProfil2]=useState(localStorage.getItem("PhotoProfilSessionClient"))
    const [newName,setnewName]=useState("")
    const [newPrnom,setnewPrnom]=useState("")
    const [newTel,setnewTel]=useState("")
    const [newMail,setnewMail]=useState("")


    const [newMp,setnewMp]=useState("")


    



const validerClick=()=>{
    updateAdmin(localStorage.getItem("ModifPersonId"));

alert("lkjlkjlkjlkjlkjlk"+localStorage.getItem("ModifPersonId"))

}

   

    const updateAdmin=(id)=>{


        if(!(newName.match(regex)) ||  (newName==""))
        {
            test_nom=false;

        }

        if((newName.match(regex)) && (newName!="") )
        {
            test_nom=true;

        }


        console.log(test_nom)
        
        


        
        if(test_nom===true){
        axios.put("http://localhost:3001/updateAdminName",{
            id:id,
            newName:newName
        })
        alert("Nom Modifié")
    }

    if(newPrnom!="azer"){
        axios.put("http://localhost:3001/updateAdminPrenom",{
            id:id,
            newPrnom:newPrnom
        })
    }
    

    if(newTel!="azer"){
        axios.put("http://localhost:3001/updateAdminTel",{
            id:id,
            newTel:newTel
        })
    }


    if(newMail!="azer"){
        axios.put("http://localhost:3001/updateAdminMail",{
            id:id,
            newMail:newMail
        })
    }



    if(newMp!="azer"){
        axios.put("http://localhost:3001/updateAdminMp",{
            id:id,
            newMp:newMp
        })
    }





    if(UrlImageProfil2!="azer"){
        axios.put("http://localhost:3001/updateAdminPhotoModif",{
            id:id,
            UrlImageProfil2:UrlImageProfil2
        })
    }



    
    








    if (test_nom==false){
        document.getElementById("nomInput").style.border='1px solid red'
        document.getElementById("errNom").style.display='flex'




    }

    if (test_nom==true){
        document.getElementById("errNom").style.display='none';
        document.getElementById("nomInput").style.border='1px solid black'


    }

       
    }



    const uploadImage2 = async () =>{
        const form = new FormData()
        form.append("file",file)
        form.append("upload_preset","YassineGn");
        await axios.post("https://api.cloudinary.com/v1_1/ddqjpcqum/upload",form).then((result)=>   setUrlImageProfil2(result.data.secure_url));

    }




  

   const triggering = ()=>{props.setTrigger(false)}
  

    const onClick1 =()=>{
        triggering();
    }
        
    


    return(props.trigger)  ?   (
    <>    
        
        
         <div className='bgModal'>
            <div className='PopUpWindowModification1Container'>
                <div className='PopUpWindowModification1'>
                    <div className='ModifierProfilTitleContainer'>
                        <div className='ModifierProfilTitle'>
                            <h4> Modifier Profil</h4>
                        </div>

                        <div className='closeTagContainer'>
                            <h4 onClick={()=>{props.setTrigger(false)}} id='closeButton' className='closeTag'>+</h4>
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

          

              

                    <div className='NumTelContainer'>
                        <div className='title NumTelInputContainerTitle'>
                           <div className='NumTelContainerTitle'> 
                                <h4> Numéro téléphone :</h4>
                           </div>
                           <div className='InputContainer'>
                           <input onChange={(e)=>  setnewTel(e.target.value)}  id='prenom_modif' type='text'></input>
                           </div>
                        </div>
                    </div>

                    <div className='AdresseMailContainer'>
                        <div className='title AdresseMailInputContainerTitle'>
                           <div className='AdresseMailContainerTitle'> 
                                <h4> Adresse mail :</h4>
                           </div>
                           <div className='InputContainer'>
                           <input onChange={(e)=>  setnewMail(e.target.value)}  id='prenom_modif' type='text'></input>
                           </div>
                        </div>
                    </div>

                    <div className='MotDePasseContainer'>
                        <div className=' title MotDePasseInputContainerTitle'>
                           <div className='MotDePasseContainerTitle'> 
                                <h4> Mot de passe :</h4>
                           </div>
                           <div className='InputContainer'>
                           <input onChange={(e)=>  setnewMp(e.target.value)}  id='prenom_modif' type='text'></input>
                           </div>
                        </div>
                    </div>

                

                   
                    </div>
                    </div>

                    <div className='SalaireContainer'>
                       

                        
                        
                        <div className='PaddingImage'>

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
                            <div id='AnnulerButton' className='ButtonContainer'>
                                <div onClick={triggering}  className=' '>
                                    <h5> Annuler </h5>
                                </div>
                            </div>


                            <div id='ValiderButton' className='ButtonContainer'>
                                <div onClick={validerClick}>
                                    <h5 > Valider</h5>
                                </div>
                            </div>



                        </div>
                    </div>


                    


                </div>

            </div>
        </div>

        <PopUpWindowAreYouSure></PopUpWindowAreYouSure>
    </>
    
    
    
    
    
    
    
    
    
    
    ) : "";
}


export default PopUpWindowModification1;