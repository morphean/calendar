import './App.css';
import React, {useState} from "react";
import {Calendar} from "./components/Calendar";
import {generateEntries} from "./Data";
import {ApptTimes} from "./components/ApptTimes";
import {DAY_END_TIME, DAY_START_TIME} from "./Constants";


function App() {
    const [ entries ] = useState( generateEntries() );

    return (
    <div className="App container">
        <ApptTimes startOfDay={DAY_START_TIME} endOfDay={DAY_END_TIME}/>
        <Calendar calendarEntries={entries}/>
    </div>
    );
}

export default App;
