import React, { useState, createContext } from "react";
import DateTimeCity from "./components/DateTimeCity/DateTimeCity";
import Image from "./components/ImageComponent/Image";
import WeatherInfo from "./components/weatherInfo/WeatherInfo";
import "./rootContainer.css";

export const Context = createContext<{
  cityName: string | undefined;
  setCityName: React.Dispatch<React.SetStateAction<string | undefined>>;
  apiData: never[];
  setApiData: React.Dispatch<React.SetStateAction<never[]>>;
}>({
  cityName: undefined,
  setCityName: () => {},
  apiData: [],
  setApiData: () => {},
});

const RootContainer = () => {
  const [cityName, setCityName] = useState<undefined | string>("City name ");
  const [apiData, setApiData] = useState([]);
  return (
    <Context.Provider value={{ cityName, setCityName, apiData, setApiData }}>
      <div className="rootContainer">
        <DateTimeCity />
        <Image />
        <WeatherInfo />
      </div>
    </Context.Provider>
  );
};

export default RootContainer;
