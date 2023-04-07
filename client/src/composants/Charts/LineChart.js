
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
        data:[10,12,15,20,26,35,38,42,55,60],
        backgroundColor:["#4bc0c0"],
        borderColor:"#4bc0c0"
      }
      
      ],
      })






    return(


        <Line data={userData} options={
            {
                plugins: {
                  title: {
                    display: true,
                    text: 'Evolution du nombre de clients de la plateforme'
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