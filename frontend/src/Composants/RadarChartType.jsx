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
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={performance.data && performance.data.data}>
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

