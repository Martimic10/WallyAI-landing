import DownloadForMac from "./DownloadForMac";
import SlideHoverLabel from "./SlideHoverLabel";
import MacbookScrollDemo from "./macbook-scroll-demo";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen px-4 pb-20 pt-24 sm:px-6 sm:pb-24 sm:pt-28 md:min-h-0 md:pt-36"
    >
      <div className="absolute left-1/2 top-0 h-[min(420px,90vw)] w-[min(800px,140vw)] max-w-[800px] -translate-x-1/2 rounded-full bg-orange-500/20 blur-[100px] sm:blur-[140px]" />
      <div className="absolute right-0 top-28 h-[min(320px,70vw)] w-[min(400px,85vw)] max-w-[400px] rounded-full bg-blue-500/20 blur-[80px] sm:top-40 sm:blur-[120px]" />

      <div className="relative mx-auto max-w-7xl text-center">
        <div className="mx-auto mb-5 inline-flex max-w-[calc(100vw-2rem)] rounded-full border border-white/10 bg-white/5 px-3 py-2 text-center text-[12px] font-medium leading-snug tracking-wide text-white/65 backdrop-blur sm:mb-6 sm:px-4 sm:text-[13px]">
          Native macOS AI wallpaper studio
        </div>

        <h1 className="type-heading mx-auto max-w-5xl text-balance text-4xl font-semibold tracking-[-0.03em] sm:text-5xl md:text-6xl md:tracking-[-0.035em] lg:text-7xl lg:tracking-[-0.04em]">
          AI wallpapers that make your Mac feel brand new.
        </h1>

        <p className="mx-auto mt-5 max-w-2xl px-1 text-base leading-relaxed tracking-tight text-white/[0.58] sm:mt-6 sm:text-lg">
          Turn your photos into cinematic desktop art, browse 200+ curated
          wallpapers, and set them on your Mac in one click.
        </p>

        <div className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-9 sm:max-w-none sm:w-auto sm:flex-row sm:justify-center sm:gap-4">
          <DownloadForMac variant="light" />

          <a
            href="#gallery"
            className="group flex min-h-12 w-full cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto sm:px-7 sm:py-3"
          >
            <SlideHoverLabel>View Gallery</SlideHoverLabel>
          </a>
        </div>
      </div>

      <MacbookScrollDemo />
    </section>
  );
}