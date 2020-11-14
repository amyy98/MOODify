import React, { useState, useEffect } from "react";

import moment from 'moment'

export default function Calendar() {
  
  return (
    moment.weekdaysShort().map(day => {
    return (
      <div key={day} className="weekday">
        {day}
      </div>
    );
})
  )
  
}