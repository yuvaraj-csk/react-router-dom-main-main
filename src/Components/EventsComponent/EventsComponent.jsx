import React, { useEffect, useState } from 'react';
import './EventsComponent.css';
import eventImage1 from '../../assets/Images/sports.png'; // Adjust the path to your image
import eventImage2 from '../../assets/Images/cultural.jpeg'; // Adjust the path to your image
import eventImage3 from '../../assets/Images/expo.jpeg'; // Adjust the path to your image

const eventDetails = [
  {
    name: 'Sports Day',
    image: eventImage1,
    description: 'An exciting day of sports activities and competitions.',
  },
  {
    name: 'Cultural Fest',
    image: eventImage2,
    description: 'A celebration of diverse cultures and traditions.',
  },
  {
    name: 'Tech Expo',
    image: eventImage3,
    description: 'Showcase of the latest technological innovations.',
  },
];

const EventsComponent = () => {
  const [currentEvent, setCurrentEvent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEvent((prevEvent) => (prevEvent + 1) % eventDetails.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="event-card">
      <h1>Events</h1>
      <div className="event-content">
        <img src={eventDetails[currentEvent].image} alt={eventDetails[currentEvent].name} />
        <h2>{eventDetails[currentEvent].name}</h2>
        <p>{eventDetails[currentEvent].description}</p>
      </div>
    </div>
  );
};

export default EventsComponent;
