import Image from "next/image";
import { wallpapers } from "../data/wallpapers";

export default function WallpaperCarousel() {
  const items = [...wallpapers, ...wallpapers];

  return (
    <div className="relative mt-10 overflow-hidden sm:mt-14">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-[#050507] to-transparent sm:w-16 md:w-24" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-[#050507] to-transparent sm:w-16 md:w-24" />

      <div className="flex w-max gap-3 animate-scroll-x sm:gap-4 md:gap-5">
        {items.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="relative aspect-[460/280] w-[min(88vw,460px)] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl sm:rounded-3xl"
          >
            <Image
              src={src}
              alt="WallyAI wallpaper preview"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 88vw, (max-width: 1024px) 70vw, 460px"
              priority={index < 4}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
