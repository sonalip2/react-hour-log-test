import React from 'react';
import s from './Hour.module.scss'

const Hour = ({ hour, isLogAdded, onClick }) => (
    <div className={`${s.hour} ${isLogAdded ? s.selected : ''}`} onClick={() => onClick(hour)}>
        <span>{hour}</span>
    </div>
)

export default Hour;