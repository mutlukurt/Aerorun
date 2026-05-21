export function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="mb-7 flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div>
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-zinc-500">
          {eyebrow}
        </p>
        <h2 className="font-display text-3xl font-black uppercase leading-[0.95] tracking-[-0.05em] text-white md:text-5xl">
          {title}
        </h2>
      </div>
      {copy ? <p className="max-w-md text-sm leading-6 text-zinc-400">{copy}</p> : null}
    </div>
  );
}
