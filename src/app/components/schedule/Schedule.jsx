import React, { useEffect, useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

import firebase from "../../../firebase";
import moment from "moment";

import Calendar from "../calendar/Calendar";

const eventsCollection = firebase.firestore().collection("events");

export default function Schedule({ currentUser }) {
  const [currentDateEvents, setCurrentDateEvents] = useState([]);

  const today = {
    year: parseInt(moment().format("YYYY")),
    month: parseInt(moment().format("M")),
    day: parseInt(moment().format("D")),
  };

  const [selectedDay, setSelectedDay] = useState(today);

  const showEvents = () => {
    let events = [];
    eventsCollection
      .where("uid", "==", currentUser.uid)
      .where(
        "date",
        "==",
        `${selectedDay?.month}-${selectedDay?.day}-${selectedDay?.year}`
      )
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          events.push(doc.data());
        });
      })
      .then(() => {
        setCurrentDateEvents(events);
        console.log(events);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    showEvents();
  }, [selectedDay]);

  return (
    <Box display="flex" flexDirection="column">
      <Box
        mt="5"
        mx="5"
        p="5%"
        w="90%"
        h="300px"
        bgColor="gray.200"
        display="flex"
        justifyContent="flex-start"
        flexDirection="column"
        alignItems="center"
        borderRadius="7px"
      >
        <Heading bgColor="whiteAlpha.200">{`${selectedDay?.month}-${selectedDay?.day}-${selectedDay?.year}`}</Heading>
      </Box>
      <Box width="100%" display="flex" justifyContent="center" marginTop="20px">
        <Calendar
          currentUser={currentUser}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
        />
      </Box>
    </Box>
  );
}
