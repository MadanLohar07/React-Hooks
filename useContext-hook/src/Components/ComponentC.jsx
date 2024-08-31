import React from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";

function ComponentC() {
  const userFirstName = useContext(UserContext);
  return <div>Username is : {userFirstName}</div>;
}

export default ComponentC;
