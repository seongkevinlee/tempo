import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar as Cal } from "react-modern-calendar-datepicker";

export default function Calendar() {
  const [selectedDay, setSelectedDay] = useState(null);
  return (
    <Cal
      value={selectedDay}
      onChange={setSelectedDay}
      shouldHighlightWeekends
    />
  );
}
