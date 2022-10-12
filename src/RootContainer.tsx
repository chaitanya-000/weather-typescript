import React, { useState } from "react";
import { createContext } from "vm";
import DateTimeCity from "./components/DateTimeCity/DateTimeCity";
import "./rootContainer.css";

const RootContainer = () => {
  return (
    <div className="rootContainer">
      <DateTimeCity />
    </div>
  );
};

export default RootContainer;
