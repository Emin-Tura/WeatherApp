import React from "react";
import { useWeather } from "../../Context/WeatherContex";
import "./SelectCity.css";

function SelectCity() {
  const { city, setCity, citiesJSON } = useWeather();

  const changeCity = (e) => {
    citiesJSON.filter((item) => {
      if (item.name === e.target.value) {
        setCity(item);
      }
      return null;
    });
  };
  return (
    <div className="container">
      <p className="text">Lütfen Şehir Seçiniz :</p>
      <select
        className="selectCity"
        name="cities"
        id="cities"
        value={city.name}
        onChange={changeCity}
      >
        {citiesJSON.map((item, i) => {
          return (
            <option value={item.name} key={i}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default SelectCity;
