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
  const clearFields = () => {
    setNotes("");
  };

  const [notes, setNotes] = useState("");

  const createEvent = () => {
    firebase
      .firestore()
      .collection("events")
      .doc(
        `${currentUser.uid}.${selectedDay?.month}-${selectedDay?.day}-${selectedDay?.year}`
      )
      .set(
        {
          uid: currentUser.uid,
          date: `${selectedDay?.month}-${selectedDay?.day}-${selectedDay?.year}`,
          notes: firebase.firestore.FieldValue.arrayUnion(notes),
        },
        { merge: true }
      )
      .then(() => {
        clearFields();
        onClose();
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
            <Text mt="4">Date:</Text>
            <Input
              readOnly
              value={`${selectedDay?.month}-${selectedDay?.day}-${selectedDay?.year}`}
            />

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
              onClick={() => {
                clearFields();
                onClose();
              }}
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
