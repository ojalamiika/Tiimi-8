import React, { useState } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './App.css'; // Keep your styling

const localizer = momentLocalizer(moment);

const events = [
  { title: ' Osakon Vappusuunnistus', description: ' klo 14.00-23.00, Yliopistokatu 9', start: new Date(2025, 3, 29, 15, 0), end: new Date(2025, 3, 29, 22, 0), url: " https://kide.app/events/ba23799d-7553-4d12-ad89-884644193e28 " }, 

{ title: 'Juomapeliapprot ', description: 'klo 14.00-20.00, Linnanmaa ', start: new Date(2025, 3, 29, 15, 0), end: new Date(2025, 3, 29, 22, 0), url: " https://kide.app/events/b1f73ebe-68bb-4dbf-9583-08342ec8bd5d " }, 

{ title: 'Wauhdikas Wappujuna ', description: 'klo 18.00-22.00, Linnanmaa-Torinranta  ', start: new Date(2025, 3, 29, 18, 0), end: new Date(2025, 3, 29, 22, 0), url: " https://kide.app/events/143480c7-bb82-4912-9e94-030bfbeaed90 " }, 

{ title: 'Terveystieteiden killan vappugaala ', description: 'klo 18.00-23.30, Oulun kiipeilykeskus, Paakakatu 7 ', start: new Date(2025, 3, 29, 15, 0), end: new Date(2025, 3, 29, 22, 0), url: " https://kide.app/events/5e1b864f-84a8-4e98-9b9c-46347738eb26" }, 

{ title: 'Waatonaatto ', description: 'klo 21.00-05.00, Ilona, Torikatu 21-23 ', start: new Date(2025, 3, 29, 15, 0), end: new Date(2025, 3, 29, 22, 0), url: " https://kide.app/events/2a77f247-f39b-4586-a81a-59e70cf75723 " }, 

{ title: 'Osakon Vappusuunistuksen jatkot ', description: 'klo 22.00-05.00, Osako, Yliopistokatu 9 ', start: new Date(2025, 3, 29, 15, 0), end: new Date(2025, 3, 29, 22, 0), url: " https://kide.app/events/7c7c8982-98ba-4ad3-a9ca-de2a54273239 " }, 

{ title: 'OIOn lakitustilaisuus ', description: 'klo 12.00-12.30, Toripolliisi, Kauppatori 1 ', start: new Date(2025, 3, 30, 15, 0), end: new Date(2025, 3, 30, 22, 0), url: " https://kide.app/events/ff437416-1192-4df3-89e6-b7276156d90f/details " }, 

{ title: 'Oulun vappuapprot ', description: 'klo 15.30-21.00, O Diako, Mannerheiminpuisto ', start: new Date(2025, 3, 30, 15, 0), end: new Date(2025, 3, 30, 22, 0), url: " https://kide.app/events/7cf4c28f-e187-46a3-9333-f08e62c4558e " }, 

{ title: 'Finanssin Wappusauna ', description: 'klo 16.00-03.00, Johteenhovi, Kansankentäntie 4', start: new Date(2025, 3, 30, 15, 0), end: new Date(2025, 3, 30, 22, 0), url: " https://kide.app/events/d115c349-0f5a-423a-988c-450cd630f109 " }, 

{ title: 'Waatto, Mango ', description: 'klo 20.00-05.00, Mango Discobar, Saaristokatu 16 ', start: new Date(2025, 3, 30, 15, 0), end: new Date(2025, 3, 30, 22, 0), url: " https://kide.app/events/fe0a7c86-0536-4f53-9018-3471b303331d " }, 

{ title: 'Waatto, Kantakrouvi ', description: 'klo 20.00-05.00, Oulun Teekkariyhdistys ry,  ', start: new Date(2025, 3, 30, 15, 0), end: new Date(2025, 3, 30, 22, 0), url: " https://kide.app/events/aafa2785-08aa-4ca8-9ce9-207e69a738b5 " }, 

{ title: 'Waattobileet walhallassa ', description: 'klo 20.00-09.00, Oulun Lääketieteellinen Kilta ry, PL 5000, Oulun Yliopisto ', start: new Date(2025, 3, 30, 15, 0), end: new Date(2025, 3, 30, 22, 0), url: " https://kide.app/events/424e23e8-4a3c-49c1-8434-c8efbca5e7ea " }, 

{ title: 'Tekniikan alan valmistuvien tapahtuma ', description: 'klo 18.00-20.30, Pelibunkkeri, Pakkahuoneenkatu 17 ', start: new Date(2025, 4, 2, 15, 0), end: new Date(2025, 4, 2, 22, 0), url: " https://kide.app/events/f58cd7b0-7856-4004-a725-93ee882a1f1e " }, 

{ title: 'Oulu Career Conclave: CV & LinkedIn Strategies ', description: 'klo 14.00-16.00, Tellus Stage, Linnanmaa Campus, Erkki Koiso-Kanttilan katu 1 ', start: new Date(2025, 4, 7, 15, 0), end: new Date(2025, 4, 7, 22, 0), url: " https://kide.app/events/856945d3-2897-49fc-92c4-fdd11988592e " }, 

{ title: 'Ratapäivät ', description: 'klo 21.00-03.00, Teekkaritalo, Kalervontie 7 ', start: new Date(2025, 4, 10, 15, 0), end: new Date(2025, 4, 10, 22, 0), url: " https://kide.app/events/7a6f0a4d-2953-4c20-bb96-b3f791d75058 " }, 

{ title: 'LaunchX 2025 ', description: ' Oulu Entrepreneurship Society, Erkki Koiso-Kanttilan katu 1 ', start: new Date(2025, 4,31, 15, 0), end: new Date(2025, 4, 31, 22, 0), url: " https://kide.app/events/9dabd7c4-135e-477c-a29c-9edb146a7a7e " }, 

{ title: 'Päättäjäiset @Tullisali 31.5 ', description: 'Tapahtumakeskus Tullisali, Tyrnäväntie 16 ', start: new Date(2025, 4, 31, 15, 0), end: new Date(2025, 4, 31, 22, 0), url: " https://kide.app/events/b864890a-b31a-47fa-bba4-93d3c45ccead " }, 
];

const CustomEvent = ({ event }) => (
  <div style={{ 
    whiteSpace: 'normal', 
    wordWrap: 'break-word', 
    padding: '2px',
    marginBottom: '0px',
    backgroundColor: '#2c6da4', 
    color: 'white', 
    borderRadius: '4px',
    height: '100%'
  }}>
    <strong style={{ fontSize: '1rem' }}>{event.title}</strong>
    <div>{event.description}</div>
  </div>
);

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState(Views.MONTH);

  return (
    <div style={{ height: '98vh', width: '98%', justifyContent: 'center', padding: '1rem' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '96%' }}
        views={[Views.MONTH]}
        view={view}
        date={date}
        onView={(newView) => setView(newView)}
        onNavigate={(newDate) => setDate(newDate)}
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
      <MyCalendar />
    </div>
  );
}

export default App;
