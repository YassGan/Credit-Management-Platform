
import React from 'react';
import {Pie} from 'react-chartjs-2'
import {chart as chartjs} from 'chart.js/auto'
import { useState } from 'react';


function PieChartParAge(){




    const [userData, setUserData]=useState({
 
        labels:["(18-29)","(30-48)","(plus de 49)"],
      
      datasets :[
        {
            label:"Courbe d'évolution",
        data:[11,30,59],
        backgroundColor:["#36a2eb",'#ff6384',"#4bc0c0"],
      }
      
      ],
      })






    return(


        <Pie data={userData} 
        
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
                    text: 'Répartition de nos clients par tranche d\'age en %'
                  }
                }
              }
              

        } 

   
         ></Pie>
    )




}

export default PieChartParAge;