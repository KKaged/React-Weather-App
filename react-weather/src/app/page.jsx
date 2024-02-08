"use client";
import SearchInput from "./components/SearchInput";
import Logo from "./components/Logo";
import { useState } from "react";
import WeatherCard from "./components/Card";

export default function Home() {
  const [searchLocation, setSearchLocation] = useState("");

  const [loading, setLoading] = useState(false);

  const [isRendered, setIsRendered] = useState(false);

  const [weatherData, setWeatherData] = useState({
    location: "",
    temp_f: "",
    temp_c: "",
    icon: "",
    condition: "",
  });
  const days = 7;

  function handleLocationChange(event) {
    setSearchLocation(event.target.value);
  }

  const handleSearch = async (searchLocation) => {
    setLoading(true);
    try {
      const req = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=4bd547ca14034bd9a2a81752240802&q=${searchLocation}&days=${days}&aqi=no&alerts=no
        `
      );
      const data = await req.json();

      setWeatherData({
        location: data.location.name,
        temp_f: data.current.temp_f,
        condition: data.current.condition.text,
        temp_c: data.current.temp_c,
        icon: data.current.condition.icon,
      });
      setIsRendered(true);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);

    setSearchLocation("");
  };

  return (
    <>
      <Logo />
      <SearchInput
        onClick={() => handleSearch(searchLocation)}
        inputValue={searchLocation}
        onChange={handleLocationChange}
      />
      {isRendered && (
        <WeatherCard
          location={weatherData.location}
          temp_f={weatherData.temp_f}
          condition={weatherData.condition}
          temp_c={weatherData.temp_c}
          loading={loading}
          icon={weatherData.icon}
        />
      )}
    </>
  );
}
