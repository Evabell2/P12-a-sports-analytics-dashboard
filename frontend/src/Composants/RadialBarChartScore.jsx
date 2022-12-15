import service from "../service"
import { useState, useEffect } from 'react'
import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, LabelList, Legend, ResponsiveContainer } from 'recharts';

function RadialBarChartScore() {
  const [score, setScore] = useState([

    {
      uv: 0,
      fill: '#FF0000',
    },
    {
      uv: 1,
      fill: 'rgba(0, 0, 0, 0)',
    },
  ])
  useEffect(() => {
    service.getUser(18)
    .then(data => {
      setScore([

        {
          uv: data,
          fill: '#FF0000',
        },
        {
          uv: 1,
          fill: 'rgba(0, 0, 0, 0)',
        },
      ])
    })
})
    return (
      <div className='RadialBarChart_Score'>
        <h2>Score</h2>
        <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart innerRadius="100%" outerRadius="60%" barSize={10} startAngle={130} data={score}>
                <RadialBar dataKey="uv" background clockWise={true} />
            </RadialBarChart>
        </ResponsiveContainer>
        <h3>de votre objectif</h3>
      </div>
    )
}
    
export default RadialBarChartScore

