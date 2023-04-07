
import React from 'react';
import {Bar} from 'react-chartjs-2'
import {chart as chartjs} from 'chart.js/auto'
import { useState } from 'react';


function BarChart(){



    const [userData, setUserData]=useState({
 
        labels:["Jan","Fev","Mars","Avril","Mai","Juin","Jui","Aute","Spt","Oct","Nov","Dec"],
      
      datasets :[
        {
        label:"Crédit Personnel",
        data:[7,8,4,7,9,6,5,4,7,8,9,8,8],
        backgroundColor:["#36a2eb"]
      },
      {
        label:"Crédit Eslah",
        data:[5,4,6,2,1,1,4,8,9,10,8,9],
        backgroundColor:["#ff6384"]
      },
      {
        label:"Crédit Auto",
        data:[5,4,6,2,1,1,4,8,9,10,8,9],
        backgroundColor:["#ff9f40"]
      }
      
      ],
      })






    return(


        <Bar data={userData} options={{
            plugins: {
              title: {
                display: true,
                text: 'Répartition des crédits choisis par type de crédit '
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
          }}></Bar>
    )




}

export default BarChart;