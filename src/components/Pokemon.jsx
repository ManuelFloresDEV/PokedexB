import { useEffect, useState } from "react";

export default function Pokemon({ name }) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setPokemon(jsonResponse);
      })
      .catch((error) => {
        console.error("Fetch pokemon error: ", error);
      });
  }, []);

  return (
    <article
      className={` hover:border-green-200 relative hover:animate-customPulse rounded-lg  flex flex-col items-center gap-3 border border-white p-4`}
      style={{
        backgroundImage: `url('${pokemon.sprites?.other["official-artwork"]?.front_default}')`,
      }}
    >
      <div className="absolute inset-0 bg-black/65  rounded-lg"></div>

      <img
        className="size-32 m-10 z-10 "
        src={pokemon.sprites?.other["official-artwork"]?.front_default}
        alt=""
      />
      <h2 className="font-handjet text-2xl z-10">{name}</h2>
    </article>
  );
}
