import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Input,
  Box,
  Select,
  NumberInput,
  NumberInputField,
  Textarea,
} from "@chakra-ui/react";

import moment from "moment";

export default function NewEventForm({
  isOpen,
  onClose,
  setEventTitle,
  selectedDay,
  setStartTime,
  setEndTime,
  //   startTime,
  //   endTime,
}) {
  const [sAMPM, setSAMPM] = useState();

  let [value, setValue] = useState("");

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  const [eventInfo, setEventInfo] = useState({
    startTime: parseInt(moment().format("hmm")),
    endTime: parseInt(moment().add(1, "hour").format("hmm")),
    startAMPM: moment().format("A"),
    endAMPM: moment().format("A"),
  });

  const parse = (val) => val.replace(/^(0?[1-9]|1[0-2]):[0-5][0-9]$/, "");
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Event Name:</Text>
            <Input onChange={(e) => setEventTitle(e.target.value)} />
            <Text mt="4">Date:</Text>
            <Input
              value={`${selectedDay?.month}-${selectedDay?.day}-${selectedDay?.year}`}
            />
            <Box mt="4" display="flex" justifyContent="space-between">
              <Box w="45%">
                <Text>Start time:</Text>
                <Box display="flex" alignItems="center">
                  <NumberInput
                    onChange={(e) => setStartTime(parse(e))}
                    defaultValue={eventInfo.startTime}
                    max={1259}
                    min={1}
                  >
                    <NumberInputField />
                  </NumberInput>
                  <Select>
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </Select>
                </Box>
              </Box>
              <Box w="45%">
                <Text>End time:</Text>
                <Box display="flex" alignItems="center">
                  <NumberInput
                    onChange={(e) => setEndTime(parse(e))}
                    defaultValue={eventInfo.endTime}
                    max={1259}
                    min={1}
                  >
                    <NumberInputField />
                  </NumberInput>
                  <Select>
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </Select>
                </Box>
              </Box>
            </Box>
            <Box>
              <Text mt="4" mb="8px">
                Notes:
              </Text>
              <Textarea value={value} onChange={handleInputChange} size="sm" />
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Create
            </Button>
            <Button variant="ghost">Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
