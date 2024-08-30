import { useState, useEffect } from "react";
import Pokemon from "./components/Pokemon";

export default function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((response) => response.json())
      .then((jsonResponse) => {
        setPokemons(jsonResponse.results);
      })
      .catch((error) => {
        console.error("Fetch pokemon error: ", error);
      });
  }, []);

  return (
    <main className="text-center p-3 ">
      <header>
        <h1 className="font-handjet text-5xl font-bold p-5">Pokédex</h1>
      </header>
      <section className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {pokemons.map((pokemon) => {
          return <Pokemon key={pokemon.name} name={pokemon.name} />;
        })}
      </section>
    </main>
  );
}
