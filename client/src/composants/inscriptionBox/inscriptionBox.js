import './inscriptionBox.css'
import money_photoinscriptionBox from "../images/moneyy.png"
import logo from "../images/Logo_STB.png"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navigate, useNavigate } from 'react-router-dom'



const InscriptionBox=()=>{
    var NewUser={nom:"test",prenom:"test",mail:"test",password:"test"};

    window.NewUserData=NewUser;//declaring global variable by window object  


    const[Identifiant,setIdentifiant]=useState("")

    const navigate= useNavigate();




    const [errorMessageNom,seterrorMessageNom]=useState("Le nom ne doit avoir que des lettres")
    const [errorMessagePrenom,seterrorMessagePrenom]=useState("Le prénom ne doit avoir que des lettres")
    const [errorMessageMail,seterrorMessageMail]=useState("Veuillez introduire une adresse valide")
    const [errorMessagePassword,seterrorMessagePassword]=useState("le mot de passe doit etre solide")
    const [errorMessagePasswordconfirmation,seterrorMessagePasswordconfirmation]=useState("Les mots de passe ne sont pas compatibles")


    const handleValider=()=>{
        const nom_inscription =document.getElementById("nom_inscri").value; 
        const prenom_inscription =document.getElementById("prenom_inscri").value; 
        const AdresseMail_inscription =document.getElementById("AdresseMail_inscri").value; 
        const Password_inscription =document.getElementById("Password_inscri").value; 
        const PasswordConfirmation_inscription =document.getElementById("PasswordConfirmation_inscri").value; 




        //test nom
        var i;
        var test_nom;
        var test_prenom;
        var test_adressemail;
        var test_motdepasse;
        var test_confirmermotdepasse;

        var testToutestBien=false;


        const regex=/^[a-zA-Z\s]*$/;
        const regexEmail=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    
        //The string must contain at least 1 numeric character
        const regexPassword=/(?=.*[0-9])/;

            if(!(nom_inscription.match(regex)) ||  (nom_inscription==""))
            {
                test_nom=false;

            }

            if((nom_inscription.match(regex)) && (nom_inscription!="") )
            {
                test_nom=true;

            }

            if(!(prenom_inscription.match(regex))   ||  (prenom_inscription==""))
            {
                test_prenom=false;
            }

            if((prenom_inscription.match(regex))   &&  (prenom_inscription!=""))
            {
                test_prenom=true;
            }
        
            if(!(AdresseMail_inscription.match(regexEmail))   ||  (AdresseMail_inscription==""))
            {
                test_adressemail=false;
            }


            if((AdresseMail_inscription.match(regexEmail))  &&  (AdresseMail_inscription!=""))
            {
                test_adressemail=true;
            }


            if(!(Password_inscription.match(regexPassword)))
            {
                test_motdepasse=false;
            }

            if((Password_inscription.match(regexPassword)))
            {
                test_motdepasse=true;
            }


            var result = PasswordConfirmation_inscription.localeCompare(Password_inscription);

            if(result!=0){
                test_confirmermotdepasse=false;
                console.log(errorMessagePasswordconfirmation)

            }


            if(result==0){
                test_confirmermotdepasse=true;

            }

            if(test_nom==true && test_prenom==true && test_adressemail==true  && test_motdepasse==true && test_confirmermotdepasse==true ){
                


                
                NewUser.nom=nom_inscription;
                NewUser.prenom=prenom_inscription;
                NewUser.mail=AdresseMail_inscription;
                NewUser.password=Password_inscription;


                window.NewUserData=NewUser;//declaring global variable by window object  




                document.getElementById("boutonapparant").style.display='flex';
                navigate('/p4')



            }
       

            
     




            if (test_nom==false){
                document.getElementById("nomInputerr").style.display='flex';

            }

            if (test_nom==true){
                document.getElementById("nomInputerr").style.display='none';

            }


            if (test_prenom==false){
                document.getElementById("prenomInputerr").style.display='flex';

            }

            if (test_prenom==true){
                document.getElementById("prenomInputerr").style.display='none';

            }

            if (test_adressemail==false){
                document.getElementById("adressemailInputerr").style.display='flex';

            }

            if (test_adressemail==true){
                document.getElementById("adressemailInputerr").style.display='none';

            }


            if (test_motdepasse==false){
                document.getElementById("passwordInputerr").style.display='flex';

            }

            if (test_motdepasse==true){
                document.getElementById("passwordInputerr").style.display='none';

            }



            if (test_confirmermotdepasse==false){
                document.getElementById("confirmerpasswordInputerr").style.display='flex';

            }

            if (test_confirmermotdepasse==true){
                document.getElementById("confirmerpasswordInputerr").style.display='none';

            }
    }


    const Ligne2=()=>{
        return(
            <div className='ligne2'> 
                <div className='logo_img_containerinscriptionBox'>
                    <img className='logo_imginscriptionBox' src={logo}></img>
                </div>
            
            </div>
        )
    }



    return(
        <>
        <Ligne2></Ligne2>
            <div className="InscriptionBoxinscriptionBox">
                <div className="InscriptionBox_containerinscriptionBox">

                    <div className='Inscription_Box_leftinscriptionBox'>
                        <h1>Créer votre compte</h1>
                            <div className='input_information_containerinscriptionBox'>                   
                           
                           
                    <form>

                                <div className='nomPrenom_input_containerinscriptionBox'>
                                    
                                    <div>
                                            <div className='nom_inputinscriptionBox'>
                                                <label className='label_elementinscriptionBox'> Nom: </label>
                                                <input  placeholder='Entrez votre nom' onChange={e=>setIdentifiant(e.target.value)} className='input_elementinscriptionBox'  pattern='(/^[A-Za-z]+$/)'  type="text" id="nom_inscri" name="name" required  size="20"/>

                                            </div>

                                             <div>
                                                <span id='nomInputerr' className='errfontsize errorMessageNom'> {errorMessageNom} </span>
                                            </div>
                                    </div>
                                

                                    <div>
                                            <div className='prenom_inputinscriptionBox'>
                                                <label className='label_elementinscriptionBox'> Prenom: </label>
                                                <input className='input_elementinscriptionBox' placeholder='Entrez votre prénom' type="text" name="prenom_inscri"  id='prenom_inscri' required  size="20"/>
                                            </div>
                                           
                                            <div>
                                                <span id='prenomInputerr' className='errfontsize errorMessagePrenom'> {errorMessagePrenom} </span>
                                            </div>
                                    </div>

                                </div>



                                <div className='mailAdress_containerinscriptionBox'>
                                  <label className='label_elementinscriptionBox'> Adresse Mail :</label>
                                    <div className='adressInput'>
                                        <input id="AdresseMail_inscri"  placeholder='Adresse e-mail ' className='input_elementinscriptionBox widthMail'   type="email" required   />
        
                                        <div>
                                            <span id='adressemailInputerr' className='errfontsize errorMessagemail'> {errorMessageMail} </span>
                                        </div>
                                    </div>                             
                                </div>
                                
                                <div className='mail_adress_adviceinscriptionBox'>                        
                                    <h5>Vous pouvez utilisez des lettres, des chiffres et des points</h5>
                                </div>

                                <div className='motDePasse_input_containerinscriptionBox'>
                                    <div className='motDePasse1_inputinscriptionBox'>
                                        <label className='label_elementinscriptionBox'> Mot de passe :</label>
                                        <div>
                                            <input  placeholder='Entrer un mot de passe' className='input_elementinscriptionBox'  type="password" id="Password_inscri" name="Password_inscri" required size="20"/>
                                            <div>
                                                <span id='passwordInputerr' className='errfontsize errorMessagemail'> {errorMessagePassword} </span>
                                            </div>
                                        </div>    
                                    </div>

                                    <div className='Confirmer_inputinscriptionBox'>
                                        <label className='label_elementinscriptionBox'> Confirmer :</label>
                
                                        <div>
                                            <input placeholder='Resaisir le mot de passe' className='input_elementinscriptionBox' type="password"  id='PasswordConfirmation_inscri' name="PasswordConfirmation_inscri" required  size="20"/>

                                            <div>
                                                <span id='confirmerpasswordInputerr' className='errfontsize errorMessagemail'> {errorMessagePasswordconfirmation} </span>
                                            </div>
                                        </div>          
                                    </div>
                                </div>


                                <div className='mot_de_passe_adress_adviceinscriptionBox'>                        
                                    <h5>utiliser au minimum huit caractères, au moins une lettre et un chiffre :</h5>
                                </div>


                    </form>


                              

    

                                <div className='buttons_containerinformationBox'>
                                    
                                    <Link to='/p1'>
                                    <div className='buttninformationBox Accueil_btninformationBox'>
                                        <h4> Accueil</h4>
                                    </div>
                                    </Link>

                                  
                                    <div   id='boutonapparant'  className=' suivant_button_container'> 

                                        <div onClick={handleValider} className='suivant_btninformationBox buttninformationBox BoutonVliderContainer'>
                                              <div  className ='BoutonVlider'>
                                                  <h4 className=''>  Suivant</h4>
                                              </div>
                                        </div>

                                    </div>

                                </div>
                            
                            </div>
                            
                    </div>  

                    <div className='Inscription_Box_rightinformationBox'>
                    <img className='money_photoinscriptionBox' src={money_photoinscriptionBox}></img>

                    </div>


                </div>
            
            </div>
        </>
    )
}


export default InscriptionBox;