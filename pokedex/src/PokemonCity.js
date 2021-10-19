import React, { useState } from "react";

const PokemonCity = () => {
  const [city, setCity] = useState("");

  const updateCity = (event) => setCity(event.target.value);

  return (
    <div>
      <input value={city} onChange={updateCity} type="text" />
      <p>Welcome to the city of {city}</p>
    </div>
  );
};

export default PokemonCity;
