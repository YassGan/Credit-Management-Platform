


import Navbar from "../../composants/navbar/navbar";
import Sidebar from "../../composants/sidebar/sidebar";
import ConteneurDemandes from "../../composants/conteneur_demandes/conteneursDemandes";
import TitreDuMain from "../../composants/titreduMain/titreDuMain";
import PopUpWindowDeconnexion from '../../composants/PopUpWindowDeconnexion/PopUpWindowDeconnexion';


import { useState,useEffect } from "react";
import ConteneursMessagesOuvertClient from "../../composants/conteneurMessagesOuvertClient/conteneurMessagesOuvertClient";

import ConteneursMessagesOuvertAdmin from "../../composants/conteneurMessagesOuvertAdmin/conteneurMessageOuvertAdmin"

import './PageMessagerie.css'

import pdp from '../../composants/images/pdp.png'

import MessageMessagerieAdmin from "../../composants/MessageMessagerieAdmin/MessageMessagerieAdmin";
import axios from "axios";

import { Link } from "react-router-dom";





const PageAdminListeMessagerie=()=>{

    let s=0;

    const[ChangeVue,setChangVue]=useState("")
    const[IdVue,setIdVue]=useState("")

 
    const[el3,setel3]=useState(false)




    const [Messages, setMessages]=useState([])
    let TabStockidClients=[];
    let TabStockMessages=[];


    useEffect(()=>{
        axios.get("http://localhost:3001/getMessages").then((response)=>{
            setMessages(response.data)
        })
          },[])


          console.log(Messages)

         
         
          var j,i;
         
    
      for (i in Messages){
          console.log(i)
          if(TabStockidClients.includes(Messages[i].idClient)===true){
              for (j in TabStockMessages){
                  if(TabStockMessages[j].idClient===Messages[i].idClient){
                    TabStockMessages[j].Contenu=Messages[i].Contenu
                    TabStockMessages[j].Envoyeur=Messages[i].Envoyeur
                    TabStockMessages[j].Time=Messages[i].Time
                    TabStockMessages[j].Date=Messages[i].Date
                    TabStockMessages[j]._id=Messages[i]._id
                    TabStockMessages[j].VueRécepteur=Messages[i].VueRécepteur



                  }
              }
          }
      
    
          if(TabStockidClients.includes(Messages[i].idClient)===false){
            TabStockidClients.push(Messages[i].idClient)
            TabStockMessages.push(Messages[i])

           }
        }




        const byDateTri =(a,b)=>{

            return( new Date(a.Date).valueOf() - new Date(b.Date).valueOf()
            
            )

        }

        const byHour =(a,b)=>{


            let d1=a.Time.split(":")[0]
            let d2=b.Time.split(":")[0]
            console.log("d1   "+d1)
            console.log("d2   "+d2)

                if (d1>d2){
                    return 1;
                }
            if (d1<d2){
                return -1;
            }
            if(d1==d2){
                return 0;
            }
            }


            const byMin =(a,b)=>{


                let d1=a.Time.split(":")[1]
                let d2=b.Time.split(":")[1]
                console.log("M1   "+d1)
                console.log("M2   "+d2)
    
                    if (d1>d2){
                        return 1;
                    }
                if (d1<d2){
                    return -1;
                }
                if(d1==d2){
                    return 0;
                }
                }


let TabStockMessages2=[];













        console.log("Tab des messages ")
        console.log(TabStockMessages)
        console.log("Tab des idClients")
        console.log(TabStockidClients)








const ConsulterFunction=(id)=>{

    //alert(id)

    localStorage.setItem("IdSessionClientMessage",id)




}

const updatingTheView=(id)=>{
    setChangVue('True')
    setIdVue(id)

    
   {/* alert("Nouveau")
    alert(ChangeVue)
alert(IdVue)*/}

for (i in TabStockMessages2){
    
    if(TabStockMessages2[i]._id===id)
          {    TabStockMessages2[i].VueRécepteur="True"}
    }


    axios.put("http://localhost:3001/UpdateMessage/:id",{
        IdVue:IdVue,
        ChangeVue:ChangeVue
    })




}














        //sorting the array by date


TabStockMessages.sort(byDateTri)

TabStockMessages.sort(byHour)

TabStockMessages.sort(byMin)

TabStockMessages.sort()

TabStockMessages2=TabStockMessages.reverse();


for (i in TabStockMessages2){
    if (TabStockMessages2[i].VueRécepteur!="True"){
        s=s+1
    }
}

console.log("Somme des messages non vue "+s)





    return(
        <div className="PageAdminListeDemandesContainer">
            <Navbar TriggerDeconnexion={el3} setTriggerDeconnexion={setel3}  photo={localStorage.getItem("PhotoProfilSessionAdmin")}  Statut={"Administrateur"} nom={localStorage.getItem("prenomSessionAdmin")} prénom={localStorage.getItem("nomSessionAdmin")} ></Navbar>
            <Sidebar></Sidebar>

            <div className="titreduMainContainer">
                <TitreDuMain titre={"Voir vos messages " } description={"Voici les messages  "}></TitreDuMain>
               <div className="conteneurclient_container">
                   


{TabStockMessages2.map((e)=>{
    let Envoyeurr
    let content1=(e.Contenu).length;
    let content=e.Contenu;
    console.log(content1)

    if(content1>30){
         content = e.Contenu.substr(0, 30);
         content=content+" ..."

    }

    
    


    if(e.Envoyeur==="Agent"){
        Envoyeurr="Vous"
    }
    else{
        Envoyeurr="Client"
    }
    return(
                           <Link to='/p26'>
                                       <div className="ContMassage" onMouseLeave={() =>{updatingTheView(e._id)}}  onClick={() =>{ConsulterFunction(e.idClient)}}>


    <MessageMessagerieAdmin  VueEtat={e.VueRécepteur} nom={e.NomClient} prénom={e.PrénomClient}  Envoyeur={Envoyeurr} imgEnv={e.UrlPhotoClient} date={e.Date} contenu={content} time={e.Time}></MessageMessagerieAdmin>
    </div>
    </Link>

    )
})}              
          



                   </div> 







            </div>


            
    
    <div>
        <PopUpWindowDeconnexion  TriggerDeconnexion={el3} setTriggerDeconnexion={setel3}></PopUpWindowDeconnexion>
    </div>

        </div>
    )
}

export default PageAdminListeMessagerie;