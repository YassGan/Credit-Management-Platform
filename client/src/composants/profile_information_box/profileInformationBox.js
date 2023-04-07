


import pdp from "../images/pdp.png"
import info_icone from "../images/info_icone.png"
import './profileInformationBox.css'
import { useState } from "react"




const ProfileInformationBox=(props)=>{


  


    return(
        <div className="profile_container">


            <div >
                <div className="profile_box_container">
                    <div className="profile_box">
                 
                        
                        <div className="photo_information_container">
                            <div className="photo_id_box">
                                
                                    <div className="photo_container">
                                        <img className="profile_photo_scale" src={props.photo}></img>
                                    </div>

                                    <div className="nom_prenom_id_container1">
                                        <div className="nom_prénom_container1">
                                            <h4 id="nom">{props.nom}</h4>
                                            <h4>{props.prénom}</h4>
                                        </div>
                                
                                    </div>
                                

                            </div>

                            <div className="information_box">
                                <div className="information_box_title">
                                    
                                    <div className="informaton_icone_container">
                                        <img className="info_icone_scale " src={info_icone}></img>    
                                    </div>
                                    
                                    <h4>Informations générales</h4>    
                                </div>

                                <div className="information_2_boxes_container">
                                    <div className="info_one_box left_box">
                                        <div className="info_block">
                                             <h5 className="infoEl">Date d'inscription : </h5>
                                             <h5 className="infoEl">Nom Complet : </h5>
                                             <h5 className="infoEl">Date de naissance : </h5>
                                             <h5 className="infoEl">Contact :</h5>
                                        </div>
                                        
                                        <div className="info_content_block">
                                            <h5 className="infoEl">{props.date_d_inscription} </h5>
                                            <h5 className="infoEl">{props.nom} {props.prénom} </h5>
                                            <h5 className="infoEl">{props.date_de_naissance} </h5>
                                            <h5 className="infoEl">{props.NumTel} </h5>
                                        </div>
                                    
                                    </div>

                                    <div className="info_one_box right_box">


                                    <div className="info_block">
                                             <h5 className="infoEl">Adresse mail : </h5>
                                             <h5 className="infoEl">CIN : </h5>

                                        </div>
                                        
                                        <div className="info_content_block">
                                            <h5 className="infoEl">{props.AdresseMail} </h5>
                                            <h5 className="infoEl">{props.NumCIN}</h5>

                                        </div>


                                    </div>

                                </div>

                            </div>
                            </div>
         
                    </div>         


                </div>
            </div>











        </div>
    )
}

export default ProfileInformationBox;