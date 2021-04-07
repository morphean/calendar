import React, {FunctionComponent} from 'react';
import {CalendarEntry} from "./CalendarEntry";
import {ICalender} from "../Interfaces";
import { v4 as uuidv4 } from 'uuid';
import {DAY_START_TIME} from "../Constants";

export const Calendar: FunctionComponent<ICalender> = ({calendarEntries}) => {

    const calculatePosition = (startTime: Date, duration: number) => {

        const start = new Date(Date.now()).setHours(DAY_START_TIME, 0, 0, 0);
        const diff = startTime.valueOf() - start.valueOf();
        const minutesToPxMultiplier = 100/60;
        const top =  Math.round(diff/60000 * minutesToPxMultiplier);
        const height = Math.round((duration * minutesToPxMultiplier)+5 || 0);
        const columnIndex = 0;
        return {
            height,
            top,
            columnIndex
        }
    }

    const entryPositions = calendarEntries.map(entry => {
        return calculatePosition(entry.startTime, entry.duration && entry.duration || 0);
    });

    const entryPositionsWithColumns = entryPositions.reduce( (acc: any, current: any, index) => {
        const {top, height} = current;
        let {columnIndex} = current;

        if (index>0) {
            const willOverlap = top < acc[index-1].top + acc[index-1].height;

            if (willOverlap) {
                console.log('will overlap');
                const prevColumnIndex = acc[index-1].columnIndex;
                columnIndex = prevColumnIndex+1;
                console.log('columnIndex: ', columnIndex)
                if (index>1) {
                    // const prevPrevEntry = acc[index-2];
                    // const willFitInPreviousColumn = top > prevPrevEntry.top + prevPrevEntry.height;
                    // if (willFitInPreviousColumn) {
                    //     columnIndex = prevPrevEntry.columnIndex;
                    // }
                }
            } else {
                columnIndex = 0;
            }
        }
        acc.push({top, height, columnIndex });
        return acc
    }, [] );

    const entries = calendarEntries.map( (entry, index) =>{
        const {title, description, startTime, duration} = entry;
        const overlap: boolean = false;
        const { columnIndex } = entryPositionsWithColumns[index];
        return <CalendarEntry
            key={uuidv4()}
            title={title}
            startTime={startTime}
            description={description}
            duration={duration}
            columnIndex={columnIndex || 0}
        />
    });

    return (<div className='calendar'>{entries}</div>)
};