export default function SectionHeading({
  eyebrow,
  title,
  description,
}) {
  return (
    <div className="mb-12">
      <p className="text-sm font-semibold uppercase tracking-[0.32em] text-primary">
        {eyebrow}
      </p>
      <h2 className="section-title mt-4">{title}</h2>
      {description ? <p className="section-copy">{description}</p> : null}
    </div>
  );
}
