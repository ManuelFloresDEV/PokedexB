export function Stats({ stats }) {
  return (
    <>
      {stats.map((stat) => (
        <span className=" w-full flex gap-2 " key={stat.stat.name}>
          <p className=" w-1/2 text-right text-md">{`${stat.stat.name}: `}</p>
          <p className=" w-1/2 text-md">{stat.base_stat}</p>
        </span>
      ))}
    </>
  );
}
