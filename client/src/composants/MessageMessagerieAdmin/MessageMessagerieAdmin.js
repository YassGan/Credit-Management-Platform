
import pdp from '../images/pdp.png'

import './MessageMessagerieAdmin.css'


const MessageMessagerieAdmin=(props)=>{






    return(
        <>
        
        <div className="WrapperMessagesNonLus">
                   <div className={props.VueEtat}> 
         
                            <div className="BlockElement">
                               <div className="MessageNonLuElement">

                                    <div className="PhotoMsgContnentContainer">
                                        <div className="imgContainer">  
                                            <img className="photoScale" src={props.imgEnv}/>
                                        </div>    

                                       <div className=""> 

                                            <div className="infoPart1">
                                                <div className="NomPrenom">
                                                    <h3 className='nom_text'>{props.nom}</h3>
                                                    <h3 className='prénom_text'>{props.prénom}</h3>

                                                </div>

                                                <div className="Date">
                                                    <h5> {props.date} </h5>
                                                </div>
                                            </div>

                                            <div className="MsgContent">
                                                <h5> {props.Envoyeur} :   </h5>
                                                <h5 className='contnentText'> {props.contenu} </h5>

                                            </div>

                                            <div className="DateTime">
                                               <div className="Time">
                                                   <h5> {props.time} </h5>
                                               </div>
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



export default MessageMessagerieAdmin;