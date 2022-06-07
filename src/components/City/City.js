import React from "react";
import "./City.css";
import "../../fonts/aruna/Aruna-Regular.ttf";
import { useWeather } from "../../Context/WeatherContex";

function City() {
  const { city } = useWeather();
  return <div className="city">{city.name.toUpperCase()}</div>;
}

export default City;
