import React from 'react';
import { hours } from '../../../constants'
import Hour from '../Hour';

const Hours = ({ onHourClick, hourData }) => (
    hours.map((hour, index) => {
        return (<div key={index} >
            <Hour hour={hour} onClick={onHourClick} isLogAdded={hourData[hour] ? true : false} />
        </div>)
    })
)
export default Hours;