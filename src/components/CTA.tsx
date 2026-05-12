import Image from "next/image";

export default function CTA() {
  return (
    <section className="px-6 py-28">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 px-6 py-24 text-center">
        <Image
          src="/wallpapers/wallpaper-1.jpg"
          alt="Cinematic wallpaper background"
          fill
          className="object-cover opacity-35"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative mx-auto max-w-3xl">
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Give your Mac a better view.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-8 text-white/70">
            Join the waitlist and be first to try WallyAI when the Mac app
            launches.
          </p>

          <a
            href="#waitlist"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </section>
  );
}