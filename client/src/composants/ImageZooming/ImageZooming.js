import './ImageZooming.css'
import LogoStb from '../../composants/images/Logo_STB.png'

const ImageZooming =(props)=>{


    return(props.triggerZooming)  ?   (
        <>
            <div className="BgModalPopUp">
                <div className="">
                    <div className="PopUpWindowZooming">
                        
                     <div className='boutonXContainer'>
                      <h1 className='boutonX' onClick={()=>{props.settriggerZooming(false);}}> +</h1>
                      </div>

                      <div className='ZoomedImgContainerContainer'>
                        <div className="ZoomedImgContainer">
                          
                            <img className='ImgZoomed' src={props.UrlImagePourZoomer}/>
                           
                        </div>
                        </div>

                        
            


                    </div>

                </div>
            
            </div>
            


        </>
    ):"";
}


export default ImageZooming;