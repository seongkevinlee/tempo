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
      h="100%"
      bgColor="gray.200"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      borderRadius="7px"
    >
      <Heading bgColor="whiteAlpha.200">Schedule</Heading>
      <Box>
        <Text>Date: {moment().format("L")}</Text>
        <Text>Time: {moment().format("LT")}</Text>
      </Box>
    </Box>
  );
}
