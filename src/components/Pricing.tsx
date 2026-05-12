import { Check } from "lucide-react";

const freeFeatures = [
  "3 AI generations",
  "Basic preset gallery",
  "Single monitor wallpaper setup",
  "Standard styles",
];

const proFeatures = [
  "Unlimited generations",
  "Full premium gallery",
  "200+ wallpapers",
  "Auto-rotate wallpapers",
  "Multi-monitor support",
  "Premium styles",
  "Wallpaper history",
];

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-white/40">
            Pricing
          </p>
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Simple pricing. No subscription required.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <PricingCard
            title="Free"
            price="$0"
            description="Try WallyAI and generate your first wallpapers."
            features={freeFeatures}
            button="Start Free"
          />

          <PricingCard
            title="Pro Lifetime"
            price="$19"
            description="Unlock the full wallpaper studio forever."
            features={proFeatures}
            button="Join Waitlist"
            featured
          />
        </div>
      </div>
    </section>
  );
}

function PricingCard({
  title,
  price,
  description,
  features,
  button,
  featured = false,
}: {
  title: string;
  price: string;
  description: string;
  features: string[];
  button: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`rounded-3xl border p-8 ${
        featured
          ? "border-white/25 bg-white text-black"
          : "border-white/10 bg-white/[0.04] text-white"
      }`}
    >
      <h3 className="text-2xl font-semibold">{title}</h3>

      <div className="mt-6 flex items-end gap-2">
        <span className="text-5xl font-semibold">{price}</span>
        {featured && <span className="mb-2 text-black/50">one-time</span>}
      </div>

      <p className={`mt-5 leading-7 ${featured ? "text-black/60" : "text-white/55"}`}>
        {description}
      </p>

      <a
        href="#"
        className={`mt-8 inline-flex w-full justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
          featured
            ? "bg-black text-white hover:bg-black/85"
            : "bg-white text-black hover:bg-white/90"
        }`}
      >
        {button}
      </a>

      <div className="mt-8 space-y-4">
        {features.map((feature) => (
          <div key={feature} className="flex items-center gap-3">
            <Check size={18} />
            <span className={featured ? "text-black/70" : "text-white/65"}>
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}