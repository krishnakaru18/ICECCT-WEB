import React, { useState, useEffect } from 'react';

const Footer = () => {
  // State for timer
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Calculate time left
  function calculateTimeLeft() {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 64); // Add 64 days
    targetDate.setHours(12); // Set hours to 12
    targetDate.setMinutes(34); // Set minutes to 34
    targetDate.setSeconds(0); // Set seconds to 0

    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  }

  // Update time every second
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <footer id='footer' className="bg-black text-white py-8 sm:text-center dark:border-t-2 border-t-slate-500 dark:bg-gradient-to-r from-black to-orange-950">
      <div className="container mx-auto px-4 mb-9">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          <div className='text-center'>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-slate-300"> Annually, the Electronics and Communication Department orchestrates a national level open-source talent program aimed at fostering innovative ideas and advancing technology.</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Days to Go</h3>
            <div className="timer flex flex-col">
              <span className="time bg-gradient-to-r from-orange-400 to-orange-800 text-transparent bg-clip-text">{timeLeft.days}</span>
              <span className="label ">Days</span>
              <span className="time bg-gradient-to-r from-orange-400 to-orange-800 text-transparent bg-clip-text">{timeLeft.hours}</span>
              <span className="label ">Hours</span>
              <span className="time bg-gradient-to-r from-orange-400 to-orange-800 text-transparent bg-clip-text">{timeLeft.minutes}</span>
              <span className="label ">Minutes</span>
              <span className="time bg-gradient-to-r from-orange-400 to-orange-800 text-transparent bg-clip-text">{timeLeft.seconds}</span>
              <span className="label">Seconds</span>
            </div>
          </div>
          <div className='text-center'>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm">The Conference Chair<br />
              ICECCT 2024<br />
              CSVTU<br />
              Newai, Durg<br />
              Chhattisgarh, INDIA<br />
              Mobile: +91 97894 89103<br />
              E-mail: <a href="mailto:icecct2024@gmail.com" className="underline">icecct2024@gmail.com</a></p>
          </div>
          <div className='text-center'>
            <h3 className="text-lg font-semibold mb-4">Countries</h3>
            <ul className="text-sm">
              <li>United States</li>
              <li>India</li>
              <li>United Kingdom</li>
              <li>Germany</li>
              <li>Canada</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-black py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-slate-100"> &copy;  ICECCT 2K24 . All Rights reseved . Powered By Krishna...!!!!</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
