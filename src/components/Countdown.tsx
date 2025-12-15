import { useEffect, useState } from 'react';

function getISTTarget() {
  // Set your target date (YYYY, MM-1, DD, HH, MM)
  // Example: 25 Dec 2025, 3:23 AM IST
  const istTarget = new Date(Date.UTC(2025, 11, 15, 21, 53));
  // Explanation:
  // 3:23 AM IST = 21:53 UTC (previous day)

  return istTarget.getTime();
}

export default function Countdown() {
  const target = getISTTarget();
  const [time, setTime] = useState(getTimeLeft());

  function getTimeLeft() {
    const diff = target - Date.now();

    return {
      days: Math.max(0, Math.floor(diff / 86400000)),
      hours: Math.max(0, Math.floor(diff / 3600000) % 24),
      minutes: Math.max(0, Math.floor(diff / 60000) % 60),
      seconds: Math.max(0, Math.floor(diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="countdown">
      <h2>The Moment</h2>
      <p style={{ letterSpacing: '3px' }}>3:23 AM IST</p>

      <div className="countdown-box">
        {Object.entries(time).map(([key, value]) => (
          <div key={key}>
            {value}
            <span>{key}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
