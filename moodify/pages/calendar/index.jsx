import React, { useState, useEffect } from "react";
import dayStyles, { beforeToday } from "./styles.js";
import buildCalendar from "./build.js";
import Header from "./header.jsx";

export default function Calendar({ value, onChange }) {
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  return (
    <div className="calendar">
      <Header value={value} onChange={onChange} />

      <div className="body">
        <div className="day-names">
          {["s", "m", "t", "w", "t", "f", "s"].map((d) => (
            <div className="week">{d}</div>
          ))}
        </div>
        {calendar.map((week) => (
          <div>
            {week.map((day) => (
              <div
                className="day"
                onClick={() => !beforeToday(day) && onChange(day)}
              >
                <div className={dayStyles(day, value)}>
                  {day.format("D").toString()}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
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