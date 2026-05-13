const steps = [
  {
    number: "01",
    title: "Upload a photo",
    description: "Drag in a personal photo or start from the built-in gallery.",
  },
  {
    number: "02",
    title: "Choose a style",
    description: "Pick cinematic, minimal, vibrant, abstract, nature, or custom.",
  },
  {
    number: "03",
    title: "Set your wallpaper",
    description: "Preview it on a Mac desktop and apply it in one click.",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="type-eyebrow mb-4">How it works</p>
          <h2 className="type-heading text-balance text-4xl font-semibold tracking-[-0.03em] md:text-5xl md:tracking-[-0.035em]">
            From photo to wallpaper in seconds.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"
            >
              <div className="mb-10 text-xs font-semibold tabular-nums tracking-widest text-white/30">
                {step.number}
              </div>
              <h3 className="type-heading text-2xl font-semibold tracking-[-0.02em]">
                {step.title}
              </h3>
              <p className="mt-4 leading-relaxed text-white/[0.55]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}