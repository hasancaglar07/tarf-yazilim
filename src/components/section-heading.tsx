type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "start" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "start",
}: Props) {
  return (
    <div
      className={`flex flex-col gap-4 ${align === "center" ? "items-center text-center" : ""}`}
    >
      {eyebrow ? (
        <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/80 sm:text-xs">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-3xl text-lg leading-relaxed text-foreground/80">
          {description}
        </p>
      ) : null}
    </div>
  );
}
