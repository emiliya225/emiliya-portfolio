"use client";

import Image from "next/image";

function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#fafafa] text-black">
      {/* Top bar */}
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-6 md:px-10">
        {/* Left logo */}
        <a
          href="/"
          aria-label="Home"
          className="text-xl font-semibold tracking-tight"
        >
          &lt;&gt;
        </a>

        {/* Center dot */}
        <div className="hidden h-3 w-3 rounded-full bg-black md:block" />

        {/* Right menu */}
        <button
          type="button"
          className="flex items-center gap-3 text-sm font-medium"
          aria-label="Open menu"
        >
          <span>menu</span>
          <span className="flex flex-col gap-1">
            <span className="block h-px w-6 bg-black" />
            <span className="block h-px w-6 bg-black" />
          </span>
        </button>
      </div>

      {/* Hero content */}
      <div className="mx-auto flex min-h-[calc(100vh-96px)] w-full max-w-[1100px] flex-col items-center justify-center px-6 pb-20 pt-12 text-center">
        <div className="mb-5 rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-medium text-neutral-900">
          UX/UI Designer & Researcher
        </div>

        <h1 className="max-w-5xl text-5xl font-black tracking-[-0.06em] text-black sm:text-6xl md:text-7xl lg:text-8xl">
          Hi, I&apos;m Emiliya Mizrahi
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-500 md:text-xl">
          I’m a UX/UI designer and researcher with 7+ years of experience leading
          data-driven digital experiences from discovery to launch.
        </p>

        <div className="mt-12 w-full max-w-[760px] overflow-hidden rounded-2xl bg-neutral-100">
          <Image
            src="/images/hero.jpg"
            alt="Portrait of Emiliya Mizrahi"
            width={1400}
            height={900}
            priority
            className="aspect-[16/9] h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;