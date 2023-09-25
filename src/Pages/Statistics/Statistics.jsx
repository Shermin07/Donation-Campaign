/* eslint-disable no-undef */
import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';


import { useEffect, useState} from "react";
import { useLoaderData } from "react-router-dom";



const Statistics = () => {
    const [categoryData, setCategoryData] = useState([]);
   
   const allData = useLoaderData();
   const allDataNum = allData.length ;
   console.log(allDataNum) ;
   const favoritieDonations = JSON.parse(localStorage.getItem('favorities'));
   
 const selectedDataNum = favoritieDonations.length ;
 console.log(selectedDataNum) ;

 
    
   useEffect( () =>{

   

   
    
    
   }
    
    
    ,[allData])
    
  
    return (
      <div>
<h1>hello</h1>
    <PieChart  width={400} height={400} data={allDataNum} >
        <Pie  dataKey="value"
            isAnimationActive={false}
             stroke='red'
           
           
            >

        </Pie>
        <Tooltip></Tooltip>
       

       
    </PieChart>
  
    

      </div> 
      );
};

export default Statistics;