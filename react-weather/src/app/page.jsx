"use client";
import SearchInput from "./components/SearchInput";
import Logo from "./components/Logo";
import { useState } from "react";

export default function Home() {
  const [location, setLocation] = useState("");
  function handleLocationChange(event) {
    setLocation(event.target.value);
  }
  function handleSearch() {
    console.log(location);
    setLocation("");
  }
  return (
    <>
      <Logo />
      <SearchInput
        onClick={handleSearch}
        inputValue={location}
        onChange={handleLocationChange}
      />
    </>
  );
}
