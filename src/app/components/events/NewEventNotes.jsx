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
import { v4 as uuid } from "uuid";

export default function NewEventNotes({
  currentUser,
  isOpen,
  onClose,
  selectedDay,
}) {
  const [eventTitle, setEventTitle] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const clearFields = () => {
    setEventTitle(null);
    setStartTime(null);
    setEndTime(null);
    setSAMPM(moment().format("A"));
    setEAMPM(moment().format("A"));
    setNotes("");
  };

  const [sAMPM, setSAMPM] = useState(moment().format("A"));
  const [eAMPM, setEAMPM] = useState(moment().format("A"));

  const [notes, setNotes] = useState("");

  // const [eventInfo, setEventInfo] = useState({
  //   startTime: parseInt(moment().format("hmm")),
  //   endTime: parseInt(moment().add(1, "hour").format("hmm")),
  //   startAMPM: moment().format("A"),
  //   endAMPM: moment().format("A"),
  // });

  const parse = (val) => val.replace(/^(0?[1-9]|1[0-2]):[0-5][0-9]$/, "");

  const createEvent = () => {
    firebase
      .firestore()
      .collection("events")
      .doc(uuid())
      .set({
        uid: currentUser.uid,
        eventTitle,
        date: `${selectedDay?.month}-${selectedDay?.day}-${selectedDay?.year}`,
        startTime: String(moment(`${startTime}${sAMPM}`, "hmmA").format("LT")),
        endTime: String(moment(`${endTime}${eAMPM}`, "hmmA").format("LT")),
        notes,
      })
      .then(() => {
        clearFields();
        onClose();
      });
    console.log("startTime:", startTime);
    console.log("endTime:", endTime);
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
              <Textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                size="sm"
              />
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={createEvent}>
              Create
            </Button>
            <Button
              variant="ghost"
              onClick={onClose}
              // onClick={() => console.log("sAMPM:", sAMPM)}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
