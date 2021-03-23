import React, { useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

import moment from "moment";
import Calendar from "../calendar/Calendar";

export default function Schedule({ currentUser }) {
  const today = {
    year: parseInt(moment().format("YYYY")),
    month: parseInt(moment().format("M")),
    day: parseInt(moment().format("D")),
  };

  const [selectedDay, setSelectedDay] = useState(today);

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
