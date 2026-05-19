import {
  ImageIcon,
  Sparkles,
  Monitor,
  PanelsTopLeft,
  RefreshCcw,
  Wand2,
} from "lucide-react";

const features = [
  {
    icon: ImageIcon,
    title: "200+ curated wallpapers",
    description: "Browse a premium wallpaper library built for Mac displays.",
  },
  {
    icon: Sparkles,
    title: "AI photo-to-wallpaper",
    description: "Transform personal photos into cinematic desktop artwork.",
  },
  {
    icon: Monitor,
    title: "One-click setup",
    description: "Apply your wallpaper instantly without leaving the app.",
  },
  {
    icon: PanelsTopLeft,
    title: "Multi-monitor support",
    description: "Set different wallpapers across your full desktop setup.",
  },
  {
    icon: RefreshCcw,
    title: "Auto-rotate",
    description: "Schedule your favorite wallpapers to rotate automatically.",
  },
  {
    icon: Wand2,
    title: "Style presets",
    description: "Cinematic, minimal, vibrant, abstract, nature, and more.",
  },
];

export default function Features() {
  return (
    <section id="features" className="px-4 py-16 sm:px-6 sm:py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl sm:mb-14">
          <p className="type-eyebrow mb-3 sm:mb-4">Features</p>
          <h2 className="type-heading text-balance text-3xl font-semibold tracking-[-0.03em] sm:text-4xl md:text-5xl md:tracking-[-0.035em]">
            Everything your desktop needs to look incredible.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.07] sm:rounded-3xl sm:p-7"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black">
                  <Icon size={22} />
                </div>

                <h3 className="type-heading text-lg font-semibold tracking-[-0.02em] md:text-xl">
                  {feature.title}
                </h3>
                <p className="mt-3 leading-relaxed text-white/[0.55]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}