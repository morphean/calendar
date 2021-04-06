import React, {FunctionComponent} from 'react';
import {ICalendarEntry} from "../Interfaces";
import {DAY_START_TIME} from "../Constants";

const calculatePosition = (startTime: Date, duration: number, columnIndex: number) => {

    const start = new Date(Date.now()).setHours(DAY_START_TIME, 0, 0, 0);
    const diff = startTime.valueOf() - start.valueOf();
    const minutesToPxMultiplier = 100/60;
    const top =  Math.round(diff/60000 * minutesToPxMultiplier);
    const height = Math.round((duration * minutesToPxMultiplier) || 0);
    const left = columnIndex * 155;
    return {
        height,
        top,
        left
    }
}

//style={{minHeight: duration && duration*100/60 | 0, top: getYPosition(startTime)}}
export const CalendarEntry: FunctionComponent<ICalendarEntry> = ({title, startTime, duration, description, columnIndex}) => {
    const style = calculatePosition(startTime, duration || 0, columnIndex);

    return (
    <div className='calendar-item' style={style}>
        <h2>{startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {title}</h2>
        <p>{description}</p>
    </div>)};