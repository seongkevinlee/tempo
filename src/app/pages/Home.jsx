import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Calendar from "../components/calendar/Calendar";
import Navbar from "../components/navbar/Navbar";
import Schedule from "../components/schedule/Schedule";

export default function Home({ currentUser, logOut }) {
  const [showDailySchedule, setShowDailySchedule] = useState(true);
  const [showWeeklySchedule, setShowWeeklySchedule] = useState(false);

  return (
    <Box>
      <Navbar
        logOut={logOut}
        setShowDailySchedule={setShowDailySchedule}
        setShowWeeklySchedule={setShowWeeklySchedule}
      />
      <Box w="100%" display="flex" justifyContent="center">
        {showDailySchedule && <Schedule currentUser={currentUser} />}
        {showWeeklySchedule && <Text>Weekly Schedule</Text>}
      </Box>
    </Box>
  );
}
