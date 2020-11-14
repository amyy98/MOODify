import React, { useState, useEffect } from "react";
import Weeks from "./build.jsx";

export default function Calendar() {
  let month = [];
  for (let i = 0; i < 4; i++) {
    month.push(<Weeks />)
  }
  return (
    <div>
      {month}
    </div>
  );
}