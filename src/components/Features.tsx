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
    <section id="features" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-white/40">
            Features
          </p>
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Everything your desktop needs to look incredible.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:bg-white/[0.07]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black">
                  <Icon size={22} />
                </div>

                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 leading-7 text-white/55">
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