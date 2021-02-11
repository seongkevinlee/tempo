import { Box, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

import moment from "moment";

export default function Time() {
  const [time, setTime] = useState(moment().format("LT"));

  const getCurrentTime = () => {
    setInterval(() => {
      setTime(moment().format("LT"));
      console.log("Time:", time);
    }, 60000);
  };

  useEffect(() => {
    getCurrentTime(moment().format("LT"));
    return () => {
      clearInterval(getCurrentTime);
    };
  }, []);

  return (
    <Text color="teal.400" fontWeight="700" fontSize="20px">
      {time}
    </Text>
  );
}
