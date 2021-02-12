import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  VStack,
} from "@chakra-ui/react";

export default function Login({
  register,
  login,
  resetInput,
  email,
  setEmail,
  password,
  setPassword,
  name,
  setName,
}) {
  const [showRegister, setShowRegister] = useState(false);

  const toggleRegister = () => {
    setShowRegister((prev) => !prev);
  };

  return (
    <Box
      backgroundColor="white"
      className="login-container"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      w="100vw"
      h="100vh"
      top="0"
      left="0"
      zIndex="1000"
      position="fixed"
    >
      <Heading my="4rem" color="teal.500" fontSize="4.5rem">
        TEMPO
      </Heading>
      <Box w="60%">
        <form>
          <FormControl>
            {showRegister && (
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="What should we call you?"
                mb="1rem"
              />
            )}

            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              mb="1rem"
            />
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              mb="1rem"
            />
            <VStack justifyContent="center">
              {!showRegister ? (
                <Button onClick={login}>Login</Button>
              ) : (
                <Button onClick={register}>Sign Up</Button>
              )}
              {!showRegister ? (
                <Link onClick={toggleRegister}>Sign Up</Link>
              ) : (
                <Link onClick={toggleRegister}>Login</Link>
              )}
            </VStack>
          </FormControl>
        </form>
      </Box>
    </Box>
  );
}
