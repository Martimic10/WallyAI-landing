import Image from "next/image";
import DownloadForMac from "./DownloadForMac";

export default function CTA() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 md:py-28">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-14 text-center sm:rounded-[2rem] sm:px-6 sm:py-20 md:py-24">
        <Image
          src="/wallpapers/wallpaper-1.jpg"
          alt="Cinematic wallpaper background"
          fill
          className="object-cover opacity-35"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative mx-auto max-w-3xl px-1">
          <h2 className="type-heading text-balance text-3xl font-semibold tracking-[-0.03em] sm:text-4xl md:text-5xl md:tracking-[-0.035em] lg:text-6xl lg:tracking-[-0.04em]">
            Give your Mac a better view.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed tracking-tight text-white/[0.68] sm:mt-5 sm:text-lg">
            Download the native macOS app and start turning your photos into
            cinematic wallpapers in minutes.
          </p>

          <div className="mx-auto mt-7 flex w-full max-w-sm justify-center sm:mt-8 sm:max-w-none">
            <DownloadForMac variant="light" />
          </div>
        </div>
      </div>
    </section>
  );
}
