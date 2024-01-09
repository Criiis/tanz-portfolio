"use client";
import { brand } from "@/public/variables";
import { Navigation } from "../components/nav";
import Particles from "../components/particles";
import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container min-h-screen pt-[65px] mx-auto px-4 animate-fade-in-fast">
        <div className="w-full text-center max-w-screen-lg mx-auto">
          <h2 className="text-5xl md:text-8xl font-bold font-display">Tanjila Namaji.</h2>
          <p className="z-10 font-display text-zinc-400 tracking-wider my-4 sm:text-2xl md:text-3xl">
            Product Designer from London
          </p>
          <p>
            With a solid foundation of over eight years in the industry, I have honed my skills in
            user experience and user interface creation. My technical acumen, coupled with my
            creative flair, has enabled me to navigate the digital landscape effectively. This
            expertise allows me to craft innovative and streamlined branded touchpoints.
            <br />
            My primary objective is to deliver an end product that is centered around the client and
            user's needs. By doing so, I aim to enhance brand awareness, foster brand loyalty, and
            stimulate revenue growth.
          </p>
        </div>

        <div className="w-full pt-[5rem]">
          <div className="grid grid-rows-4 grid-flow-col gap-4 justify-items-center">
            {brand.map((brand) => (
              <Image
                src={`/brands/${brand}.png`}
                alt={brand}
                width={120}
                height={80}
                className="mb-4"
              />
            ))}
          </div>
        </div>
      </div>
      <Particles className="absolute inset-0 -z-10" quantity={100} />
    </div>
  );
}
