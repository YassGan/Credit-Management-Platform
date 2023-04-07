import './inscriptionBoxtwo.css'
import bank_photo from "../images/Bank_photo.png"
import logo from "../images/Logo_STB.png"
import { Link } from 'react-router-dom'
import { Navigate, useNavigate } from 'react-router-dom'




const InscriptionBoxtwo=()=>{
    const navigate= useNavigate();


    var NewUserPart2={profession:"test",NumCIN:"test",NumTel:"test",Adresse:"test",DatedeNaissance:"test"};

    window.NewUserData2=NewUserPart2;//declaring global variable by window object  




    const handleSuivant=()=>{


        const profession =document.getElementById("professionInput").value;
        const NumCIN =document.getElementById("NumCINInput").value;
        const NumTel =document.getElementById("NumTelInput").value;
        const Adresse =document.getElementById("AdresseInput").value;
        const DateNaissance =document.getElementById("DateNaissanceInput").value;
        

       



        var test_profession;
        var test_NumCIN;
        var test_NumTel;
        var test_Adresse;
        var test_DateNaissance;



        const regex=/^[a-zA-Z\s]*$/;
        const regexNum=/^[0-9]+$/;

        const regexDateNaissance=/^(0[1-9]|1[012])[-/.](0[1-9]|[12][0-9]|3[01])[-/.](19|20)\\d\\d$/;
        



        if(!(profession.match(regex)) ||  (profession==""))
        {
            test_profession=false;

        }

        if((profession.match(regex)) &&  (profession!=""))
        {
            test_profession=true;

        }


        if(!(NumCIN.match(regexNum)) ||  (NumCIN==""))
        {
            test_NumCIN=false;

        }


        if((NumCIN.match(regexNum)) &&  (NumCIN!=""))
        {
            test_NumCIN=true;

        }


        if(!(NumTel.match(regexNum)) ||  (NumTel=="")  )
        {
            test_NumTel=false;

        }


        if((NumTel.match(regexNum)) &&  (NumTel!="")  )
        {
            test_NumTel=true;

        }



        if(  (Adresse==""))
        {
            test_Adresse=false;

        }
        
        if(  (Adresse!=""))
        {
            test_Adresse=true;

        }


        if(  (DateNaissance==""))
        {
            test_DateNaissance=false;

        }

        if(  (DateNaissance!=""))
        {
            test_DateNaissance=true;

        }

 
    ////////////////////////////////////////////////////// 
        
        if (test_profession==false){
            document.getElementById("professionErr").style.display='flex';

        }

        if (test_profession==true){
            document.getElementById("professionErr").style.display='none';

        }

                
        if (test_NumCIN==false){
            document.getElementById("NumCINErr").style.display='flex';

        }

        if (test_NumCIN==true){
            document.getElementById("NumCINErr").style.display='none';

        }

        if (test_NumTel==false){
            document.getElementById("NumTelErr").style.display='flex';

        }

        if (test_NumTel==true){
            document.getElementById("NumTelErr").style.display='none';

        }


        if (test_Adresse==false){
            document.getElementById("adresseErr").style.display='flex';

        }

        if (test_Adresse==true){
            document.getElementById("adresseErr").style.display='none';

        }

        if (test_DateNaissance==false){
            document.getElementById("dateNaissanceErr").style.display='flex';

        }

        if (test_DateNaissance==true){
            document.getElementById("dateNaissanceErr").style.display='none';

        }
   

        if (test_profession==true && test_NumCIN ==true && test_NumTel==true  && test_Adresse==true &&  test_DateNaissance==true){
            console.log('Parfait')


            NewUserPart2.profession=profession;
            NewUserPart2.NumCIN=NumCIN;
            NewUserPart2.NumTel=NumTel;
            NewUserPart2.Adresse=Adresse;
            NewUserPart2.DatedeNaissance=DateNaissance;



            window.NewUserData2=NewUserPart2;//declaring global variable by window object  

            navigate('/p11')


        }


    }





    const Ligne2=()=>{
        return(
            <div className='ligne2'> 
                <div className='logo_img_container'>
                    <img className='logo_img' src={logo}></img>
                </div>
            
            </div>
        )
    }



    return(
        <>
        <Ligne2></Ligne2>
            <div className='InscriptionBox_Cont'>
            <div className="InscriptionBox">
                <div className="InscriptionBox_container">

                    <div className='Inscription_Box_left'>
                        <h1>Créer votre compte</h1>

                            <div className='input_information_container'>
                                <div className='elements_name'>
                                    <div className='profession_input'>
                                        <label className='label_element'> Profession :</label>
                                    </div>
                                    <span  id='professionErr'> Veuillez entrer votre profession </span>

                                    <div className='num_cin_input label_element'>
                                        <label className='label_element'> Num CIN :</label>
                                    </div>
                                    <span id='NumCINErr'> Veuillez entrer votre CIN </span>


                                    <div className='num_cin_input label_element'>
                                        <label className='label_element'> Num Tel :</label>
                                    </div>
                                    <span id='NumTelErr'> Veuillez entrer votre Num tel </span>


                                    <div className='num_cin_input label_element'>
                                        <label className='label_element'> Adresse :</label>
                                    </div>
                                    <span id='adresseErr'> Veuillez entrer votre adresse </span>



                                    <div className='num_cin_input label_element'>
                                        <label className='label_element'> Date de naissance :</label>
                                    </div>
                                    <span id='dateNaissanceErr'> Veuillez entrer votre Date de naissance </span>


                                </div>

                                <div className='elements_content'>
                                    <div>
                                       <div> 
                                           <input placeholder='Profession' className='input_element' type="text" id="professionInput"  required size="20"/>
                                       </div>
                                       
                                       <div>
                                            <input placeholder='Num CIN' className='input_element' type="text" id="NumCINInput" required  size="20"/>
                                       </div>
                                    

                                       <div>
                                            <input  placeholder='Num Tel' className='input_element' type="text"  id="NumTelInput" required  size="20"/>
                                        </div>
                                    
                                    
                                        <div>
                                            <input placeholder='Adresse' className='input_element' type="text" id="AdresseInput" required  size="20"/>
                                        </div>
                                    
                                        <div>
                                            <input className='input_element' type="Date"  id="DateNaissanceInput"  required size="20"/>
                                        </div>
                                    </div>

                                </div>





                            
                            </div>
                            
                            <div className='buttons_container'>
                                    
                                    <Link to='/p3'>
                                    <div className='buttn Accueil_btn'>
                                        <h4> Précédent</h4>
                                    </div>
                                    </Link>
                                    <div onClick={handleSuivant} className=' buttn suivant_btn'>
                                        <h4> Suivant</h4>
                                    </div>

                                </div>
                            
                    </div>  

                    <div className='Inscription_Box_right'>
                    <img className='Bank_photo' src={bank_photo}></img>

                    </div>


                </div>
            
            </div>
            </div>
        </>
    )
}


export default InscriptionBoxtwo;