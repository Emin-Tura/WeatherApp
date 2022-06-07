import React, { useEffect } from "react";
import "./Card.css";
import "../../fonts/dejavu-serif/DejaVuSerif.ttf";
import axios from "axios";
import { useWeather } from "../../Context/WeatherContex";

function Card() {
  const { days, weather, setWeather, city } = useWeather();
  useEffect(() => {
    const api_key = "9ef8cec66f88ac7db857c8caf31e2e03";
    const getData = async () => {
      const res = axios(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${city.latitude}&lon=${city.longitude}&exclude={part}&appid=${api_key}`
      );
      setWeather((await res).data.daily);
    };
    getData();
  }, [city, setWeather]);

  return (
    <>
      {weather.map((item, i) => {
        return (
          <div className="cardContainer" key={i}>
            <h3 className="today">
              {days[new Date(item.dt * 1000).getDay()].toUpperCase()}
            </h3>
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt={`weather-icon "${i}"`}
              className="image"
            />
            <div className="status">
              {item.weather[0].description.toUpperCase()}
            </div>
            <div className="footer">
              <p> {Math.round(item.temp["max"] - 273.15)} &deg;C </p>
              <p> {Math.round(item.temp["min"] - 273.15)} &deg;C</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Card;
