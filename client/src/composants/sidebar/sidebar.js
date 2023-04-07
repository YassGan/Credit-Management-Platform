
import logo_stb from "../images/Logo_STB.png"
import "./sidebar.css"
import icone_dashboard from "../images/menu.png"
import icone_clients from "../images/customer.png"
import icone_demandes from "../images/notification.png"
import icone_messagerie from "../images/comment.png"
import icone_statistiques from "../images/information.png"
import icone_remboursement from '../images/remboursement.png'



import {Link} from 'react-router-dom'







const sidebar=()=>{

    return(
<div className="sidebar">


    <div className="logo_container">


        <img className="logo_scale" src={logo_stb}></img>
    </div>

    <div className="">
       
       
       


    <div className="menu_container">
       
       
       <ul className="liste_menu_elements">        
            <li>
                <Link to='/p5'> 
                 <div id="sidebar_clients_element">
                     <a href="#" className="sidebar_element">
                          <img id="icone_clients" className="icone_scale" src={icone_dashboard}></img>
                          <span id=""> Dashboard </span>
                     </a>
                  </div>
                  </Link>
             </li>



             <li>
             <Link to='/p7'> 

                 <div id="sidebar_clients_element">
                     <a href="" className="sidebar_element">
                          <img id="icone_clients" className="icone_scale" src={icone_clients}></img>
                          <span id="clients_element_mot"> Clients </span>
                     </a>
                  </div>
                  </Link>

             </li>



             <li>

             <Link to='/p6'> 

                 <div id="sidebar_clients_element">
                     <a href="#" className="sidebar_element">
                          <img id="icone_clients" className="icone_scale" src={icone_demandes}></img>
                          <span id="clients_element_mot"> Demandes </span>
                     </a>
                  </div>
                  </Link>


             </li>

             <li>
             <Link to='/p28'> 

                 <div id="sidebar_clients_element">
                     <a href="#" className="sidebar_element">
                          <img id="icone_clients" className="icone_scale" src={icone_messagerie}></img>
                          <span id="clients_element_mot"> Messagerie </span>
                     </a>
                  </div>
                  </Link>

             </li>


             <li>
             <Link to='/p29'> 

                 <div id="sidebar_clients_element">
                     <a href="#" className="sidebar_element">
                          <img id="icone_clients" className="icone_scale" src={icone_remboursement}></img>
                          <span id="clients_element_mot"> Remboursement </span>
                     </a>
                  </div>
                  </Link>

             </li>








             <li>
             <Link to='/p31'> 

                 <div id="sidebar_clients_element">
                     <a href="#" className="sidebar_element">
                          <img id="icone_clients" className="icone_scale" src={icone_statistiques}></img>
                          <span id="clients_element_mot"> Statistiques </span>
                     </a>
                  </div>
                  </Link>

             </li>


        </ul>

        </div>



    </div>





</div>
    );
}


export default sidebar;