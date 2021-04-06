export interface ICalendarEntry {
    title: string,
    startTime: Date,
    duration?: number,
    description?: string,
    columnIndex: number
}

export interface ICalender {
    calendarEntries: Array<ICalendarEntry>
}