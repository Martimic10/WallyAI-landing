import { modak } from "../app/fonts";

const leftLinks = ["Features", "Gallery", "Pricing", "How it works"];
const rightLinks = ["Contact", "FAQs", "Privacy", "Terms"];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden rounded-t-[2rem] border-t border-white/10 bg-[#181818] px-6 pt-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 pb-28 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <h2 className="type-heading max-w-xl text-balance text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl md:tracking-[-0.035em]">
            A better view for your Mac.
          </h2>

          <div className="mt-5 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-white/65">
            © 2026 ALL RIGHTS RESERVED
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {leftLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replaceAll(" ", "-")}`}
              className="text-lg font-medium text-white/50 transition hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          {rightLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-lg font-medium text-white/50 transition hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      <div className="pointer-events-none relative left-1/2 -translate-x-1/2 text-center">
        <h1
          className={`${modak.className} text-[22vw] leading-[0.68] text-white tracking-tight select-none whitespace-nowrap`}
        >
          WallyAI
        </h1>
      </div>
    </footer>
  );
}