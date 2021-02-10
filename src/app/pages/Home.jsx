import { Box } from "@material-ui/core";
import React from "react";
import Navbar from "../components/navbar/Navbar";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <h2>This is the Home Page</h2>
    </Box>
  );
}
