import { useState, useEffect } from "react";
import Pokemon from "../components/Pokemon";
import { getPokemonList } from "../api";

export default function HomePage() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemonList()
      .then((pokemonListResponse) => setPokemons(pokemonListResponse))
      .catch((error) => console.error("Fetch pokemon error: ", error));
  }, []);

  return (
    <main className="text-center p-3 ">
      <header>
        <h1 className=" text-5xl font-bold p-5">Pokédex</h1>
      </header>
      <section className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {pokemons.map((pokemon) => {
          return <Pokemon key={pokemon.name} name={pokemon.name} />;
        })}
      </section>
    </main>
  );
}
