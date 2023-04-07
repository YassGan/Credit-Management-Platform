



import './PageInscriptionFinale.css'

import { Navigate, useNavigate } from 'react-router-dom'

import {Link} from 'react-router-dom'
import { useState } from 'react';

import axios from 'axios';






const PageInscriptionFinale=()=>{
    const navigate= useNavigate();

 

    return(
        <>
            <div className='PageInscriptionFinaleContainer'>
                <div className='PageInscriptionFinale'>
                   <div className='Message_container'>
                    <h2> Félicitation votre compte a été créé avec succès. </h2>
                   </div>
                   
                   <div className='boutonAccueilContainer'>
                     
                        <Link to='/p1'> 
                            <div className='boutonAccueil'>
                                Accueil
                            </div>
                        </Link>

                   </div>
                </div>
            </div>
        </>
    )

}

export default PageInscriptionFinale;