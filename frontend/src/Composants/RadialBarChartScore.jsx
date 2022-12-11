import service from "../service"
import { useState, useEffect } from 'react'
import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

function RadialBarChartScore() {
  const [score, setScore] = useState({})
  useEffect(() => {
    service.getUser(18)
    .then(data => {
      setScore(data)
    })
})
const data = [

  {
    uv: 2.63,
    pv: 4800,
    fill: '#d0ed57',
  },
  {
    uv: 6.67,
    pv: 4800,
    fill: '#ffc658',
  },
]
    return (
      <div className='RadialBarChart_Score'>
        <h2>Score</h2>
        <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart innerRadius="100%" outerRadius="60%" barSize={10} data={data}>
                <RadialBar dataKey="uv" />
            </RadialBarChart>
        </ResponsiveContainer>
        <h3>de votre objectif</h3>
      </div>
    )
}
    
export default RadialBarChartScore

