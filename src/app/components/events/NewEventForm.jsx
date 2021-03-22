import React from "react";
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
} from "@chakra-ui/react";

export default function NewEventForm({
  isOpen,
  onClose,
  setEventTitle,
  selectedDay,
  setStartTime,
  setEndTime,
  startTime,
  endTime,
}) {
  const parse = (val) => val.replace(/^\$/, "");
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
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
                    defaultValue={11}
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
                    defaultValue={11}
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
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
