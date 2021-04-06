import { render, screen } from '@testing-library/react';
import {CalendarEntry} from './CalendarEntry';

test('renders a calendar entry', () => {
    const expectedTime = new Date(Date.now());
    render(<CalendarEntry title={'a title'} description={'a description'} startTime={expectedTime}/>);
    const title = screen.getByText(/a title/i);
    const description = screen.getByText(/a description/i);
    const startTime = screen.getByText(expectedTime.toLocaleTimeString());
    expect(title).toBeInTheDocument();
    expect(startTime).toBeInTheDocument();
    expect(description).toBeInTheDocument();
});
