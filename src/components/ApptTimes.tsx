import React from 'react';
import {v4 as uuidv4} from "uuid";
import {start} from "repl";
import {APPT_ENTRY_DIVISION_MARKER} from "../Constants";

type ApptTimesProps = {
    startOfDay: number,
    endOfDay: number,
    delimiterValue?: number
}

export const ApptTimes = ({startOfDay, endOfDay, delimiterValue = APPT_ENTRY_DIVISION_MARKER}: ApptTimesProps) => {
    const apptTimes = [];

    const startTime = new Date(Date.now());
    startTime.setHours(startOfDay);
    startTime.setMinutes(0);
    startTime.setSeconds(0);
    startTime.setMilliseconds(0);

    const noOfApptTimes = (endOfDay - startOfDay) * 4;

    for (let i = 0; i< noOfApptTimes+1; i++) {
        const apptTime = startTime.valueOf()+(i*15*1000*60);
        apptTimes.push(new Date(apptTime));
    }

    return (<div className='appt-time-container'>{apptTimes.map( appTime => {
        const isOnTheHour = appTime.valueOf() % delimiterValue === 0;
        return (
        <div key={uuidv4()}
             className={`row appt-time ${isOnTheHour ? 'hour' : ''}`}>{appTime.toLocaleTimeString()}</div>
    )})}</div>);
}