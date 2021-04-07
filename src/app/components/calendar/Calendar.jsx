import React from "react";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar as Cal } from "@hassanmojab/react-modern-calendar-datepicker";
import { Box, Button, Text, useDisclosure } from "@chakra-ui/react";

import moment from "moment";

import "./calendar.css";
import NewEventForm from "../events/NewEventForm";
import NewEventNotes from "../events/NewEventNotes";

export default function Calendar({
  currentUser,
  selectedDay,
  setSelectedDay,
  notes,
  setNotes,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      w="100%"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
      <Button colorScheme="teal" onClick={onOpen} my="2">
        Add Entry
      </Button>
      <Cal
        value={selectedDay}
        onChange={setSelectedDay}
        shouldHighlightWeekends
        colorPrimary="#9c88ff" // added this
        calendarClassName="custom-calendar" // and this
        calendarTodayClassName="custom-today-day" // also this
      />
      <NewEventNotes
        isOpen={isOpen}
        onClose={onClose}
        selectedDay={selectedDay}
        currentUser={currentUser}
        notes={notes}
        setNotes={setNotes}
      />
    </Box>
  );
}
