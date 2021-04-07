import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";
import React from "react";
import Time from "../time/Time";

export default function Navbar({
  logOut,
  setShowDailySchedule,
  setShowWeeklySchedule,
}) {
  return (
    <Box
      w="100%"
      bgColor="rebeccapurple"
      p="5"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box>
        <Time />
      </Box>
      <Box>
        <Heading color="teal.400">Tempo</Heading>
      </Box>
      <Box>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            <HamburgerIcon />
          </MenuButton>
          <MenuList>
            <MenuItem
              onClick={() => {
                setShowDailySchedule(true);
                setShowWeeklySchedule(false);
              }}
            >
              Daily Schedule
            </MenuItem>
            <MenuItem
              onClick={() => {
                setShowDailySchedule(false);
                setShowWeeklySchedule(true);
              }}
            >
              WeeklySchedule
            </MenuItem>
            <MenuItem onClick={logOut}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
}
