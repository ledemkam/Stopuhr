import React, { useEffect, useState } from 'react';
import './Stoppuhr.css';
const Stoppuhr = () => {
   const [hour, setHour] = useState(0);
   const [minutes, setMinutes] = useState(0);
   const [seconds, setSeconds] = useState(0);
   const [mSeconds, setMseconds] = useState(0);
   const [stop, setStop] = useState(true);

   const StartHandler = () => {
      setStop(false);
   };
   const StopHandler = () => {
      setStop(true);
   };
   const ResetHandler = () => {
      setHour(0);
      setMinutes(0);
      setSeconds(0);
      setMseconds(0);
   };
   useEffect(() => {
      let interval = null;
      if (!stop) {
         interval = setInterval(() => {
            if (minutes > 59) {
               setHour(hour + 1);
               setMinutes(0);
               clearInterval(interval);
            }
            if (seconds > 59) {
               setMinutes(minutes + 1);
               setSeconds(0);
               clearInterval(interval);
            }
            if (mSeconds > 59) {
               setSeconds(seconds + 1);
               setMseconds(0);
               clearInterval(interval);
            }
            if (mSeconds <= 59) {
               setMseconds(mSeconds + 1);
            }
         }, 10);
      } else {
         clearInterval(interval);
      }
      return () => {
         clearInterval(interval);
      };
   });
   return (
      <div>
         <h1>
            {hour} : {minutes} : {seconds} : {mSeconds}
         </h1>
         <button onClick={StartHandler} className="start">
            Start
         </button>
         <button onClick={StopHandler} className="stop">
            Stop
         </button>
         <button onClick={ResetHandler} className="reset">
            Reset
         </button>
      </div>
   );
};

export default Stoppuhr;
