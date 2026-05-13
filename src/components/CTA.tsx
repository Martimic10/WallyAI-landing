import Image from "next/image";
import DownloadForMac from "./DownloadForMac";

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
          <h2 className="type-heading text-balance text-4xl font-semibold tracking-[-0.03em] md:text-6xl md:tracking-[-0.04em]">
            Give your Mac a better view.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-relaxed tracking-tight text-white/[0.68]">
            Download the native macOS app and start turning your photos into
            cinematic wallpapers in minutes.
          </p>

          <div className="mt-8 flex justify-center">
            <DownloadForMac variant="light" />
          </div>
        </div>
      </div>
    </section>
  );
}