import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  IconButton,
  ListItem,
  Text,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

import firebase from "../../../firebase";
import moment from "moment";

import Calendar from "../calendar/Calendar";
import EditEvent from "../events/EditEvent";

const eventsCollection = firebase.firestore().collection("events");

export default function Schedule({ currentUser }) {
  const [currentDateEvents, setCurrentDateEvents] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const today = {
    year: parseInt(moment().format("YYYY")),
    month: parseInt(moment().format("M")),
    day: parseInt(moment().format("D")),
  };

  const [selectedDay, setSelectedDay] = useState(today);
  const [notes, setNotes] = useState("");

  const [existingNotes, setExistingNotes] = useState(null);

  const showEvents = () => {
    setCurrentDateEvents();
    let events = [];
    eventsCollection
      .where("uid", "==", currentUser.uid)
      .where(
        "date",
        "==",
        `${selectedDay?.month}-${selectedDay?.day}-${selectedDay?.year}`
      )
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          events.push(doc.data());
        });
      })
      .then(() => {
        if (events.length > 0) {
          setCurrentDateEvents(events);
          setExistingNotes(events[0].notes);
        }
      })
      .catch((err) => console.log(err));
  };

  const deleteItem = (note, id) => {
    console.log("note:", note);
    eventsCollection
      .doc(id)
      .update({
        notes: firebase.firestore.FieldValue.arrayRemove(note),
      })
      .then(() => {
        showEvents();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    showEvents();
  }, [selectedDay, notes]);

  return (
    <Box display="flex" flexDirection="column">
      <Box
        mt="5"
        mx="5"
        p="5%"
        w="100%"
        h="300px"
        bgColor="gray.200"
        display="flex"
        justifyContent="flex-start"
        flexDirection="column"
        alignItems="center"
        alignSelf="center"
        borderRadius="7px"
        overflow="scroll"
        overflowX="hidden"
      >
        <Heading
          size="lg"
          onClick={() =>
            console.log("currentDateEvents:", currentDateEvents[0])
          }
          bgColor="whiteAlpha.200"
        >{`${selectedDay?.month}-${selectedDay?.day}-${selectedDay?.year}`}</Heading>
        <Box
          display="flex"
          alignItems="flex-start"
          justifyContent="flex-start"
          flexDirection="column"
          w="100%"
          h="100%"
          px="5"
          pt="3"
          // backgroundColor="red.200"
        >
          {/* <UnorderedList> */}
          {currentDateEvents &&
            currentDateEvents[0]?.notes?.map((item, index) => (
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                w="100%"
                // backgroundColor="white"
                key={index}
              >
                <Text w="100%" mr="5">
                  - {item}
                </Text>
                <IconButton
                  backgroundColor="gray.200"
                  size="xs"
                  icon={<EditIcon />}
                  px="1"
                  onClick={onOpen}
                />
                <IconButton
                  backgroundColor="gray.200"
                  size="xs"
                  icon={<DeleteIcon />}
                  px="1"
                  onClick={() =>
                    deleteItem(
                      item,
                      currentDateEvents[0].eventId,
                      currentDateEvents[0].notes.indexOf(item)
                    )
                  }
                />
                <EditEvent
                  isOpen={isOpen}
                  onClose={onClose}
                  notes={item}
                  selectedDay={currentDateEvents[0].date}
                  currentUser={currentUser}
                  showEvents={showEvents}
                  eventId={currentDateEvents[0].eventId}
                />
              </Box>
            ))}
          {/* </UnorderedList> */}
        </Box>
      </Box>
      <Box width="100%" display="flex" justifyContent="center">
        <Calendar
          currentUser={currentUser}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          notes={notes}
          setNotes={setNotes}
        />
      </Box>
    </Box>
  );
}
