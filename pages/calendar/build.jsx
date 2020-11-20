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

// globally scoped to persist variable
// Fantastic -> great -> OK -> not so good
let colors = ["#fffc9c", "#ffd187", "#ff9b21", "#ff6017"];
let counter = 0;

function changeColors() {
  if (counter === 4) {
    counter = 0;
  }
  return colors[counter++];
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
