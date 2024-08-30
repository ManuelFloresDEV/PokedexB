import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPokemonByName } from "../api";
import DetailPokemon from "../components/detailPoke/DetailPokemon";

export default function PokemonPage() {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState({});
  const { name } = useParams();

  useEffect(() => {
    getPokemonByName(name)
      .then((pokemonResponse) => setPokemon(pokemonResponse))
      .catch((error) => console.error("[getPokemonByName]:", error));
  }, [name]);

  if (!pokemon.name) {
    return <main>POKEMON NOT FOUND</main>;
  }
  console.log(pokemon);

  return (
    <>
      <header>
        <h1
          onClick={() => {
            navigate(`/`);
          }}
          className=" pr-20 text-right  text-3xl font-bold p-3 bg-cover bg-center bg-no-repeat "
          style={{
            backgroundImage: `url('${pokemon.sprites?.other["official-artwork"]?.front_default}')`,
            backgroundSize: "5rem",
          }}
        >
          Pokédex
        </h1>
      </header>
      <DetailPokemon
        image={pokemon.sprites?.other["official-artwork"]?.front_default}
        name={pokemon.name}
        height={pokemon.height}
        weight={pokemon.weight}
        types={pokemon.types}
        stats={pokemon.stats}
      />
      <div className="flex justify-center">
        <button
          onClick={() => {
            navigate("/");
          }}
          className="bg-white text-black px-6 py-3 text-lg rounded-full hover:bg-black border transition duration-300 ease-in-out hover:text-white  "
        >
          HOME
        </button>
      </div>
    </>
  );
}
