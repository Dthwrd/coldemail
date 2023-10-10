import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col items-center gap-y-6 px-64 py-32 text-center">
      <h1 className="text-7xl font-bold">
        Scale daily cold emailing capacity. Infinitely.
      </h1>
      <p className="text-xl text-slate-400">Buy, configure and warmup domains & G-workspace accounts in Bulk.</p>
      <Link href="/configuration" className="text-xl text-slate-950 py-4 w-1/4 rounded-md bg-blue-500">Get Started</Link>
    </section>
  );
};

export default Hero;
