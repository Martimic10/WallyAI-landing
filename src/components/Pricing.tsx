import { Check } from "lucide-react";
import DownloadForMac from "./DownloadForMac";

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
          <p className="type-eyebrow mb-4">Pricing</p>
          <h2 className="type-heading text-balance text-4xl font-semibold tracking-[-0.03em] md:text-5xl md:tracking-[-0.035em]">
            Simple pricing. No subscription required.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <PricingCard
            title="Free"
            price="$0"
            description="Try WallyAI and generate your first wallpapers."
            features={freeFeatures}
          />

          <PricingCard
            title="Pro Lifetime"
            price="$19"
            description="Unlock the full wallpaper studio forever."
            features={proFeatures}
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
  featured = false,
}: {
  title: string;
  price: string;
  description: string;
  features: string[];
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
      <h3 className="type-heading text-2xl font-semibold tracking-[-0.02em]">{title}</h3>

      <div className="mt-6 flex items-end gap-2">
        <span className="type-heading text-5xl font-semibold tabular-nums tracking-[-0.03em]">
          {price}
        </span>
        {featured && <span className="mb-2 text-black/50">one-time</span>}
      </div>

      <p
        className={`mt-5 leading-relaxed tracking-tight ${featured ? "text-black/60" : "text-white/[0.55]"}`}
      >
        {description}
      </p>

      <DownloadForMac
        variant={featured ? "dark" : "light"}
        className="mt-8 w-full"
      />

      <div className="mt-8 space-y-4">
        {features.map((feature) => (
          <div key={feature} className="flex items-center gap-3">
            <Check size={18} />
            <span className={featured ? "text-black/70" : "text-white/[0.62]"}>
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
