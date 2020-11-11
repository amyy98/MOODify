import React, { useState, useEffect } from 'react';
import moment from 'moment';

export default function Calendar() {
    const [calendar, setCalendar] = useState([]);
    const [value, setValue] = useState(moment());
    // Clone of value so original value is not modified
    const startDay = value.clone().startOf("month").startOf("week");
    const endDay = value.clone().endOf("month").endOf("week");
  
    useEffect(() => {
      const day = startDay.clone().subtract(1, "day");
      const a = [];
      while (day.isBefore(endDay, "day")) {
        a.push(
          Array(7)
            .fill(0)
            .map(() => day.add(1, "day").clone())
        );
      }
      setCalendar(a);
    }, [value]);
  
    return (
      <div className="calendar">
        {calendar.map((week) => (
          <div>
            {week.map((day) => (
              <div className="day" onClick={() => setValue(day)}>
                <div
                  className={value.isSame(day, "day") ? "selected" : ""}
                >
                  {day.format("D").toString()}
                </div>
              </div>
            ))}
          </div>
        ))}
        <style jsx>
          {`
          .calendar {
            box-sizing: border-box;
            font-size: 1rem;
            max-width: 400px;
          }
          
          .calendar .header {
            background-color: var(--light-blue);
            text-align: center;
            min-height: 2rem;
            line-height: 2rem;
            color: var(--black);
            font-family: var(--font-book);
            font-weight: 700;
            display: flex;
          }
          
          .calendar .day-names {
            display: flex;
            flex-wrap: wrap;
            max-width: 1000px;
            margin: 0 auto;
            align-items: center;
          }
          
          .calendar .body {
            border: 1px solid var(--light-blue);
          }
          
          .calendar .header .previous {
            flex: 1;
            text-align: left;
            margin-left: 1rem;
          }
          
          .calendar .header .next {
            flex: 1;
            text-align: right;
            margin-right: 1rem;
          }
          
          .calendar .week {
            background-color: white;
            width: calc(100% / 7);
            height: 44px;
            line-height: 44px;
            text-align: center;
            text-transform: uppercase;
            color: var(--black);
            font-weight: 400;
          }
          .calendar .week div {
            width: 100%;
          }
          
          .calendar .day {
            position: relative;
            width: calc(100% / 7);
            height: 44px;
            display: inline-block;
            background-color: white;
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            z-index: 1;
            text-align: center;
          }
          
          .calendar .day div {
            width: 54px;
            height: 44px;
            position: relative;
            color: var(--black);
            z-index: 100;
            line-height: 44px;
          }
          
          .calendar .day div.before {
            color: var(--grey);
          }
          
          .calendar .day div.selected {
            background-color: var(--red);
            color: var(--white);
            font-weight: bold;
          }
          
          .calendar .day div.today {
            background-color: var(--grey);
          }
          `}
      </style>
      </div>
      
    );
  }