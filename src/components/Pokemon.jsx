import { useEffect, useState } from "react";
import { getPokemonByName } from "../api";
import { useNavigate } from "react-router-dom";

export default function Pokemon({ name }) {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    getPokemonByName(name)
      .then((pokemonResponse) => setPokemon(pokemonResponse))
      .catch((error) => console.error("Fetch pokemon error: ", error));
  }, []);

  return (
    <article
      onClick={() => {
        navigate(`pokemon/${name}`);
      }}
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
      <h2 className=" text-2xl z-10">{name}</h2>
    </article>
  );
}
