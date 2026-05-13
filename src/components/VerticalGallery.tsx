import Image from "next/image";
import { wallpapers, galleryCategories } from "../data/wallpapers";

export default function VerticalGallery() {
  const columnOne = wallpapers.slice(0, 5);
  const columnTwo = wallpapers.slice(5, 10);
  const columnThree = wallpapers.slice(10, 15);

  return (
    <section
      id="gallery"
      className="relative overflow-x-hidden px-4 py-16 sm:px-6 sm:py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 lg:grid lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-12">
        <div className="relative z-10 min-w-0 shrink-0">
          <p className="type-eyebrow mb-3 sm:mb-4">Gallery</p>

          <h2 className="type-heading text-balance text-3xl font-semibold tracking-[-0.03em] sm:text-4xl md:text-5xl md:tracking-[-0.035em]">
            A premium wallpaper library built into the app.
          </h2>

          <p className="mt-4 max-w-xl text-base leading-relaxed tracking-tight text-white/[0.55] sm:mt-5 sm:text-lg">
            Choose from cinematic landscapes, anime skies, dark minimal setups,
            cyberpunk scenes, nature packs, abstract art, and more.
          </p>

          <div className="relative z-20 mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
            {galleryCategories.map((category) => (
              <span
                key={category}
                className="relative rounded-full border border-white/10 bg-[#050507]/90 px-3 py-1.5 text-[12px] font-medium tracking-wide text-white/70 shadow-sm backdrop-blur-sm sm:px-4 sm:py-2 sm:text-[13px]"
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-0 min-h-0 w-full min-w-0 shrink-0">
          <div
            className="w-full overflow-hidden rounded-2xl border border-white/10 bg-[#050507] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]"
            role="region"
            aria-label="Scrolling wallpaper previews"
          >
            <div className="grid h-[min(48vh,400px)] grid-cols-3 gap-2 p-2 sm:h-[min(56vh,480px)] sm:gap-2.5 sm:p-2.5 md:h-[min(60vh,560px)] md:gap-3 md:p-3 lg:h-[720px] lg:gap-4 lg:p-3">
              <GalleryColumn images={columnOne} />
              <GalleryColumn images={columnTwo} reverse />
              <GalleryColumn images={columnThree} />
            </div>
          </div>
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
  const loop = [...images, ...images];

  return (
    <div className="relative min-h-0 min-w-0 overflow-hidden">
      <div
        className={`flex flex-col gap-2 sm:gap-2.5 md:gap-3 lg:gap-4 ${
          reverse ? "animate-scroll-y-reverse" : "animate-scroll-y"
        }`}
      >
        {loop.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="relative h-[88px] w-full shrink-0 overflow-hidden rounded-lg border border-white/10 bg-white/5 sm:h-[118px] sm:rounded-xl md:h-[150px] lg:h-[240px] xl:h-[260px] lg:rounded-2xl xl:rounded-3xl"
          >
            <Image
              src={src}
              alt=""
              role="presentation"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 28vw, (max-width: 1024px) 22vw, 240px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
