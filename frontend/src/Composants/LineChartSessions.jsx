import service from "../service"
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import React from 'react';
import { LineChart, Line, XAxis, Tooltip } from 'recharts';

function LineChartDurationSessions({userID}) {
    const [duration, setDuration] = useState({})
    useEffect(() => {
        service.getAverageSessions(userID)
        .then(data => {
            setDuration(data)
        })
    })
    
    return (
        <div className='lineChart'>
            <h2>Durée moyenne des sessions</h2>
            <LineChart width={300} height={160} data={duration.data && duration.data.sessions}>
                <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" strokeWidth={2} />
                <XAxis dataKey="day" position="bottom" tick={{ interval: 0 }} />
                <Tooltip wrapperStyle={{ border: 'none' }} />
            </LineChart>
        </div>
    )
}
LineChartDurationSessions.propTypes = {
    userID: PropTypes.string.isRequired,
}
export default LineChartDurationSessions