import React, { useState, useEffect } from "react";

const PokemonMoves = (props) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonId}/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPokemonData(data);
        console.log(pokemonData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.pokemonId]);

  return pokemonData ? (
    <div>
      <p>{pokemonData.name}'s moves:</p>
      <ul>
        {pokemonData.moves.map((move, index) => {
          return <li key={index}>{move.move.name}</li>;
        })}
      </ul>
    </div>
  ) : null;
};

export default PokemonMoves;
