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
        onClick={() => setSunColor(changeColors)}
      >
        Track Mood
      </button>

      <button
        style={{ backgroundColor: monColor }}
        onClick={() => setMonColor(changeColors)}
      >
        Track Mood
      </button>

      <button
        style={{ backgroundColor: tuesColor }}
        onClick={() => setTuesColor(changeColors)}
      >
        Track Mood
      </button>

      <button
        style={{ backgroundColor: wedsColor }}
        onClick={() => setWedsColor(changeColors)}
      >
        Track Mood
      </button>

      <button
        style={{ backgroundColor: thursColor }}
        onClick={() => setThursColor(changeColors)}
      >
        Track Mood
      </button>

      <button
        style={{ backgroundColor: friColor }}
        onClick={() => setFriColor(changeColors)}
      >
        Track Mood
      </button>

      <button
        style={{ backgroundColor: satColor }}
        onClick={() => setSatColor(changeColors)}
      >
        Track Mood
      </button>
      <style jsx>
        {`
        button {
          border-radius: 50px;
          border-width: 1px;
          border-color: white;
          cursor: pointer; 
          outline: none;
          height: 90px;
          width: 90px;
          padding-top: 20px;
          margin: 5px;
        }
        button:hover {

        }
        `}
      </style>
    </div>
  );
}
