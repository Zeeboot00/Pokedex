interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  pokemonIndex: number;
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}

function NavBar({ setPokemonIndex, pokemonList }: NavBarProps) {
  const displayGoodPokemon = (toto) => {
    setPokemonIndex(toto);
  };

  return (
    <>
      {pokemonList.map((object, toto) => (
        <button
          type="button"
          key={object.name}
          onClick={() => displayGoodPokemon(toto)}
        >
          {object.name}
        </button>
      ))}
    </>
  );
}

export default NavBar;
