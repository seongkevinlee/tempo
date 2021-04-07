import React, { useState, useEffect } from "react";
import firebase from "./firebase";

import Home from "./app/pages/Home";
import Login from "./app/components/login/Login";
import { Box, Heading } from "@chakra-ui/react";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
  }, []);

  const createNewUserDocument = (user) => {
    collectionsUser
      .doc(user.uid)
      .set({
        uid: user.uid,
        email: user.email,
        name,
      })
      .catch((err) => console.error(err));
  };

  const collectionsUser = firebase.firestore().collection("users");

  const register = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        const user = firebase.auth().currentUser;
        createNewUserDocument(user);
      })
      .then(() => {
        resetInput();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        resetInput();
      })
      .catch((err) => console.error(err));
  };

  const logOut = () => {
    firebase.auth().signOut();
  };

  const resetInput = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  if (loading) {
    return (
      <Box
        display="flex"
        w="100vw"
        h="100vh"
        alignItems="center"
        justifyContent="center"
        position="fixed"
        top="0"
        left="0"
      >
        <Heading>Loading User...</Heading>
      </Box>
    );
  }

  return (
    <div className="App">
      {!currentUser ? (
        <Login
          register={register}
          login={login}
          resetInput={resetInput}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          name={name}
          setName={setName}
        />
      ) : (
        <Home logOut={logOut} currentUser={currentUser} />
      )}
    </div>
  );
}

export default App;
