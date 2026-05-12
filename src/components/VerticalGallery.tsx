import Image from "next/image";
import { wallpapers, galleryCategories } from "../data/wallpapers";

export default function VerticalGallery() {
  const columnOne = wallpapers.slice(0, 5);
  const columnTwo = wallpapers.slice(5, 10);
  const columnThree = wallpapers.slice(10, 15);

  return (
    <section id="gallery" className="relative overflow-hidden px-6 py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="self-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-white/40">
            Gallery
          </p>

          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            A premium wallpaper library built into the app.
          </h2>

          <p className="mt-5 max-w-xl leading-8 text-white/55">
            Choose from cinematic landscapes, anime skies, dark minimal setups,
            cyberpunk scenes, nature packs, abstract art, and more.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {galleryCategories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/65"
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        <div className="grid h-[720px] grid-cols-3 gap-4 overflow-hidden">
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
      className={`flex flex-col gap-4 ${
        reverse ? "animate-scroll-y-reverse" : "animate-scroll-y"
      }`}
    >
      {images.map((src, index) => (
        <div
          key={`${src}-${index}`}
          className="relative h-[260px] overflow-hidden rounded-3xl border border-white/10 bg-white/5"
        >
          <Image
            src={src}
            alt="Wallpaper gallery image"
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}