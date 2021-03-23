import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

import moment from "moment";

export default function Schedule() {
  return (
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
      <Heading bgColor="whiteAlpha.200">Schedule</Heading>
      <Box>
        <Text textAlign="center">Date: {moment().format("L")}</Text>
        <Text textAlign="center">Time: {moment().format("LT")}</Text>
      </Box>
    </Box>
  );
}
