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
import firebase from "../../../firebase";

export default function NewEventForm({
  currentUser,
  isOpen,
  onClose,
  selectedDay,

  //   startTime,
  //   endTime,
}) {
  const [eventTitle, setEventTitle] = useState(null);
  const [startTime, setStartTime] = useState(moment().format("hmm"));
  const [endTime, setEndTime] = useState(moment().add(1, "hour").format("hmm"));

  const [sAMPM, setSAMPM] = useState(moment().format("A"));
  const [eAMPM, setEAMPM] = useState(moment().format("A"));

  let [value, setValue] = useState("");

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  // const [eventInfo, setEventInfo] = useState({
  //   startTime: parseInt(moment().format("hmm")),
  //   endTime: parseInt(moment().add(1, "hour").format("hmm")),
  //   startAMPM: moment().format("A"),
  //   endAMPM: moment().format("A"),
  // });

  const parse = (val) => val.replace(/^(0?[1-9]|1[0-2]):[0-5][0-9]$/, "");

  const createEvent = () => {
    firebase.firestore().collection("events").doc(currentUser.uid).set({
      eventTitle,
      date: selectedDay,
      startTime,
      endTime,
    });
  };

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
              readOnly
              value={`${selectedDay?.month}-${selectedDay?.day}-${selectedDay?.year}`}
            />
            <Box mt="4" display="flex" justifyContent="space-between">
              <Box w="45%">
                <Text>Start time:</Text>
                <Box display="flex" alignItems="center">
                  <NumberInput
                    onChange={(e) => setStartTime(parse(e))}
                    defaultValue={startTime}
                    max={1259}
                    min={1}
                  >
                    <NumberInputField />
                  </NumberInput>
                  <Select
                    value={sAMPM}
                    onChange={(e) => setSAMPM(e.target.value)}
                  >
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
                    defaultValue={endTime}
                    max={1259}
                    min={1}
                  >
                    <NumberInputField />
                  </NumberInput>
                  <Select
                    value={eAMPM}
                    onChange={(e) => setEAMPM(e.target.value)}
                  >
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
            <Button colorScheme="blue" mr={3} onClick={createEvent}>
              Create
            </Button>
            <Button
              variant="ghost"
              // onClick={onClose}
              onClick={() => console.log("sAMPM:", sAMPM)}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
