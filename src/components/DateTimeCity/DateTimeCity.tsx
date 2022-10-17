import React, { useState, useContext, createContext } from "react";
import "./DateTimeCity.css";
import SearchIcon from "@mui/icons-material/Search";
import { Context } from "../../RootContainer";

const DateTimeCity: React.FC = () => {
  const { cityName, setCityName, apiData, setApiData } = useContext(Context);
  const cityRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputCityName = cityRef?.current?.value;
    setCityName(inputCityName);
    console.log("This is the submit button");
  };

  return (
    <div className="container">
      <h2 className="container__day">
        {new Date().toLocaleDateString("default", {
          weekday: "long",
          month: "long",
          day: "numeric",
        })}{" "}
        2022
      </h2>
      <form action="#" className="container__form" onSubmit={handleSubmit}>
        <SearchIcon className="container__icon" />
        <input
          ref={cityRef}
          name="city"
          type="search"
          className="container__input"
          placeholder="Search weather for..."
        />
      </form>

      <h1 className="container__cityName">{cityName}</h1>
    </div>
  );
};

export default DateTimeCity;
