import "./navbar.css"
import pdp from "../images/pdp.png"
import icone_menu from "../images/icone_menu.png"
import search_icone from "../images/home.png"


const Navbar =(props)=>{

    var Statutt;
  if (props.Statut!=="Client"){
        Statutt="Agent banciare" 
 }
 else{
     Statutt="Client"
 }

    return(
        <nav className="navbar">


            <div className="">
                <a href="#">
                    <img className="icone_scale" src={search_icone} ></img>
                </a>
            </div>
       

            <div className="">
              
              <div className="navbar_user_container">
                  
                 <div>
                  <h4 className="user_name"> {props.nom} {props.prénom} </h4>
                  <h6 className="user_role"> {Statutt}</h6>
                  </div>

                <div>
                    <img className="icone_scale" src={props.photo}></img>
                </div>
                
                <div>
                    <img id="deconIcone"  onClick={()=>props.setTriggerDeconnexion(!props.TriggerDeconnexion)} src={icone_menu}></img>
                </div>
              </div>
            </div>

      
        
        </nav>

    )

}

export default Navbar;