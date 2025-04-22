import logo from './logo.svg';
import './App.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Set up localizer
const localizer = momentLocalizer(moment);

// Sample events
const events = [
  {
    title: 'Meeting',
    start: new Date(2025, 3, 22, 10, 0), // April 22, 2025, 10:00
    end: new Date(2025, 3, 22, 11, 0),
  },
];

function MyCalendar() {
  return (
    <div style={{ height: 500 }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
      />
    </div>
  );
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <MyCalendar></MyCalendar>
      </header>
    </div>
  );
}

export default App;
