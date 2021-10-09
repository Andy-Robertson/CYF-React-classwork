import React, { useState } from "react";

const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);
  const catchPokemon = () => {
    setCaught((c1) => c1.concat(getRandomPokemon()));
  };

  const getRandomPokemon = () => {
    const pokemon = [
      "Pokemon 1",
      "Pokemon 2",
      "Pokemon 3",
      "Pokemon 4",
      "Pokemon 5",
      "Pokemon 6",
    ];
    return pokemon[Math.floor(Math.random() * pokemon.length)];
  };

  return (
    <div>
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
