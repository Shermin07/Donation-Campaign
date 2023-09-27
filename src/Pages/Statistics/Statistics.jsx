import React, { useEffect, useState } from "react";
import { PieChart, Pie, Legend, Tooltip, Cell, ResponsiveContainer } from "recharts";
import { useLoaderData } from "react-router-dom";

const Statistics = () => {
  const allData = useLoaderData();
  const allDataNum = allData.length;
  const favoritieDonations = JSON.parse(localStorage.getItem('favorities'));
  const selectedDataNum = favoritieDonations.length;

  
  const percentage = parseFloat(((selectedDataNum / allDataNum) * 100).toFixed(2));

  const pieChartData = [
    { name: 'Your donation', value: percentage },
    { name: 'Total donation', value: 100 - percentage },
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
            label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
              const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
              const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
              const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

              return (
                <text
                  x={x}
                  y={y}
                  fill="white"
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  {`${(percent * 100).toFixed(2)}%`}
                </text>
              );
            }}
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value, name) => [`${(value * 100).toFixed(2)}%`, name]} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
