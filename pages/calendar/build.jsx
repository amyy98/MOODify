import React, { useState, useEffect } from "react";

export default function Weeks() {
  let week = [];
  for (let i = 0; i < 7; i++) {
    week.push(<Days textContent = "Monday1" />);
  }
  return <div>{week}</div>;
}

function Days() {
  const daysOfWeek = ['Monday', 'Tuesday', 'Weds']
  const [color, setColor] = useState("red");

  return (
    <div>
      <button
        style={{ backgroundColor: color }}
        onClick={() => setColor("blue")}
      >
        Monday
      </button>
    
    </div>
  );
}
