import { modak } from "../app/fonts";

const leftLinks = ["Features", "Gallery", "Pricing", "How it works"];
const rightLinks = ["Contact", "FAQs", "Privacy", "Terms"];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden rounded-t-3xl border-t border-white/10 bg-[#181818] px-4 pt-16 text-white sm:rounded-t-[2rem] sm:px-6 sm:pt-20 md:pt-24">
      <div className="mx-auto grid max-w-7xl gap-10 pb-20 sm:gap-12 sm:pb-24 md:grid-cols-2 md:pb-28 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="md:col-span-2 lg:col-span-1">
          <h2 className="type-heading max-w-xl text-balance text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl md:text-4xl md:tracking-[-0.035em]">
            A better view for your Mac.
          </h2>

          <div className="mt-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-white/65 sm:mt-5">
            © 2026 ALL RIGHTS RESERVED
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:gap-3">
          {leftLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replaceAll(" ", "-")}`}
              className="text-base font-medium text-white/50 transition hover:text-white sm:text-lg"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-2 sm:gap-3">
          {rightLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-base font-medium text-white/50 transition hover:text-white sm:text-lg"
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      <div className="pointer-events-none relative left-1/2 max-w-[100vw] -translate-x-1/2 px-2 text-center">
        <h2
          className={`${modak.className} select-none whitespace-nowrap text-[clamp(3rem,16vw,11rem)] leading-[0.68] tracking-tight text-white sm:text-[clamp(3.25rem,18vw,12rem)] md:text-[clamp(5rem,22vw,16rem)] lg:text-[22vw]`}
        >
          WallyAI
        </h2>
      </div>
    </footer>
  );
}
