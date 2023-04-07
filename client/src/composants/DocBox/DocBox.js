


import './DocBox.css'
import axios from 'axios'
import { useState,useEffect } from 'react'
import DocumentVierge from  '../../composants/images/DocumentVierge.jpg'



const  DocBox =(props)=>{
    
    const[file,setfile]=useState()
    const[UrlImageProfil,setUrlImageProfil]=useState(DocumentVierge)

    localStorage.setItem("srcPhoto",DocumentVierge)


    // ||| Dans cette partie on va chercher tous les documents du client qui concernet la phase num°1 et on va afficher le dernier
    // document le pulus à jour

const [tabTousLesDoc,setTabTousLesDoc]=useState([])
useEffect(()=>{
    axios.get("http://localhost:3001/getDocuments").then((response)=>{
        setTabTousLesDoc(response.data)
    })
      },[])
      console.log(tabTousLesDoc)

    
      
    //On va parcourir le tableau de documents et créer un nouveau tab qui va contenir les documents du client de la session ouverte

      let TabLesDocSessionClient=[];
      var ik;
      for (ik in tabTousLesDoc){
          if(tabTousLesDoc[ik].idClientAssocié===localStorage.getItem("IdSessionClient") ){
            TabLesDocSessionClient.push(tabTousLesDoc[ik])
          }
      }
      console.log("Voici l'ensemble des documents du client en cours ")
      console.log(TabLesDocSessionClient)























    //On va parcourir tous les documents uploadé du client et créer un tab qui va contenir les copies du recto du CIN du client
      let TabDesRectoCINUploadéParClient=[]
      var iTabDesRecto;
      for (iTabDesRecto in TabLesDocSessionClient ){
          if (TabLesDocSessionClient[iTabDesRecto].typeDocument==="RectoDocumentCIN" && TabLesDocSessionClient[iTabDesRecto].idPhaseAssociée===localStorage.getItem("idPhase2Demande")){
              TabDesRectoCINUploadéParClient.push(TabLesDocSessionClient[iTabDesRecto])

          }
      }
    
      try{
// dans ce bloc de code on va extraier le dernier recto de CIN uploadé et affecter la variable source de l'image par l'url de la 
//photo du dernier document recto de CIN
          console.log("Le dernier recto du client")
        
            console.log(TabDesRectoCINUploadéParClient[TabDesRectoCINUploadéParClient.length-1])
let UrlDernierRecto=TabDesRectoCINUploadéParClient[TabDesRectoCINUploadéParClient.length-1].Url
console.log(UrlDernierRecto)

if(props.titre==="Importer le recto de votre Pièce d'identité"){
localStorage.setItem("srcPhoto",UrlDernierRecto)
}

      }
      catch(error){
          console.log(error)

      }

    // ||| Dans cette partie





















      //On va parcourir tous les documents uploadé du client et créer un tab qui va contenir les copies du recto du CIN du client
      let TabDesVersoCINUploadéParClient=[]
      var iTabDesVerso;
      for (iTabDesVerso in TabLesDocSessionClient ){
          if (TabLesDocSessionClient[iTabDesVerso].typeDocument==="VersoDocumentCIN"&& TabLesDocSessionClient[iTabDesVerso].idPhaseAssociée===localStorage.getItem("idPhase2Demande")){
            TabDesVersoCINUploadéParClient.push(TabLesDocSessionClient[iTabDesVerso])
          }
      }
    
      try{
// dans ce bloc de code on va extraier le dernier recto de CIN uploadé et affecter la variable source de l'image par l'url de la 
//photo du dernier document recto de CIN
          console.log("Le dernier verso du client")
        
            console.log(TabDesVersoCINUploadéParClient[TabDesVersoCINUploadéParClient.length-1])
let UrlDernierVerso=TabDesVersoCINUploadéParClient[TabDesVersoCINUploadéParClient.length-1].Url
console.log(UrlDernierVerso)

if(props.titre==="Importer le verso de votre Pièce d'identité"){
localStorage.setItem("srcPhoto",UrlDernierVerso)
}

      }
      catch(error){
          console.log(error)

      }

    // ||| Dans cette partie




















 //On va parcourir tous les documents uploadé du client et créer un tab qui va contenir les copies du recto du CIN du client
   let TabDesJustifploadéParClient=[]
   var iTabDesJustif;
   for (iTabDesJustif in TabLesDocSessionClient ){
       if (TabLesDocSessionClient[iTabDesJustif].typeDocument==="Justificatif de domicile" && TabLesDocSessionClient[iTabDesJustif].idPhaseAssociée===localStorage.getItem("idPhase2Demande")){
        TabDesJustifploadéParClient.push(TabLesDocSessionClient[iTabDesJustif])
       }
   }
 
   try{
// dans ce bloc de code on va extraier le dernier recto de CIN uploadé et affecter la variable source de l'image par l'url de la 
//photo du dernier document recto de CIN
       console.log("Le dernier Justif Domicile du client")
     
         console.log(TabDesJustifploadéParClient[TabDesJustifploadéParClient.length-1])
let UrlDernierJustifDomicile=TabDesJustifploadéParClient[TabDesJustifploadéParClient.length-1].Url
console.log(UrlDernierJustifDomicile)

if(props.titre==="Importer votre justificatif de domicile"){
localStorage.setItem("srcPhoto",UrlDernierJustifDomicile)
}

   }
   catch(error){
       console.log(error)

   }

 // ||| Dans cette partie















 

 //On va parcourir tous les documents uploadé du client et créer un tab qui va contenir les copies du recto du CIN du client
 let TabDesBulletein1=[]
 var iTabDesBulletein1;
 for (iTabDesBulletein1 in TabLesDocSessionClient ){
     if (TabLesDocSessionClient[iTabDesBulletein1].typeDocument==="Bulletin de paie n°1 " && TabLesDocSessionClient[iTabDesBulletein1].idPhaseAssociée===localStorage.getItem("idPhase2Demande")){
        TabDesBulletein1.push(TabLesDocSessionClient[iTabDesBulletein1])
     }
 }

 try{
// dans ce bloc de code on va extraier le dernier recto de CIN uploadé et affecter la variable source de l'image par l'url de la 
//photo du dernier document recto de CIN
     console.log("Le dernier Bulletein depaie n°1")
   
       console.log(TabDesBulletein1[TabDesBulletein1.length-1])
let UrlDernierBulletein1=TabDesBulletein1[TabDesBulletein1.length-1].Url
console.log(UrlDernierBulletein1)

if(props.titre==="Bulletin de paie n°1"){
localStorage.setItem("srcPhoto",UrlDernierBulletein1)
}

 }
 catch(error){
     console.log(error)

 }

// ||| Dans cette partie





















 //On va parcourir tous les documents uploadé du client et créer un tab qui va contenir les copies du recto du CIN du client
 let TabDesBulletein2=[]
 var iTabDesBulletein2;
 for (iTabDesBulletein2 in TabLesDocSessionClient ){
     if (TabLesDocSessionClient[iTabDesBulletein2].typeDocument==="Bulletin de paie n°2 " && TabLesDocSessionClient[iTabDesBulletein2].idPhaseAssociée===localStorage.getItem("idPhase2Demande")){
        TabDesBulletein2.push(TabLesDocSessionClient[iTabDesBulletein2])
     }
 }

 try{
// dans ce bloc de code on va extraier le dernier recto de CIN uploadé et affecter la variable source de l'image par l'url de la 
//photo du dernier document recto de CIN
     console.log("Le dernier Bulletein depaie n°2")
   
       console.log(TabDesBulletein2[TabDesBulletein2.length-1])
let UrlDernierBulletein2=TabDesBulletein2[TabDesBulletein2.length-1].Url
console.log(UrlDernierBulletein2)

if(props.titre==="Bulletin de paie n°2"){
localStorage.setItem("srcPhoto",UrlDernierBulletein2)
}

 }
 catch(error){
     console.log(error)

 }

// ||| Dans cette partie

























//On va parcourir tous les documents uploadé du client et créer un tab qui va contenir les copies du recto du CIN du client
let TabDesBulletein3=[]
var iTabDesBulletein3;
for (iTabDesBulletein3 in TabLesDocSessionClient ){
    if (TabLesDocSessionClient[iTabDesBulletein3].typeDocument==="Bulletin de paie n°3 " && TabLesDocSessionClient[iTabDesBulletein3].idPhaseAssociée===localStorage.getItem("idPhase2Demande")){
       TabDesBulletein3.push(TabLesDocSessionClient[iTabDesBulletein3])
       
    }
}

try{
// dans ce bloc de code on va extraier le dernier recto de CIN uploadé et affecter la variable source de l'image par l'url de la 
//photo du dernier document recto de CIN
    console.log("Le dernier Bulletein depaie n°3" )
  
      console.log(TabDesBulletein3[TabDesBulletein3.length-1])
let UrlDernierBulletein3=TabDesBulletein3[TabDesBulletein3.length-1].Url
console.log(UrlDernierBulletein3)

if(props.titre==="Bulletin de paie n°3"){
localStorage.setItem("srcPhoto",UrlDernierBulletein3)
}

}
catch(error){
    console.log(error)

}















//On va parcourir tous les documents uploadé du client et créer un tab qui va contenir les copies du recto du CIN du client
let TabDerniereFichedePaie=[]
var il;
for (il in TabLesDocSessionClient ){
    if (TabLesDocSessionClient[il].typeDocument==="Dernière Fiche de Paie " && TabLesDocSessionClient[il].idPhaseAssociée===localStorage.getItem("idPhase2Demande") ){
        TabDerniereFichedePaie.push(TabLesDocSessionClient[il])
    }
}

try{
// dans ce bloc de code on va extraier le dernier recto de CIN uploadé et affecter la variable source de l'image par l'url de la 
//photo du dernier document recto de CIN
    console.log("La derniere fiche de paie" )
  
      console.log(TabDerniereFichedePaie[TabDerniereFichedePaie.length-1])
let UrlDerniereFichedePaie=TabDerniereFichedePaie[TabDerniereFichedePaie.length-1].Url
console.log("uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu"+UrlDerniereFichedePaie)

if(props.titre==="Importer votre dernière fiche de paie"){
localStorage.setItem("srcPhoto",UrlDerniereFichedePaie)
}

}
catch(error){
    console.log(error)

}














// ||| Dans cette partie
















//On va parcourir tous les documents uploadé du client et créer un tab qui va contenir les copies du recto du CIN du client
let TabEngagementDomiciliation=[]
var il2;
for (il2 in TabLesDocSessionClient ){
    if (TabLesDocSessionClient[il2].typeDocument==="Engagement de domiciliation " && TabLesDocSessionClient[il2].idPhaseAssociée===localStorage.getItem("idPhase2Demande")){
        TabEngagementDomiciliation.push(TabLesDocSessionClient[il2])
    }
}

try{
// dans ce bloc de code on va extraier le dernier recto de CIN uploadé et affecter la variable source de l'image par l'url de la 
//photo du dernier document recto de CIN
    console.log("L'engagement de domiciliation" )
  
      console.log(TabEngagementDomiciliation[TabEngagementDomiciliation.length-1])
let UrlEngagementdeDomiciliation=TabEngagementDomiciliation[TabEngagementDomiciliation.length-1].Url
console.log("uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu"+UrlEngagementdeDomiciliation)

if(props.titre==="Importer l'engagement de domiciliation"){
localStorage.setItem("srcPhoto",UrlEngagementdeDomiciliation)
}

}
catch(error){
    console.log(error)

}














// ||| Dans cette partie





























// ||| Dans cette partie
















//On va parcourir tous les documents uploadé du client et créer un tab qui va contenir les copies du recto du CIN du client
let TabDéclaration=[]
var il3;
for (il3 in TabLesDocSessionClient ){
    if (TabLesDocSessionClient[il3].typeDocument==="DéclarationRevenues " && TabLesDocSessionClient[il3].idPhaseAssociée===localStorage.getItem("idPhase2Demande") ){
        TabDéclaration.push(TabLesDocSessionClient[il3])
    }
}

try{
// dans ce bloc de code on va extraier le dernier recto de CIN uploadé et affecter la variable source de l'image par l'url de la 
//photo du dernier document recto de CIN
    console.log("La déclaration" )
  
      console.log(TabDéclaration[TabDéclaration.length-1])
let UrlDéclaration=TabDéclaration[TabDéclaration.length-1].Url
console.log("uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu"+UrlDéclaration)

if(props.titre==="Importer La Déclaration Unique de Revenus"){
localStorage.setItem("srcPhoto",UrlDéclaration)
}

}
catch(error){
    console.log(error)

}














// ||| Dans cette partie





















// ||| Dans cette partie
















//On va parcourir tous les documents uploadé du client et créer un tab qui va contenir les copies du recto du CIN du client
let TabDevisTrav=[]
var il4;
for (il4 in TabLesDocSessionClient ){
    if (TabLesDocSessionClient[il3].typeDocument==="DevisTravaux " && TabLesDocSessionClient[il4].idPhaseAssociée===localStorage.getItem("idPhase2Demande") ){
        TabDevisTrav.push(TabLesDocSessionClient[il4])
    }
}

try{
// dans ce bloc de code on va extraier le dernier recto de CIN uploadé et affecter la variable source de l'image par l'url de la 
//photo du dernier document recto de CIN
    console.log("Le devis de travaux" )
  
      console.log(TabDevisTrav[TabDevisTrav.length-1])
let UrlDevisTrav=TabDevisTrav[TabDevisTrav.length-1].Url
console.log("uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu"+UrlDevisTrav)

if(props.titre==="Importer le devis de travaux"){
localStorage.setItem("srcPhoto",UrlDevisTrav)
}

}
catch(error){
    console.log(error)

}














// ||| Dans cette partie















//On va parcourir tous les documents uploadé du client et créer un tab qui va contenir les copies du recto du CIN du client
let TabDesJustifDépense=[]
var iTabDesJustifDépense;
for (iTabDesJustifDépense in TabLesDocSessionClient ){
    if (TabLesDocSessionClient[iTabDesJustifDépense].typeDocument==="DevisTravaux " && TabLesDocSessionClient[iTabDesJustifDépense].idPhaseAssociée===localStorage.getItem("idPhase2Demande")){
        TabDesJustifDépense.push(TabLesDocSessionClient[iTabDesJustifDépense])
    }
}

try{
// dans ce bloc de code on va extraier le dernier recto de CIN uploadé et affecter la variable source de l'image par l'url de la 
//photo du dernier document recto de CIN
    console.log("Le Justif de dépense")
  
      console.log(TabDesJustifDépense[TabDesJustifDépense.length-1])
let UrlDernierJustifDepense=TabDesJustifDépense[TabDesJustifDépense.length-1].Url
console.log(UrlDernierJustifDepense)

if(props.titre==="Importer le justificatif de dépense (Facture)"){
localStorage.setItem("srcPhoto",UrlDernierJustifDepense)
}

}
catch(error){
    console.log(error)

}

// ||| Dans cette partie








    








    function generateRandom(max){
        return Math.random() * max;
    }






    window.idD=generateRandom(4697798798798754);

    const uploadImage = async () =>{
        
        const form = new FormData()
        form.append("file",file)
        form.append("upload_preset","YassineGn");
        await axios.post("https://api.cloudinary.com/v1_1/ddqjpcqum/upload",form).then((result)=>   setUrlImageProfil(result.data.secure_url));  
        localStorage.setItem("srcPhoto",UrlImageProfil)

    }


console.log("le nom du document "+props.titre)



if(props.titre==="Importer le recto de votre Pièce d'identité"){
    localStorage.setItem("NomDocument","RectoDocumentCIN")
}
if(props.titre==="Importer le verso de votre Pièce d'identité")
{
    localStorage.setItem("NomDocument","VersoDocumentCIN")

}
if(props.titre==="Importer votre justificatif de domicile")
{
    localStorage.setItem("NomDocument","Justificatif de domicile")

}

if(props.titre==="Bulletin de paie n°1")
{
    localStorage.setItem("NomDocument","Bulletin de paie n°1 ")

}

if(props.titre==="Bulletin de paie n°2")
{
    localStorage.setItem("NomDocument","Bulletin de paie n°2 ")

}

if(props.titre==="Bulletin de paie n°3")
{
    localStorage.setItem("NomDocument","Bulletin de paie n°3 ")

}

if(props.titre==="Importer le justificatif de dépense (Facture)"){
    localStorage.setItem("NomDocument","justificatif de dépense ")
}


if(props.titre==="Importer votre dernière fiche de paie"){
    localStorage.setItem("NomDocument","Dernière Fiche de Paie ")
}


if(props.titre==="Importer l'engagement de domiciliation"){
    localStorage.setItem("NomDocument","Engagement de domiciliation ")
}


if(props.titre==="Importer La Déclaration Unique de Revenus"){
    localStorage.setItem("NomDocument","DéclarationRevenues ")
}


if(props.titre==="Importer le devis de travaux"){
    localStorage.setItem("NomDocument","DevisTravaux ")
}




    const ValidationUpload = (nomDocumentUpload)=>{
        axios.post("http://localhost:3001/createDocument",
        {   
        id:window.idD,     
        typeDocument:localStorage.getItem("NomDocument"),
        Url:UrlImageProfil,
        idClientAssocié:  localStorage.getItem("IdSessionClient"),
        DateAjout:Date(),
        idPhaseAssociée:localStorage.getItem("idPhase2Demande"),
        statutDoc:"Pas encore validé(e)"
        
                                                     
        }).then((response)=>{
        alert("Document Imprté avec succès")
        })
        window.location.reload()
    }


    const Zooming = ()=>{
       /// alert(UrlImageProfil);
        setUrlImageProfil(UrlImageProfil)
        props.settriggerZooming(true);

        props.setUrlImagePourZoomer(UrlImageProfil)

    }


    return(
        <>
            
        
               <div className={props.ImporterDocuBox}>
                   
                   <div>
                    <div className="titreDuBox">
                        <h4> {props.titre}</h4>
                    </div>
                <div className="ImporterDemandeBox">
                   
                   <div className="imgBoxContainer">
                    <div className={props.ImgContainer} onClick={Zooming}>
                        <img src={localStorage.getItem("srcPhoto")} className={props.imgScale}/>
                    </div>
                    </div>




                    <div className='ButtonsContainer'>
                    <div className="TwoButtonsImportContainer"> 
                     
                      <div className="ChoisirFichierInput">
                          <input  onChange= { (e) => setfile(e.target.files[0])} type='file'/>
                      </div>

                        <div  onClick={uploadImage} className="UploadeButton">
                            Upload
                        </div>

                    </div>

                    
                    <div className='validerButtonContainer'>
                    <div   onClick={ValidationUpload}  className="valider UploadeButton">
                            Valider
                        </div>
                        </div>

                        </div>
                </div>
                
                </div>
                <div className='Img_la_plus_a_jour'>
                 { /*  <img className='imgScale2' />  */ }
                </div>
                </div>
                
        
        
        </>
    )









}


export default DocBox;