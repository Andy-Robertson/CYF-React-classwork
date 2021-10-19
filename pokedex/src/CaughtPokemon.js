import React, { useState } from "react";

const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);
  const catchPokemon = () => pokemonNameInput.length && setCaught((c1) => c1.concat(pokemonNameInput));
  const [pokemonNameInput, setPokemonNameInput] = useState("");
  const handleInputChange = (event) => setPokemonNameInput(event.target.value);

  return (
    <div>
      <input
        type="text"
        value={pokemonNameInput}
        onChange={handleInputChange}
      />
      <button onClick={catchPokemon}>Add Pokemon</button>
      <ul>
        {caught.map((pokemon) => (
          <li>
            {" "}
            Caught {pokemon} Pokemon on {props.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CaughtPokemon;
