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
        <div className ="text">Track Mood</div>
      </button>

      <button
        style={{ backgroundColor: monColor }}
        onClick={() => setMonColor(changeColors)}
      >
        <div className ="text">Track Mood</div>
      </button>

      <button
        style={{ backgroundColor: tuesColor }}
        onClick={() => setTuesColor(changeColors)}
      >
        <div className ="text">Track Mood</div>
      </button>

      <button
        style={{ backgroundColor: wedsColor }}
        onClick={() => setWedsColor(changeColors)}
      >
        <div className ="text">Track Mood</div>
      </button>

      <button
        style={{ backgroundColor: thursColor }}
        onClick={() => setThursColor(changeColors)}
      >
        <div className ="text">Track Mood</div>
      </button>

      <button
        style={{ backgroundColor: friColor }}
        onClick={() => setFriColor(changeColors)}
      >
        <div className ="text">Track Mood</div>
      </button>

      <button
        style={{ backgroundColor: satColor }}
        onClick={() => setSatColor(changeColors)}
      >
        <div className ="text">Track Mood</div>
      </button>
      <style jsx>
        {`
        button {
          border-radius: 50px;
          border-width: 0;
          border-color: white;
          cursor: pointer; 
          outline: none;
          height: 90px;
          width: 90px;
          padding-top: 20px;
          margin: 5px;
          opacity: 0.9;
        }
        button:focus {
          opacity: 1;
        }
        button:hover {
          opacity: 1;
        }
        `}
      </style>
    </div>
  );
}
