import React, { useState, useEffect } from 'react';
import '../styles/counter.css';

const Tracker = () => {
  const [targetDate] = useState(new Date('2023-05-02T00:01:00'));
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(updateTimeElapsed, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [setTimeElapsed]);

  const updateTimeElapsed = () => {
    const currentTime = new Date();
    const timeDifference = currentTime - targetDate;

    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
      const seconds = Math.floor((timeDifference / 1000) % 60);

      setTimeElapsed({ days, hours, minutes, seconds });
    } else {
      // Handle the case when the target date is in the future
      setTimeElapsed({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  };

  return (
    <div className="clock-container">
      <h1 className="counter-title">WGA ON <span className="strike">STRIKE</span></h1>
      <div className="clock">
        <div className="time">
          <div className="count">
            <span className="days-count">{timeElapsed.days}</span>
            <span className="days-header">days</span>
          </div>
          <div className="count">
            <span className="hours-count">{timeElapsed.hours}</span>
            <span className="hours-header">hours</span>
          </div>
          <div className="count">
            <span className="minutes-count">{timeElapsed.minutes}</span>
            <span className="minutes-header">minutes</span>
          </div>
          <div className="count">
            <span className="seconds-count">{timeElapsed.seconds}</span>
            <span className="seconds-header">seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracker;
