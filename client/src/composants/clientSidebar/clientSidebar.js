
import logo_stb from "../images/Logo_STB.png"
import "./clientSidebar.css"
import icone_dashboard from "../images/menu.png"
import icone_messagerie from "../images/comment.png"
import icone_historique from "../images/historique.png"
import icone_demandes from "../images/demande.png"


import {Link} from 'react-router-dom'










const sidebar=()=>{

    return(
<div className="sidebar">

<Link to='/p9'> 

    <div className="logo_container">
        <img className="logo_scale" src={logo_stb}></img>
    </div>

    </Link> 


    <div className="">
       
       
       


    <div className="menu_container">
       
       
       <ul className="liste_menu_elements">        
            <li>
                
            <Link to='/p9'> 

                 <div id="sidebar_clients_element">
                     <a href="#" className="sidebar_element">
                          <img id="icone_clients" className="icone_scale" src={icone_dashboard}></img>
                          <span id=""> Profil </span>
                     </a>
                  </div>
                  </Link> 

             </li>



             <li>
             <Link to='/p10'> 

                 <div id="sidebar_clients_element">
                     <a href="#" className="sidebar_element">
                          <img src={icone_demandes} id="icone_demandes" className="icone_scale" ></img>
                          <span id="clients_element_mot"> Mes demandes </span>
                     </a>
                  </div>
                  </Link > 

             </li>



             <li>
             <Link to='/p27'> 

                 <div id="sidebar_clients_element">
                     <a href="#" className="sidebar_element">
                          <img id="icone_clients" className="icone_scale" src={icone_messagerie}></img>
                          <span id="clients_element_mot"> Messagerie </span>
                     </a>
                  </div>
                  </Link > 

             </li>

             <li>
             <Link to='/p30'> 

                 <div id="sidebar_clients_element">
                     <a href="#" className="sidebar_element">
                          <img src={icone_historique} id="icone_clients" className="icone_scale" ></img>
                          <span id="clients_element_mot"> Historique </span>
                     </a>
                  </div>
                  </Link > 

             </li>




        </ul>

        </div>



    </div>





</div>
    );
}


export default sidebar;