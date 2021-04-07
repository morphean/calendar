import { render, screen } from '@testing-library/react';
import {CalendarEntry} from './CalendarEntry';

test('renders a calendar entry', () => {
    const expectedTime = new Date(Date.now()).setHours(9,0,0,0);
    render(<CalendarEntry title={'a title'} description={'a description'} startTime={new Date(expectedTime)} columnIndex={0}/>);
    const title = screen.getByText(/a title/i);
    const description = screen.getByText(/a description/i);
    const startTime = screen.getByText(/09\:00/i);
    expect(title).toBeInTheDocument();
    expect(startTime).toBeInTheDocument();
    expect(description).toBeInTheDocument();
});
