import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";


const logWhenClicked = () => console.log("test");

const App = () => {
  return (
    <div>
      <Logo appName="Andy's Pokedex" handleClicked={logWhenClicked} />
      <BestPokemon abilities={["Anticipation", "Adaptability", "Run-Away"]} />
      <CaughtPokemon date={new Date().toLocaleDateString()} />
      {/* <PokemonMoves /> */}
      <PokemonMovesSelector />
      < PokemonCity />
    </div>
  );
};

export default App;
