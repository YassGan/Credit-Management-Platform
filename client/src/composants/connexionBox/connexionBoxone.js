
import './connexionBoxone.css'
import logo from "../images/Logo_STB.png"
import { useState } from 'react'
import { useEffect } from 'react'

import Admin_dahboard from '../../Pages/Pages_Admin_Dahboard/Admin_Dashboard'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'



const ConnexionBoxone=()=>{
    window.TabDemandesClienttrouvéAffich=[]

    var SessionAdmin={_id:"test",name:"test",prenom:"test",mail:"test",password:"test",profession:"test",
                        NumCIN:"test",NumTel:"test",Adresse:"test",DatedeNaissance:"test",
                        PhotoProfil:"test"
};

window.SessionAdmin=SessionAdmin;//declaring global variable by window object  



var SessionClient={_id:"test",name:"test",prenom:"test",mail:"test",password:"test",profession:"test",
NumCIN:"test",NumTel:"test",Adresse:"test",DatedeNaissance:"test",
PhotoProfil:"test"
};

window.SessionClient=SessionClient;//declaring global variable by window object  






    
    const [tabUsers,settabUsers2]=useState([]);
    const [tabDemandes,settabDemandes]=useState([]);
    const [tabDemandesClientTrouvé,settabDemandesClientTrouvé]=useState({});




    const [listAdmin,setlistAdmin]=useState(["6246d9638bac223ea9eb436f","624735cc8bac223ea9eb446c"]);

    window.listAdmin=listAdmin;
    



    useEffect(()=>{
      axios.get("http://localhost:3001/getUsers").then((response)=>{
          settabUsers2(response.data)
      })
        },[])





    useEffect(()=>{
            axios.get("http://localhost:3001/getDemandes").then((response)=>{
                settabDemandes(response.data)
            })
              },[])




    const[Identifiant,setIdentifiant]=useState("")



    const [errorMessageEmail,seterrorMessageEmail]=useState("On n'a pas un compte avec cette adresse e-mail")
    const [errorMessagePassword,seterrorMessagePassword]=useState("Le mot de passe entré est incorrect.")



   const navigate= useNavigate();

    const HandleClick=(e)=>{






       /* const tabUsers=[

            {mail:"yacineguena@gmail.com",password:"123"},

            {mail:"hello@gmail.com",password:"1234"}
        
        ]  */


        const mail =document.getElementById("email").value; 
        const password =document.getElementById("password_input").value;



        var i;
        var j;
        var testEmail=false;
        var testPassword=false;
        var j;

        var User={mail:"test",password:"test"};

        for (i in tabUsers){
            if (tabUsers[i].mail==mail){
                    testEmail="true"
                    User=tabUsers[i]
                    j=i;

                    
                    break;
            }
            if (tabUsers[i].mail!=mail){
                testEmail="false"
            }
        }

        if(User.password==password){
            testPassword='true'
        }
        else{
            console.log("false password")
            testPassword="false"
        }
        

            


        if (testEmail=="false"){
            document.getElementById("EmailError").style.display='flex'
            document.getElementById("email").value="";
            document.getElementById("password_input").value=""
        }
    
        if ( (testEmail=="true") ){
            document.getElementById("EmailError").style.display='none'


        }

      

        if ( (testEmail=="true") && (testPassword=="false")){
            document.getElementById("PasswordError").style.display='flex'
            document.getElementById("password_input").value=""
        }

        if ( (testEmail=="true") && (testPassword=="true")){
            document.getElementById("PasswordError").style.display='none'
            console.log("Successful connection")



   




    {


    


// voir s'il s'agit d'une session admin ou d'une une sesison client
var k;
for (k in listAdmin)

   {
        if (listAdmin[k] === tabUsers[j]._id ){


            var SessionAdmin={id:"test",name:"test",prenom:"test",mail:"test",password:"test",profession:"test",
                NumCIN:"test",NumTel:"test",Adresse:"test",DatedeNaissance:"test",
                PhotoProfil:"test"
                };

                window.SessionAdmin._id=tabUsers[j]._id
                window.SessionAdmin.name=tabUsers[j].name
                window.SessionAdmin.prenom=tabUsers[j].prnom
                window.SessionAdmin.mail=tabUsers[j].mail
                window.SessionAdmin.password=tabUsers[j].password
                window.SessionAdmin.profession=tabUsers[j].profession
                window.SessionAdmin.NumCIN=tabUsers[j].NumCIN
                window.SessionAdmin.NumTel=tabUsers[j].NumTel
                window.SessionAdmin.Adresse=tabUsers[j].Adresse
                window.SessionAdmin.DatedeNaissance=tabUsers[j].DatedeNaissance
                window.SessionAdmin.PhotoProfil=tabUsers[j].PhotoProfil


                localStorage.setItem("nomSessionAdmin",window.SessionAdmin.name);
                localStorage.setItem("prenomSessionAdmin",window.SessionAdmin.prenom);
                localStorage.setItem("mailSessionAdmin",window.SessionAdmin.mail);
                localStorage.setItem("PassowrdSessionAdmin",window.SessionAdmin.password);
                localStorage.setItem("professionSessionAdmin",window.SessionAdmin.profession);
                localStorage.setItem("NumCINSessionAdmin",window.SessionAdmin.NumCIN);
                localStorage.setItem("NumTelSessionAdmin",window.SessionAdmin.NumTel);
                localStorage.setItem("AdresseSessionAdmin",window.SessionAdmin.Adresse);
                localStorage.setItem("DatedeNaissanceSessionAdmin",window.SessionAdmin.DatedeNaissance);
                localStorage.setItem("PhotoProfilSessionAdmin",window.SessionAdmin.PhotoProfil);
                localStorage.setItem("IdSessionAdmin",window.SessionAdmin._id);
                localStorage.setItem("IdUpdate",window.SessionAdmin._id);






                localStorage.setItem("ModifPersonId",window.SessionAdmin._id)
                

            console.log("session admin")

            localStorage.setItem("NavigationClickTimeLine","Admin");

            navigate('/p5')
            break;
            window.id_update= window.SessionAdmin._id;
        }
        else{

            var SessionClient={id:"test",name:"test",prenom:"test",mail:"test",password:"test",profession:"test",
            NumCIN:"test",NumTel:"test",Adresse:"test",DatedeNaissance:"test",
            PhotoProfil:"test"
            };

            window.SessionClient._id=tabUsers[j]._id
            window.SessionClient.name=tabUsers[j].name
            window.SessionClient.prenom=tabUsers[j].prnom
            window.SessionClient.mail=tabUsers[j].mail
            window.SessionClient.password=tabUsers[j].password
            window.SessionClient.profession=tabUsers[j].profession
            window.SessionClient.NumCIN=tabUsers[j].NumCIN
            window.SessionClient.NumTel=tabUsers[j].NumTel
            window.SessionClient.Adresse=tabUsers[j].Adresse
            window.SessionClient.DatedeNaissance=tabUsers[j].DatedeNaissance
            window.SessionClient.PhotoProfil=tabUsers[j].PhotoProfil

            window.id_update= window.SessionClient._id;


            localStorage.setItem("nomSessionCLient",window.SessionClient.name);
            localStorage.setItem("prenomSessionCLient",window.SessionClient.prenom);
            localStorage.setItem("mailSessionClient",window.SessionClient.mail);
            localStorage.setItem("PassowrdSessionClient",window.SessionClient.password);
            localStorage.setItem("professionSessionClient",window.SessionClient.profession);
            localStorage.setItem("NumCINSessionClient",window.SessionClient.NumCIN);
            localStorage.setItem("NumTelSessionClient",window.SessionClient.NumTel);
            localStorage.setItem("AdresseSessionClient",window.SessionClient.Adresse);
            localStorage.setItem("DatedeNaissanceSessionClient",window.SessionClient.DatedeNaissance);
            localStorage.setItem("PhotoProfilSessionClient",window.SessionClient.PhotoProfil);
            localStorage.setItem("IdSessionClient",window.SessionClient._id);
            localStorage.setItem("IdSessionClientMessage",window.SessionClient._id);

            localStorage.setItem("IdUpdate",window.SessionClient._id);


            localStorage.setItem("NavigationClickTimeLine","Client");




            localStorage.setItem("ModifPersonId",window.SessionClient._id)





var DemandeSessionClientToruvée =
{id_demande:"test",type_demande:"test",id_client_associé:"test",
durée:"test",taux_d_interet:"test",mensualité:"test",
id_phase1:"test",id_phase2:"test",id_phase3:"test",id_phase4:"test",
id_phase5:"test",statutGlobal:"test",Date_de_creation:"test"
};

let tabDemandesC=[]



var oo;


for(oo in tabDemandes){
if(tabDemandes[oo].id_client_associé=== localStorage.getItem("IdSessionClient"))
{

 
 /*   DemandeSessionClientToruvée.id_demande=tabDemandes[oo].id_demande
    DemandeSessionClientToruvée.type_demande=tabDemandes[oo].type_demande
    DemandeSessionClientToruvée.id_client_associé=tabDemandes[oo].id_client_associé
    DemandeSessionClientToruvée.durée=tabDemandes[oo].durée
    DemandeSessionClientToruvée.taux_d_interet=tabDemandes[oo].taux_d_interet
    DemandeSessionClientToruvée.mensualité=tabDemandes[oo].mensualité
    DemandeSessionClientToruvée.id_phase1=tabDemandes[oo].id_phase1
    DemandeSessionClientToruvée.id_phase2=tabDemandes[oo].id_phase2
    DemandeSessionClientToruvée.id_phase3=tabDemandes[oo].id_phase3
    DemandeSessionClientToruvée.id_phase4=tabDemandes[oo].id_phase4
    DemandeSessionClientToruvée.id_phase5=tabDemandes[oo].id_phase5
    DemandeSessionClientToruvée.statutGlobal=tabDemandes[oo].statutGlobal
    DemandeSessionClientToruvée.Date_de_creation=tabDemandes[oo].Date_de_creation*/

    tabDemandesC.push({"id_demande":tabDemandes[oo].id_demande,
                        "type_demande":tabDemandes[oo].type_demande,
                        "id_client_associé":tabDemandes[oo].id_client_associé,
                        "durée":tabDemandes[oo].durée,
                        "taux_d_interet":tabDemandes[oo].durée,
                        "mensualité":tabDemandes[oo].mensualité,
                        "id_phase1":tabDemandes[oo].id_phase1,
                        "id_phase2":tabDemandes[oo].id_phase2,
                        "id_phase3":tabDemandes[oo].id_phase3,
                        "id_phase4":tabDemandes[oo].id_phase4,
                        "id_phase5":tabDemandes[oo].id_phase5,
                        "statutGlobal":tabDemandes[oo].statutGlobal,
                        "Date_de_creation":tabDemandes[oo].Date_de_creation
                
                    })


}

}


localStorage.setItem("tabDemandesC",JSON.stringify(tabDemandesC));

// Getting data from the tab tabDemandeC
//  let retrieving = JSON.parse(localStorage.getItem("tabDemandesC"));






            navigate('/p9')


        }
    }
            }

            window.UserData=User;//declaring global variable by window object     
        }
    }

        


    const Ligne2=()=>{
        return(
            <div className='ligne2'> 
                <div className='logo_img_container'>
                    <img className='logo_img' src={logo}></img>
                </div>
            
            </div>
        )
    }



    //declaring global variable by window object  

   



    return(
        <>
        <Ligne2></Ligne2>
            <div className="connexionBoxoneContainer">
                <div className="connexionBoxone">
                    <form>
                    <div className='element_input_container'>
                        <div className='input_title'>
                            <h4> Adresse e-mail </h4>
                        </div>
                        <span id='EmailError' className='errorMessage'> {errorMessageEmail} </span>

                       <div className='input_element_writing' >
                            <input required onChange={e=>setIdentifiant(e.target.value)} placeholder='Adresse e-mail ' className='input_element' type="email" id="email" name="name"  size="29"/>
                        </div>

                    </div>

                    <div className='element_input_container'>
                        <div className='input_title'>
                            <h4> Mot de passe</h4>
                        </div>
                       <div className='input_element_writing' >
                            <input required placeholder='Mot de passe' className='input_element' type="password" id="password_input" name="password"  size="29"/>
                        </div>
                        <span id='PasswordError' className='errorMessage'> {errorMessagePassword} </span>


                    </div>

                     <div onClick={HandleClick} className='button_container'>
                        <div className='buttn se_connecter_button'>
                         <button  id='seConnecterButton'> Se connecter </button>

                        </div>
                    </div>

                    </form>
                    
                    <div className=' Mot_de_passe_oublié_container'>
                        <div className='Mot_de_passe_oublié_title'>
                            <h5> Mot de passe oublié ? </h5>
                        </div>
                    </div>

                    <div className='horizental_line_container'>
                        <hr className='horizental_line'></hr>
                    </div>

                    <Link to='/p3'>
                    <div className='button_container'>
                        <div className='buttn créer_nouveau_compte_btn'>
                         <h4> Créer nouveau compte </h4>
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
        </>
    )
    }



export default ConnexionBoxone;
