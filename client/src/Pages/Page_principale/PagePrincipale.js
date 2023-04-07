import React from 'react';
import Simulateur from '../../composants/simulateur/simulateur';

import './PagePrincipale.css'
import logo   from '../../composants/images/Logo_STB.png'

import { Link } from 'react-router-dom';



const PagePrincipale =() =>{
    
    const Ligne1=()=>{
            /* le code css de ce composants ligne1 est dans PagePrincipale.Css */

        return(
           <div className='ligne1'> 
                    <Link to='/p3'>
                    <div className='btnnn inscription_button'>
                        <h3> S'inscrire</h3>
                    </div>
                    </Link>

                    <Link to='/p2'>

                    <div className='btnnn connexion_button'>
                        <h3> Se connecter</h3>
                    </div>
                    </Link>

            </div>


        )
    }



    const Ligne2=()=>{
        return(
            <div className='ligne2'> 
                <div className='logo_img_containerPagePrincipale'>
                    <img className='logo_img' src={logo}></img>
                </div>
            
            </div>
        )
    }




    const Ligne3=()=>{
        return(
            <div className='ligne3'> 
                <div className='Plateforme_title'>
                    <span className='DemandeTitre'> Demande et suivi de crédit</span>
                </div>
            
            </div>
        )
    }



return(


<>
    <Ligne1></Ligne1>
    <Ligne2></Ligne2>
    <Ligne3></Ligne3>
    <Simulateur></Simulateur>
    </>
)

}

export default PagePrincipale;