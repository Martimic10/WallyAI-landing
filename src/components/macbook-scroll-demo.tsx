import Image from "next/image";
import { MacbookScroll } from "./ui/macbook-scroll";

export default function MacbookScrollDemo() {
  return (
    <>
      {/* Desktop / tablet: full scroll animation */}
      <div className="hidden md:block w-full overflow-hidden">
        <MacbookScroll
          title={
            <span>
              Beautiful AI wallpapers for your Mac.
              <br />
              Generated in seconds.
            </span>
          }
          src="/wallpapers/wallpaper-1.jpg"
          showGradient={false}
        />
      </div>

      {/* Mobile: static wallpaper preview */}
      <div className="relative mt-8 overflow-hidden rounded-2xl border border-white/10 sm:mt-10 sm:rounded-3xl md:hidden">
        <Image
          src="/wallpapers/wallpaper-1.jpg"
          alt="WallyAI wallpaper preview"
          width={1200}
          height={750}
          className="w-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
    </>
  );
}
