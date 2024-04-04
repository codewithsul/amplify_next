"use client";
import React, { useState } from "react";
import Recognition from "./components/Recognition/Recognition";
import Inventory from "./components/Inventory/Inventory";

//Types
type Authenticate = boolean;
type LogInWithUsername = boolean;

const page = () => {
  const [Authenticated, setAuthenticated] = useState<Authenticate>(false);
  const [LogInWithUsername, setLoginWithUsername] =
    useState<LogInWithUsername>(false);

  const handleClick = () => {
    setLoginWithUsername(true);
  };

  return (
    <>
      {Authenticated ? (
        <Inventory />
      ) : (
        <>
          <Recognition onClick={handleClick} />
          {LogInWithUsername && <Inventory />}
        </>
      )}
    </>
  );
};

export default page;
