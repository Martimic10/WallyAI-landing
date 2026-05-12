import Image from "next/image";
import { wallpapers } from "../data/wallpapers";

export default function WallpaperCarousel() {
  const items = [...wallpapers, ...wallpapers];

  return (
    <div className="relative mt-14 overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#050507] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#050507] to-transparent" />

      <div className="flex w-max gap-5 animate-scroll-x">
        {items.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="relative h-[280px] w-[460px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl"
          >
            <Image
              src={src}
              alt="WallyAI wallpaper preview"
              fill
              className="object-cover"
              priority={index < 4}
            />
          </div>
        ))}
      </div>
    </div>
  );
}