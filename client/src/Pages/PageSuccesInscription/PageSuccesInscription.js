import { useState } from 'react'
import logo from '../../composants/images/Logo_STB.png'
import './PageSuccesInscription.css'
import axios from 'axios'
import photoVierge from  '../../composants/images/photoVierge.jpg'
import { Navigate, useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'





const PageSuccesInscription =()=>{

    const[file,setfile]=useState()
    const[UrlImageProfil,setUrlImageProfil]=useState(photoVierge)


    const uploadImage = async () =>{
        
        const form = new FormData()
        form.append("file",file)
        form.append("upload_preset","YassineGn");
        await axios.post("https://api.cloudinary.com/v1_1/ddqjpcqum/upload",form).then((result)=>   setUrlImageProfil(result.data.secure_url));

    }

    window.PhotoProfil=UrlImageProfil;

    var NouveauUtilisateur={
        nom:window.NewUserData.nom,
        prenom:window.NewUserData.prenom,
        mail:window.NewUserData.mail,
        password:window.NewUserData.password,
        profession:window.NewUserData2.profession,
        NumCIN:window.NewUserData2.NumCIN,
        NumTel:window.NewUserData2.NumTel,
        Adresse:window.NewUserData2.Adresse,
        DatedeNaissance:window.NewUserData2.DatedeNaissance,
        PhotoProfil:window.PhotoProfil
    };


    const Line1=()=>{
        return(
            <>
            <div className="Line1ContainerPageSucces">
                <div className='LogoContainer'>
                    <img className='logoPageSucces' src={logo} />
                </div>

            </div>
            </>
        )
    }


    return(
        <>
        <div className='container'>
            <div className='line1container'>     
                   <Line1></Line1>
            </div>

            <div className='line2container'> 
                <div className='BoxPageSuccesContainer'>
                   
                    <div className='BoxSuccesGray'>
                        
                        <div className='BoxSuccesWhite'>
                            <div className='messagePageSucces'> 
                                <h2> Presque on y est : terminez la dernière étape et importez votre photo de profil </h2>
                            </div>
                           
                           <div className='importationboxContainer'>

                            <div className='importationbox'>

                                    <input id='inputImage' type="file" onChange= { (e) => setfile(e.target.files[0])} />
                                   
                                   <div className='boutonUploadContainer'>
                                    <button className='boutonUpload' onClick={uploadImage}> Upload </button>
                                    </div>


                                    <div className='ImageUploadedContainer'>
                                    <img className='ProfileUploadingImageScale' src={UrlImageProfil}/>
                                    </div>
                                
                                <div className='BoutonUploadLine'>
                                    <div className='boutonUploadeContainer'>
                                    </div>
                                </div>

                            </div>
                            </div>
                <div>
                </div>
                            <div className='ButtonTerminerLine'>
                            <div  className='TerminerButtonContainer'> 
                               
                               <Link to ='/p12'>
                                <div onClick={
()=>{

    axios.post("http://localhost:3001/createUser",{name:NouveauUtilisateur.nom,
                                                    prnom:NouveauUtilisateur.prenom,
                                                    mail:NouveauUtilisateur.mail,
                                                    password:NouveauUtilisateur.password,
                                                    profession:NouveauUtilisateur.profession,
                                                    NumCIN:NouveauUtilisateur.NumCIN,
                                                    NumTel:NouveauUtilisateur.NumTel,
                                                    Adresse:NouveauUtilisateur.Adresse,
                                                    DatedeNaissance:NouveauUtilisateur.DatedeNaissance,
                                                    PhotoProfil:NouveauUtilisateur.PhotoProfil                                                
                                                }).then((response)=>{
      alert("user created")
    })
  }
                                } className='TerminerButton'>
                                    <h4> Terminer </h4>
                                </div>
                                </Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
        </>
    )
}


export default PageSuccesInscription;