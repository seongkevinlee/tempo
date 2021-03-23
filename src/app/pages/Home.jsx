import { Box } from "@chakra-ui/react";
import React from "react";
import Calendar from "../components/calendar/Calendar";
import Navbar from "../components/navbar/Navbar";
import Schedule from "../components/schedule/Schedule";

export default function Home({ currentUser, logOut }) {
  return (
    <Box>
      <Navbar logOut={logOut} />
      <Box w="100%" display="flex" justifyContent="center">
        <Schedule currentUser={currentUser} />
      </Box>
    </Box>
  );
}
