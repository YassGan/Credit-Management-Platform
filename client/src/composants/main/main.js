import "./main.css"
import pdp from "../images/pdp.png"
import info_icone from "../images/info_icone.png"
import ProfileInformationBox from "../profile_information_box/profileInformationBox"
import TitreDuMain from "../titreduMain/titreDuMain"
import { useState } from "react"
import { Link } from "react-router-dom"

const Main =(props)=>{



    const [id,setId]=useState("@1112")
    const [Statut,setStatut]=useState("Administrateur")
    const [prénom,setPrénom]=useState(localStorage.getItem("prenomSessionCLient"))
    const [nom,seNom]=useState(localStorage.getItem("nomSessionCLient"))
    const [date_de_naissance,setdate_de_naissance]=useState(localStorage.getItem("DatedeNaissanceSessionClient"))
    const [date_d_inscription,setdate_d_inscription]=useState("22/02/2022")
    const [NumTel,setNumTel]=useState(localStorage.getItem("NumTelSessionClient"))
    const [AdresseMail,setAdresseMail]=useState(localStorage.getItem("mailSessionClient"))
    const [NumCIN,setNumCIN]=useState(localStorage.getItem("NumCINSessionClient"))
    const [lienPhoto,setLienPhoto]=useState(localStorage.getItem("PhotoProfilSessionClient"))

  
  





  









    return(
        <main className="main">
            
            <TitreDuMain titre={"Consulter votre dashboard"} description={"Ce sont les éléments de votre dashboard"}></TitreDuMain>
            

            <div className="box2">
            <div className="box2_container">
                <a href="#">
                   
                <Link to='/p7'> 

                    <div className="small_box">
                        <div className="text">
                            Clients
                        </div>

                        <div className="number">
                            {props.nbClients}
                        </div>
                    </div>

                    </Link>



                    </a>

                <a href="#">

                
                <Link to='/p6'> 

                <div className="small_box">
                <div className="text">
                        Demandes
                    </div>

                    <div className="number">
                        {props.nbDemandes}

                    </div>

                </div>
                </Link>
                </a>

                <a href="#">
             
             
                <Link to='/p28' > 



                <div className="small_box">
                <div className="text">
                        Messagerie
                    </div>

                    <div className="number">

                    </div>

                </div>
                </Link>

                
                </a>


                </div>
            </div>

<ProfileInformationBox prénom={prénom} nom={nom} id={id}  statut={Statut} date_de_naissance={date_de_naissance} date_d_inscription={date_d_inscription}
                    
                    NumTel={NumTel}  AdresseMail={AdresseMail}  NumCIN={NumCIN} 
                    
                    trigger={props.el} photo={lienPhoto} setTrigger={props.setel}>

</ProfileInformationBox>
           

            <div>

            </div>
        </main>
    )
}


export default Main;