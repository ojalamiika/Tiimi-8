import './App.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Meeting',
    description: 'Discuss project roadmap, assign tasks, and set deadlines. Starting at ',
    start: new Date(2025, 3, 22, 15, 0), // 2025, april 22nd, 15.00 -> 22.00
    end: new Date(2025, 3, 22, 22, 0),
    url: "https://kide.app/events/ba23799d-7553-4d12-ad89-884644193e28"
  },
];

const CustomEvent = ({ event }) => {
  return (
    <div style={{ 
      whiteSpace: 'normal', 
      wordWrap: 'break-word', 
      padding: '4px',
      backgroundColor: '#2c6da4', 
      color: 'white', 
      borderRadius: '4px',
      height: '100%'
    }}>
      <strong>{event.title}</strong>
      <div>{event.description}</div>
    </div>
  );
};


const MyCalendar = ({ events }) => {
  return (
    <div style={{ 
      height: '100vh', 
      width: '98%', 
      justifyContent: 'center',
      padding: '1rem' 
    }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
        views={['month']}
        popup
        onSelectEvent={(event) => window.open(event.url, '_blank')}
        components={{
          event: CustomEvent
        }}
      />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <MyCalendar events={events} />
    </div>
  );
}

export default App;