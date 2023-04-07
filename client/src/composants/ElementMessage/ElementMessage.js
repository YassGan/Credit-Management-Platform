


import './ElementMessage.css'
import pdp from '../images/pdp.png'
const ElementMessage = (props)=>{




    return(
      
      <div className={props.envoyeur} >
      <div className='elementMessage'>
       
       

       <div className='BulleImgContianer'>
       
       <div className='imgContianer'>
           <img className='img_scale' src={props.photoEnv}></img>
       
       </div>


        <div className="BulleMessage"> 
            <h4 className='contMessage'>{props.content} </h4> 
        </div>

        </div>
       
       
        <div className='DateTimeContainer'>
                
            <div >
                <span className='TimeDisplaying'> {props.time}</span>

                <span className='DateDisplaying'>   {props.date}</span>
            </div>
        </div>
    </div>
    </div>
    )
}


export default ElementMessage;