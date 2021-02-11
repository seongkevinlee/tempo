import { Box } from "@material-ui/core";
import React from "react";
import Calendar from "../components/calendar/Calendar";
import Navbar from "../components/navbar/Navbar";
import Schedule from "../components/schedule/Schedule";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Box width="100%" display="flex" justifyContent="center" marginTop="20px">
        <Calendar />
      </Box>
      <Schedule />
    </Box>
  );
}
