import { PokeProp } from "./PokeProp";
import { Stats } from "./Stats";
import TypePoke from "./TypesPoke";

export default function DetailPokemon(props) {
  return (
    <main className=" md:flex-row  flex flex-col items-center mx-auto max-w-lg m-3 rounded-lg bg-slate-200 text-black ">
      <img
        className="size-72 animate-customPulse"
        src={props.image}
        alt={props.name}
      />
      <div className=" transition-all ease-in-out duration-300 hover:bg-white hover:text-black border  border-black h-full rounded-md flex flex-col items-center bg-slate-950 w-full text-white ">
        <PokeProp
          name={props.name}
          height={props.height}
          weight={props.weight}
        />
        <section className="flex  gap-2">
          <TypePoke types={props.types} />
        </section>
        <section className=" w-full p-3 flex flex-col">
          <span className="text-center font-bold text-2xl">STATS</span>
          <Stats stats={props.stats} />
        </section>
      </div>
    </main>
  );
}
