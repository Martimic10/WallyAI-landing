import WallpaperCarousel from "./WallpaperCarousel";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-6 pb-24 pt-36"
    >
      <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-orange-500/20 blur-[140px]" />
      <div className="absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl text-center">
        <div className="mx-auto mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur">
          Native macOS AI wallpaper studio
        </div>

        <h1 className="mx-auto max-w-5xl text-5xl font-semibold tracking-tight md:text-7xl">
          AI wallpapers that make your Mac feel brand new.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
          Turn your photos into cinematic desktop art, browse 200+ curated
          wallpapers, and set them on your Mac in one click.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#waitlist"
            className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Join Waitlist
          </a>

          <a
            href="#gallery"
            className="rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            View Gallery
          </a>
        </div>
      </div>

      <div className="mt-32 md:mt-40">
        <WallpaperCarousel />
      </div>
    </section>
  );
}