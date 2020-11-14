import React, { useState, useEffect } from "react";

export default function Weeks() {
  let week = [];
  for (let i = 0; i < 7; i++) {
    week.push(<Days color="blue" />);
  }
  return <div>{week}</div>;
}

function Days() {
  const [color, setColor] = useState("red");

  return (
    <div>
      <button
        style={{ backgroundColor: color }}
        onClick={() => setColor("blue")}
      >
        Button1
      </button>
    </div>
  );
}
