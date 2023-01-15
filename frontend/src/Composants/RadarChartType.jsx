import service from "../service"
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

/**
 * @component 
 * @param {string} userID - The ID of the user for which we are displaying activity data.
 * @returns {JSX.Element} - User Activity Performance Graph Rendering.
 */
function RadarChartTypeActivity({userID}) {
    const [performance, setPerformance] = useState({})
    useEffect(() => {
      service.getPerformance(userID)
      .then(data => {
          setPerformance(data)
        })
    },)

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

RadarChartTypeActivity.propTypes = {
    userID: PropTypes.string.isRequired,
}
  

