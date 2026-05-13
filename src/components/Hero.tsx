import DownloadForMac from "./DownloadForMac";
import SlideHoverLabel from "./SlideHoverLabel";
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
        <div className="mx-auto mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[13px] font-medium tracking-wide text-white/65 backdrop-blur">
          Native macOS AI wallpaper studio
        </div>

        <h1 className="type-heading mx-auto max-w-5xl text-balance text-5xl font-semibold tracking-[-0.03em] md:text-7xl md:tracking-[-0.04em]">
          AI wallpapers that make your Mac feel brand new.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed tracking-tight text-white/[0.58]">
          Turn your photos into cinematic desktop art, browse 200+ curated
          wallpapers, and set them on your Mac in one click.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <DownloadForMac variant="light" />

          <a
            href="#gallery"
            className="group cursor-pointer rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <SlideHoverLabel>View Gallery</SlideHoverLabel>
          </a>
        </div>
      </div>

      <div className="mt-32 md:mt-40">
        <WallpaperCarousel />
      </div>
    </section>
  );
}