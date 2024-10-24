import { useState } from "react";
import "./App.css";

import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
    imgSrc:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/151.png",
  }
];

function App() {
  const [count, setCount] = useState(0);

  const incremente = () => {
    if (count < pokemonList.length - 1) {
      setCount(count + 1);
    }
  };

  const decremente = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <PokemonCard pokemon={pokemonList[count]} />
      <button onClick={decremente}>Précédent</button>
      <button onClick={incremente}>Suivant</button>
    </div>
  );
}

export default App;
