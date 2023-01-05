import service from "../service"
import { useState, useEffect } from 'react'
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

function RadarChartTypeActivity() {
    const [performance, setPerformance] = useState({})
    useEffect(() => {
        service.getPerformance(18)
        .then(data => {
            setPerformance(data)
        })
    })

    return (
        <div className='RadarChart'>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={transformedData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="kind" />
                    <PolarRadiusAxis />
                    <Radar dataKey="value" />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}
export default RadarChartTypeActivity

const data = {
    data: {
      userId: 18,
      kind: {
        1: "cardio",
        2: "energy",
        3: "endurance",
        4: "strength",
        5: "speed",
        6: "intensity"
      },
      data: [
        { value: 200, kind: 1 },
        { value: 240, kind: 2 },
        { value: 80, kind: 3 },
        { value: 80, kind: 4 },
        { value: 220, kind: 5 },
        { value: 110, kind: 6 }
      ]
    }
  };
  
  const transformedData = data.data.data.map(obj => {
    const kind = data.data.kind[obj.kind];
    return { kind, value: obj.value };
  });

