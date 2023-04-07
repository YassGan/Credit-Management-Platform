

import ClickBouton from '../images/send.png'

import ElementMessage from '../ElementMessage/ElementMessage'
import App from '../../App'
import axios from 'axios'
import { useState,useEffect } from 'react'



const ConteneursMessagesOuvertClient =()=>{

    let tabMessagesCLientOuvert=[];
    tabMessagesCLientOuvert.splice()


    const [listMessages,setlistMessages]=useState([]);

    



    useEffect(()=>{
      axios.get("http://localhost:3001/getMessages").then((response)=>{
        setlistMessages(response.data)
      })
        },[])




        var iM;
        for(iM in listMessages){
            if(listMessages[iM].idClient===localStorage.getItem("IdSessionClientMessage")){
                console.log(localStorage.getItem("IdSessionClientMessage"))

                tabMessagesCLientOuvert.push(listMessages[iM])

            }

        }







    const fonctionEnvoyerMessage=()=>{
        const content=document.getElementById("inputMessageId").value;



        let today = new Date();
        let time = today.getHours() + ":" + today.getMinutes() ;


let dd = today.getDate(); 
let mm = today.getMonth()+1; 
let yyyy = today.getFullYear(); 

let date= dd+"/"+mm+"/"+yyyy












axios.post("http://localhost:3001/createMessage",
{
id:'1',
idClient:localStorage.getItem("IdSessionClientMessage"),
idAgent:"624735cc8bac223ea9eb446c",
VueRécepteur:"False",
Contenu:content,
Date:date,
Time:time,
Envoyeur:"Agent",
UrlPhotoEnvoyeur:localStorage.getItem("PhotoProfilSessionClient")



}).then((response)=>{
})












         content=document.getElementById("inputMessageId").value="";

         window.location.reload();


    }


    return(
        
        
        <>


<div className='SendedMessages'>
{
    tabMessagesCLientOuvert.map((e)=>{
        return(
            
            <ElementMessage photoEnv={e.UrlPhotoEnvoyeur} envoyeur={e.Envoyeur} time={e.Time} date={e.Date} content={e.Contenu}></ElementMessage>
        )
    })
}
</div>

            
            
            
            
             <div className='MessageArea'>


                 <input id='inputMessageId' className='InputMessage'/>

                 <div onClick={fonctionEnvoyerMessage} className='boutonEnvoyer'>
                     <img className='sendScale' src={ClickBouton} />
                 
                 </div>
             </div>




        
        
        </>






    )




}

export default ConteneursMessagesOuvertClient;