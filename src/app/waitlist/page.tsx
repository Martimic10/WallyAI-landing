import Link from "next/link";

export default function WaitlistPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050507] px-6 py-24 text-white">
      <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-orange-500/20 blur-[140px]" />
      <div className="absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-[120px]" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <Link
          href="/"
          className="mb-10 text-sm text-white/50 transition hover:text-white"
        >
          ← Back to Home
        </Link>

        <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur">
          WallyAI Early Access
        </div>

        <h1 className="mt-8 text-5xl font-semibold tracking-tight md:text-7xl">
          Join the WallyAI waitlist.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
          Be one of the first to try the AI-powered wallpaper studio for macOS.
          Get early access, launch updates, and exclusive wallpaper packs.
        </p>

        <form className="mt-12 w-full max-w-xl">
          <div className="flex flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-14 flex-1 rounded-full border border-white/10 bg-white/5 px-6 text-white outline-none backdrop-blur placeholder:text-white/35 focus:border-white/25"
            />

            <button
              type="submit"
              className="h-14 rounded-full bg-white px-8 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Join Waitlist
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}