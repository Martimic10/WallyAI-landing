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
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-white/40">
            How it works
          </p>
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            From photo to wallpaper in seconds.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"
            >
              <div className="mb-10 text-sm text-white/35">{step.number}</div>
              <h3 className="text-2xl font-semibold">{step.title}</h3>
              <p className="mt-4 leading-7 text-white/55">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}