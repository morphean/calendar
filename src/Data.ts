import * as faker from 'faker';
import { ICalendarEntry } from "./Interfaces";
import {
    DAY_END_TIME,
    DAY_START_TIME,
    DURATION_END,
    DURATION_START,
    HOUR_END,
    HOUR_START,
    NO_OF_ENTRIES
} from "./Constants";

export const generateEntries: () => ICalendarEntry[] = () => {
    const entries = [];

    for (let i=0;i<NO_OF_ENTRIES;i++) {
        const entry = {
            title: `${faker.name.findName()}`,
            startTime: getRandomStartTime(),
            description: faker.random.words(),
            duration: getRandomDuration(),
            columnIndex: 0
        }
        entries.push(entry);
    }
    const sortedEntries = entries.slice().sort(sortByTime);
    return sortedEntries;
};

const getRandomHour = () => {
    const result = getRandomNumberWithinLimit(DAY_START_TIME, DAY_END_TIME);
    return result;
};

const getRandomMinute = () => {
    return getRandomNumberWithinLimit(HOUR_START, HOUR_END);
}

const getRandomDuration = () => {
    return getRandomNumberWithinLimit(DURATION_START, DURATION_END)
};

const getRandomNumberWithinLimit = (start: number, end: number) => {
    const rn = Math.random()*(end - start+1)+start;
    const result = Math.floor(rn);
    return result;
};

const getRandomStartTime = () => {
    const today = new Date(Date.now());
    today.setHours(getRandomHour(), getRandomMinute(), 0, 0);
    return today;
};

const sortByTime = (a: ICalendarEntry, b: ICalendarEntry) => {
    return a.startTime.valueOf() - b.startTime.valueOf()
}