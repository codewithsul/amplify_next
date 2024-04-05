import React, { useState } from "react";
import Recognition from "./components/Recognition/Recognition";
import Inventory from "./components/Inventory/Inventory";

// Types
type Authenticate = boolean;
type LogInWithUsername = boolean;

const Page = () => {
  const [Authenticated, setAuthenticated] = useState<Authenticate>(false);
  const [LogInWithUsername, setLoginWithUsername] = useState<LogInWithUsername>(false);

  const handleClick = () => {
    setLoginWithUsername(true);
  };

  return (
    <>
      {!LogInWithUsername ? (
        <Recognition onClick={handleClick} />
      ) : (
        <Inventory />
      )}
    </>
  );
};

export default Page;
