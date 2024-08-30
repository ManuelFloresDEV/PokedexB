export default function TypePoke({ types }) {
  return (
    <>
      {types?.map((type) => (
        <span
          className="hover:bg-slate-950 hover:text-white border border-zinc-400 rounded-full px-2"
          key={type.slot}
        >
          {type?.type?.name}
        </span>
      ))}
    </>
  );
}
