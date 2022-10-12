import React, { useState, useContext } from "react";
import "./DateTimeCity.css";
import SearchIcon from "@mui/icons-material/Search";

const DateTimeCity: React.FC = () => {
  const cityRef = React.useRef<HTMLInputElement>(null);
  const [cityName, setCityName] = useState<undefined | string>("City name ");
  const [apiData, setApiData] = useState([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const inputCityName = cityRef?.current?.value;
    setCityName(inputCityName);

    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
    });
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
