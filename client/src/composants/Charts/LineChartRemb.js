
import React from 'react';
import {Line} from 'react-chartjs-2'
import {chart as chartjs} from 'chart.js/auto'
import { useState } from 'react';


function BarChart(){




    const [userData, setUserData]=useState({
 
        labels:["Jan","Fev","Mars","Avril","Mai","Juin","Jui","Aute","Spt","Oct","Nov","Dec"],
      
      datasets :[
        {
            label:"Courbe d'évolution",
        data:[4000,6800,7200,8000,10000,14000,15500,17000,18000],
        backgroundColor:["#36a2eb"],
        borderColor:"#36a2eb"
      }
      
      ],
      })






    return(


        <Line data={userData} options={
            {
                plugins: {
                  title: {
                    display: true,
                    text: 'Evolution de la valeur des remboursement des clients'
                },
                },
                responsive: true,
                scales: {
                  x: {
                    stacked: true,
                  },
                  y: {
                    stacked: true
                  }
                }
              }

        }  ></Line>
    )




}

export default BarChart;