import Image from "next/image";
import { wallpapers, galleryCategories } from "../data/wallpapers";

export default function VerticalGallery() {
  const columnOne = wallpapers.slice(0, 5);
  const columnTwo = wallpapers.slice(5, 10);
  const columnThree = wallpapers.slice(10, 15);

  return (
    <section id="gallery" className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
        <div className="self-center">
          <p className="type-eyebrow mb-3 sm:mb-4">Gallery</p>

          <h2 className="type-heading text-balance text-3xl font-semibold tracking-[-0.03em] sm:text-4xl md:text-5xl md:tracking-[-0.035em]">
            A premium wallpaper library built into the app.
          </h2>

          <p className="mt-4 max-w-xl text-base leading-relaxed tracking-tight text-white/[0.55] sm:mt-5 sm:text-lg">
            Choose from cinematic landscapes, anime skies, dark minimal setups,
            cyberpunk scenes, nature packs, abstract art, and more.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
            {galleryCategories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[12px] font-medium tracking-wide text-white/60 sm:px-4 sm:py-2 sm:text-[13px]"
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        <div className="grid h-[min(52vh,440px)] grid-cols-3 gap-1.5 sm:h-[min(58vh,520px)] sm:gap-2 md:gap-4 lg:h-[720px]">
          <GalleryColumn images={columnOne} />
          <GalleryColumn images={columnTwo} reverse />
          <GalleryColumn images={columnThree} />
        </div>
      </div>
    </section>
  );
}

function GalleryColumn({
  images,
  reverse = false,
}: {
  images: string[];
  reverse?: boolean;
}) {
  return (
    <div
      className={`flex min-h-0 flex-col gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 ${
        reverse ? "animate-scroll-y-reverse" : "animate-scroll-y"
      }`}
    >
      {images.map((src, index) => (
        <div
          key={`${src}-${index}`}
          className="relative h-[100px] overflow-hidden rounded-xl border border-white/10 bg-white/5 sm:h-[140px] sm:rounded-2xl md:h-[180px] lg:h-[260px] lg:rounded-3xl"
        >
          <Image
            src={src}
            alt="Wallpaper gallery image"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 45vw, 200px"
          />
        </div>
      ))}
    </div>
  );
}
