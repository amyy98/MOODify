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

function changeColors(currColor) {
  // Fantastic -> great -> OK -> not so good
  if (currColor === "white") {
    return "#fffc9c";
  } else if (currColor === "#fffc9c") {
    return "#ffd187";
  } else if (currColor === "#ffd187") {
    return "#ff6017";
  } else if (currColor === "#ff6017") {
    return "white";
  }
}

function Days() {
  const [sunColor, setSunColor] = useState("white");
  const [monColor, setMonColor] = useState("white");
  const [tuesColor, setTuesColor] = useState("white");
  const [wedsColor, setWedsColor] = useState("white");
  const [thursColor, setThursColor] = useState("white");
  const [friColor, setFriColor] = useState("white");
  const [satColor, setSatColor] = useState("white");

  return (
    <div>
      <button
        style={{ backgroundColor: sunColor }}
        onClick={() => setSunColor(changeColors(sunColor))}
      >
        Sunday
      </button>

      <button
        style={{ backgroundColor: monColor }}
        onClick={() => setMonColor(changeColors)}
      >
        Monday
      </button>

      <button
        style={{ backgroundColor: tuesColor }}
        onClick={() => setTuesColor(changeColors)}
      >
        Tuesday
      </button>

      <button
        style={{ backgroundColor: wedsColor }}
        onClick={() => setWedsColor(changeColors)}
      >
        Wednesday
      </button>

      <button
        style={{ backgroundColor: thursColor }}
        onClick={() => setThursColor(changeColors)}
      >
        Thursday
      </button>

      <button
        style={{ backgroundColor: friColor }}
        onClick={() => setFriColor(changeColors)}
      >
        Friday
      </button>

      <button
        style={{ backgroundColor: satColor }}
        onClick={() => setSatColor(changeColors)}
      >
        Saturday
      </button>
      <style jsx>
        {`
        button {

        }
        `}
      </style>
    </div>
  );
}
