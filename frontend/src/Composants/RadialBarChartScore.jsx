import service from "../service"
import { useState, useEffect } from 'react'
import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

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
          uv: data.data.score,
          fill: '#FF0000',
        },
        {
          uv: 1,
          fill: 'rgba(0, 0, 0, 0)',
        },
      ])
    })
  }, [])
  
  return (
    <div className='RadialBarChart_Score'>
      <h2>Score</h2>
      <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart  innerRadius="100%" outerRadius="60%" barSize={10} startAngle={70} endAngle={360} data={score} overflow="visible">
              <RadialBar dataKey="uv" clockWise  cornerRadius={10} />
          </RadialBarChart>
      </ResponsiveContainer>
      <span><p>{`${score[0].uv*100}%`}</p>de votre objectif</span>
    </div>
  )
}
    
export default RadialBarChartScore
