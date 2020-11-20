import React, { useState, useEffect } from "react";

export default function Calendar() {
  let week = [];
  for (let i = 0; i < 4; i++) {
    week.push(<Days />);
  }
  return (
    <div>
      {week}
    </div>
  );
}

function Days() {
  const [sunColor, setSunColor] = useState("red");
  const [monColor, setMonColor] = useState("red");
  const [tuesColor, setTuesColor] = useState("red");
  const [wedsColor, setWedsColor] = useState("red");
  const [thursColor, setThursColor] = useState("red");
  const [friColor, setFriColor] = useState("red");
  const [satColor, setSatColor] = useState("red");

  return (
    <div>
      <button
        style={{ backgroundColor: sunColor }}
        onClick={() => setSunColor("blue")}
      >
        Sunday
      </button>

      <button
        style={{ backgroundColor: monColor }}
        onClick={() => setMonColor("blue")}
      >
        Monday
      </button>

      <button
        style={{ backgroundColor: tuesColor }}
        onClick={() => setTuesColor("blue")}
      >
        Tuesday
      </button>

      <button
        style={{ backgroundColor: wedsColor }}
        onClick={() => setWedsColor("blue")}
      >
        Wednesday
      </button>

      <button
        style={{ backgroundColor: thursColor }}
        onClick={() => setThursColor("blue")}
      >
        Thursday
      </button>

      <button
        style={{ backgroundColor: friColor }}
        onClick={() => setFriColor("blue")}
      >
        Friday
      </button>

      <button
        style={{ backgroundColor: satColor }}
        onClick={() => setSatColor("blue")}
      >
        Saturday
      </button>

    </div>
  );
}
