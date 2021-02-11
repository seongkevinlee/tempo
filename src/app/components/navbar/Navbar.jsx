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
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React from "react";

export default function Navbar() {
  return (
    <Box w="100%" bgColor="rebeccapurple" p="5" zIndex="100">
      <Box>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Actions
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
}
