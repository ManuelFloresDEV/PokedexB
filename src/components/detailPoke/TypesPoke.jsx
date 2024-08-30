import clsx from "clsx";

export default function TypePoke({ types }) {
  return (
    <>
      {types?.map((type) => (
        <span
          className={clsx(
            "hover:bg-slate-950 hover:text-white",
            "border border-zinc-400 rounded-full px-2"
          )}
          key={type.slot}
        >
          {type?.type?.name}
        </span>
      ))}
    </>
  );
}
