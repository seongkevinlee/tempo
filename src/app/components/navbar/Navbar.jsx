import { Box, Button, Container } from "@material-ui/core";
import React from "react";

export default function Navbar() {
  return (
    <Container width="100%">
      <Box
        display="flex"
        flexDirection="row"
        width="100%"
        height="200px"
        alignItems="center"
        justifyContent="space-between"
      >
        <h1>Tempo</h1>
        <Box>
          <Button variant="contained" color="primary" size="large">
            Home
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
