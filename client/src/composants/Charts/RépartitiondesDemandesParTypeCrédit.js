
import React from 'react';
import {Doughnut} from 'react-chartjs-2'
import {chart as chartjs} from 'chart.js/auto'
import { useState } from 'react';


function PieChartParAge(){




    const [userData, setUserData]=useState({
 
        labels:["(Crédit auto)","(Crédit Personnel)","(Crédit Eslah)"],
      
      datasets :[
        {
            label:"Courbe d'évolution",
        data:[11,30,59],
        backgroundColor:["#36a2eb","#ff9f40",'#ff6384'],
      }
      
      ],
      })






    return(


        <Doughnut data={userData} 
        
        options={
            {
                responsive:true,
                maintainAspectRatio:true,
                aspectRatio:2,
                aspectRatio:true,
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                  title: {
                    display: true,
                    text: 'Répartition de nos demandes par type de crédit en %'
                  }
                }
              }
              

        } 

   
         ></Doughnut>
    )




}

export default PieChartParAge;