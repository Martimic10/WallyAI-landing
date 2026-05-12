const leftLinks = ["Features", "Gallery", "Pricing", "How it works"];
const rightLinks = ["Contact", "FAQs", "Privacy", "Terms"];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden rounded-t-[2rem] border-t border-white/10 bg-[#181818] px-6 pt-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 pb-28 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight md:text-4xl">
            A better view for your Mac.
          </h2>

          <div className="mt-5 inline-flex rounded-full bg-white/10 px-3 py-1 text-[10px] uppercase tracking-widest text-white/70">
            © 2026 ALL RIGHTS RESERVED
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {leftLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replaceAll(" ", "-")}`}
              className="text-lg font-semibold text-white/55 transition hover:text-white"
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
              className="text-lg font-semibold text-white/55 transition hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      <div className="pointer-events-none relative left-1/2 -translate-x-1/2 text-center">
        <h1
          className="
            font-[var(--font-logo)]
            text-[22vw]
            leading-[0.72]
            text-white
            tracking-tight
            select-none
            whitespace-nowrap
          "
        >
          WallyAI
        </h1>
      </div>
    </footer>
  );
}