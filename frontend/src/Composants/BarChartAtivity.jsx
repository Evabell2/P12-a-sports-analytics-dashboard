import service from "../service"
import { useState, useEffect } from 'react'
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function BarChartActivity() {
  const [activity, setActivity] = useState({})
  useEffect(() => {
    service.getActivity(18)
    .then(data => {
      setActivity(data)
    })
  }) 

  return (
    <div className="bachart">
      <BarChart
        width={880} height={250}
        data={activity.data && activity.data.sessions}
        margin={{top: 5, right: 0, left: 20, bottom: 5}}
      >
        <CartesianGrid strokeDasharray="3 3" width={700}/>
        <XAxis dataKey="day" axisLine={{ length: 200 }} />
        <YAxis tickCount={3} orientation="right"/>
        <Tooltip cursor={{ width: 60 }} wrapperStyle={{ borderColor: 'rgba(0, 0, 0, 0)' }}/>
        <Legend verticalAlign="top" />
        <Bar dataKey="kilogram" fill="#282D30" radius={[3, 3, 0, 0]} name="Poids (kg)" barSize={7} />
        <Bar dataKey="calories" fill="#E60000" radius={[3, 3, 0, 0]} name="Calories brûlées (kCal)" barSize={7} />
      </BarChart>
    </div>
  )
}
export default BarChartActivity