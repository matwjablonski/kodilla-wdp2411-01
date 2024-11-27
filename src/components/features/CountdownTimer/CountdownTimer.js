import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './CountdownTimer.module.scss';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeRemaining = targetDate - now;
      if (timeRemaining <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div>
      <p>
        <span className={styles.circle}>
          <span className={styles.number}>{timeLeft.days}</span>
          <span className={styles.label}>days</span>
        </span>
        <span className={styles.circle}>
          <span className={styles.number}>{timeLeft.hours}</span>
          <span className={styles.label}>hrs</span>
        </span>
        <span className={styles.circle}>
          <span className={styles.number}>{timeLeft.minutes}</span>
          <span className={styles.label}>mins</span>
        </span>
        <span className={styles.circle}>
          <span className={styles.number}>{timeLeft.seconds}</span>
          <span className={styles.label}>secs</span>
        </span>
      </p>
    </div>
  );
};

CountdownTimer.propTypes = {
  targetDate: PropTypes.instanceOf(Date).isRequired,
};

export default CountdownTimer;
