
import './titreDuMain.css'
const titreDuMain=(props)=>{
    return(
        <>
        
        <div className="box1">
                <h2>
                    {props.titre}
                </h2>
                <span className="box_title">
                    {props.description}
                </span>

            </div>



        </>
    )
}

export default titreDuMain;