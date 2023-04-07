import Validate from  '../../composants/images/Validate.png'
import Refuse from '../../composants/images/RefuseAdmin.png'
import axios from 'axios'
import { useState } from 'react'

const ValidaitonBoxPetit=(props)=>{

    const [id,setId]=useState("")
    const [newStatut,setnewStatut]=useState("")

    var i=0;


    const ValidateCLick=()=>{


        if (props.fonctionValider==="ValiderRectoCIN"){
            //alert("ValiderRectoCIN")
            setnewStatut("Validé")

            setId(localStorage.getItem("_idCINRectoStatut"))
         
            axios.put("http://localhost:3001/UpdateDoc/:id",{
                id:id,
                newStatut:newStatut
            })

        }




        if (props.fonctionValider==="ValiderVersoCIN"){
            //alert("ValiderVersoCIN")

            setnewStatut("Validé")

            setId(localStorage.getItem("_idCINVersoStatut"))
         
            axios.put("http://localhost:3001/UpdateDoc/:id",{
                id:id,
                newStatut:newStatut
            })


        }




        if (props.fonctionValider==="ValiderJustifDomicile"){
            //alert("ValiderJustifDomicile")
            

            setnewStatut("Validé")

            setId(localStorage.getItem("_idJustifDomicile"))
         
            axios.put("http://localhost:3001/UpdateDoc/:id",{
                id:id,
                newStatut:newStatut
            })

        }





        if (props.fonctionValider==="ValiderBulletein1"){
            //alert("ValiderBulletein1")

            setnewStatut("Validé")

            setId(localStorage.getItem("_idBulletein1"))
         
            axios.put("http://localhost:3001/UpdateDoc/:id",{
                id:id,
                newStatut:newStatut
            })

        }



        if (props.fonctionValider==="ValiderBulletein2"){

            setnewStatut("Validé")

            setId(localStorage.getItem("_idBulletein2"))
         
            axios.put("http://localhost:3001/UpdateDoc/:id",{
                id:id,
                newStatut:newStatut
            })

        }




        if (props.fonctionValider==="ValiderBulletein3"){

            setnewStatut("Validé")

            setId(localStorage.getItem("_idBulletein3"))
         
            axios.put("http://localhost:3001/UpdateDoc/:id",{
                id:id,
                newStatut:newStatut
            })

        }




        if (props.fonctionValider==="ValiderBulletein1"){

            setnewStatut("Validé")

            setId(localStorage.getItem("_idDernièreFicheDePaie"))
         
            axios.put("http://localhost:3001/UpdateDoc/:id",{
                id:id,
                newStatut:newStatut
            })

        }




        if (props.fonctionValider==="ValiderBulletein2"){


            setnewStatut("Validé")

            setId(localStorage.getItem("_idEngagementdeDomiciliation"))
         
            axios.put("http://localhost:3001/UpdateDoc/:id",{
                id:id,
                newStatut:newStatut
            })



        }

        if (props.fonctionValider==="ValiderBulletein3"){

            setnewStatut("Validé")

            setId(localStorage.getItem("_idDéclarationdesRevenues"))
         
            axios.put("http://localhost:3001/UpdateDoc/:id",{
                id:id,
                newStatut:newStatut
            })







        }



        if (props.fonctionValider==="ValiderBulletein3"){

            setnewStatut("Validé")

            setId(localStorage.getItem("_idDevisTravaux"))
         
            axios.put("http://localhost:3001/UpdateDoc/:id",{
                id:id,
                newStatut:newStatut
            })




            



        }






    
        if (props.fonctionValider==="ValiderJustifDépense"){
    
                setnewStatut("Validé")
    
                setId(localStorage.getItem("_idJustifDépense"))
             
                axios.put("http://localhost:3001/UpdateDoc/:id",{
                    id:id,
                    newStatut:newStatut
                })









        }
        
        
    }


   const  RefuserClick =()=>{




    if(props.fonctionRefuser==="RefuserBulletein1"){

        setnewStatut("Refusé")

        setId(localStorage.getItem("_idDernièreFicheDePaie"))
     
        axios.put("http://localhost:3001/UpdateDoc/:id",{
            id:id,
            newStatut:newStatut
        })

    }







    if(props.fonctionRefuser==="RefuserRectoCIN"){
        //////alert("RefuserRectoCIN")

        setnewStatut("Refusé")

        setId(localStorage.getItem("_idCINRectoStatut"))
     
        axios.put("http://localhost:3001/UpdateDoc/:id",{
            id:id,
            newStatut:newStatut
        })







    }
      
    if(props.fonctionRefuser==="RefuserVersoCIN"){
           ////alert("RefuserVersoCIN")

           setnewStatut("Refusé")

           setId(localStorage.getItem("_idCINVersoStatut"))
        
           axios.put("http://localhost:3001/UpdateDoc/:id",{
               id:id,
               newStatut:newStatut
           })
   
    }

    if(props.fonctionRefuser==="RefuserJustifDomicile"){
        ////alert("RefuserJustifDomicile")

        setnewStatut("Refusé")

        setId(localStorage.getItem("_idJustifDomicile"))
     
        axios.put("http://localhost:3001/UpdateDoc/:id",{
            id:id,
            newStatut:newStatut
        })

 }

 if(props.fonctionRefuser==="RefuserBulletein1"){
    //alert("RefuserBulletein1")

    setnewStatut("Refusé")

    setId(localStorage.getItem("_idBulletein1"))
 
    axios.put("http://localhost:3001/UpdateDoc/:id",{
        id:id,
        newStatut:newStatut
    })

}

if(props.fonctionRefuser==="RefuserBulletein2"){
    //alert("RefuserBulletein2")

    setnewStatut("Refusé")

    setId(localStorage.getItem("_idBulletein2"))
 
    axios.put("http://localhost:3001/UpdateDoc/:id",{
        id:id,
        newStatut:newStatut
    })

}

if(props.fonctionRefuser==="RefuserBulletein3"){
    //alert("RefuserBulletein3")

    setnewStatut("Refusé")

    setId(localStorage.getItem("_idBulletein3"))
 
    axios.put("http://localhost:3001/UpdateDoc/:id",{
        id:id,
        newStatut:newStatut
    })

}

if(props.fonctionRefuser==="RefuserJustifDépense"){
    //alert("RefuserJustifDépense")

    setnewStatut("Refusé")

    setId(localStorage.getItem("_idJustifDépense"))
 
    axios.put("http://localhost:3001/UpdateDoc/:id",{
        id:id,
        newStatut:newStatut
    })

}



   }



return(

    <>
<div className="ValidationBoxWrapper">
<div className='ValidationBoxPetit'>
       <div className='En cours button'>
            <img onClick={ValidateCLick} className='imgScaleButtonValidationPetit' src={Validate}/>
       </div>



       <div className='Refuser button'>
       <img onClick={RefuserClick} className='imgScaleButtonValidationPetit' src={Refuse}/>

       </div>

</div>
</div>
</>

)

}

export default ValidaitonBoxPetit;