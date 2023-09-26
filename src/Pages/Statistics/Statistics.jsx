/* eslint-disable no-undef */
import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip,Cell, ResponsiveContainer } from 'recharts';


import { useEffect, useState} from "react";
import { useLoaderData } from "react-router-dom";



const Statistics = () => {
    
   
   const allData = useLoaderData();
   const allDataNum = allData.length ;
   console.log(allDataNum) ;
   const favoritieDonations = JSON.parse(localStorage.getItem('favorities'));
   
 const selectedDataNum = favoritieDonations.length ;
 console.log(selectedDataNum) ;


 const percentage = (selectedDataNum / allDataNum) * 100;
 const pieChartData = [
    { name: 'Total donation', value: percentage },
    { name: 'Your donation', value: 100 - percentage },
  ];

   
    
  const colors = ['#FF5733', '#4286f4'];
   
  
    return (
      <div>
 <h1 className='text-center font-bold text-blue-800 text-2xl'>Donation Statistics</h1>

<ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            dataKey="value"
            data={pieChartData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            
            label>
                 {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
            </Pie>
          
          
         
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
   
  
    

      </div> 
      );
};

export default Statistics;