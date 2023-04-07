


const  RemboursementElement=(props)=>{


return(

<div className="RemboursementsContaier">
    

<div className="remboursementElement">
    

    <div className="RemboursementTitleContainer">
        <div className="RemboursementTitle">
            <h4>  Remboursement n° {props.nb} </h4>
        </div>
    </div>
    

    <div className="BlocksContainer">
        <div className="RemboursementElementBlock">
            <div className="TextEL NomPrenomClient"><h4> Nom CLient : </h4>   <span> {props.NomPrénomCLinet} </span></div>
           {/* <div className="TextEL Date"><h4> RIB : </h4> <span> {props.RIBClient} </span></div>  */}
            <div className="TextEL TypeDemande"><h4> Montant Payé  :</h4><span>  {props.MontantPayé} dt</span></div>
        </div>

        <div className="RemboursementElementBlock">
            <div className="TextEL NomPrenomClient"> <h4> Type crédit :</h4> <span>{props.TypeCrédit} </span></div>
            <div className="TextEL Date"> <h4>Durée :</h4> <span> {props.Durée} </span></div>
            <div className="TextEL TypeDemande"><h4> Date de paiement : </h4><span>{props.DatePaiement} </span></div>
        </div>
    </div>

    <div className="BottomLineContianer">
        <div className="BottomLine">
            <h4>  Id Demande:</h4> 454879897987987987987
        </div>
    </div>


</div>



</div>
);

}


export default RemboursementElement;