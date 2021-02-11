import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar as Cal } from "react-modern-calendar-datepicker";
import { Box } from "@chakra-ui/react";

export default function Calendar() {
  const [selectedDay, setSelectedDay] = useState(null);
  return (
    <Box w="100%" display="flex" justifyContent="center">
      <Cal
        value={selectedDay}
        onChange={setSelectedDay}
        shouldHighlightWeekends
      />
    </Box>
  );
}
