import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar as Cal } from "react-modern-calendar-datepicker";
import { Box, Button, Text, useDisclosure } from "@chakra-ui/react";

import moment from "moment";

import "./calendar.css";
import NewEventForm from "../events/NewEventForm";

export default function Calendar() {
  const today = {
    year: parseInt(moment().format("YYYY")),
    month: parseInt(moment().format("M")),
    day: parseInt(moment().format("D")),
  };

  const [selectedDay, setSelectedDay] = useState(today);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [eventTitle, setEventTitle] = useState(null);
  const [startTime, setStartTime] = useState(moment().format("h:mm"));
  const [endTime, setEndTime] = useState(
    moment().add(1, "hour").format("h:mm")
  );

  return (
    <Box
      w="100%"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
      <Cal
        value={selectedDay}
        onChange={setSelectedDay}
        shouldHighlightWeekends
        colorPrimary="#9c88ff" // added this
        calendarClassName="custom-calendar" // and this
        calendarTodayClassName="custom-today-day" // also this
      />
      <Button onClick={onOpen} mt="4">
        Add Event
      </Button>
      {/* <Button onClick={() => console.log(selectedDay)} mt="4">
        Add Event
      </Button> */}
      {/* <Text>{startTime}</Text> */}
      {/* <Text>{selectedDay}</Text> */}

      <NewEventForm
        isOpen={isOpen}
        onClose={onClose}
        selectedDay={selectedDay}
        eventTitle={eventTitle}
        setEventTitle={setEventTitle}
        startTime={startTime}
        endTime={endTime}
        setStartTime={setStartTime}
        setEndTime={setEndTime}
      />
    </Box>
  );
}
