export function PokeProp(props) {
  return (
    <section className="flex items-center flex-col">
      <h1 className="font-bold text-3xl">{props.name}</h1>
      <span className="text-lg">{`Height: ${props.height} m`} </span>
      <span className="text-lg">{`Weight: ${props.weight} kg`}</span>
    </section>
  );
}
