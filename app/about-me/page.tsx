"use client";
import { brand } from "@/content/variables";
import { Navigation } from "../components/nav";
import Particles from "../components/particles";
import Image from "next/image";

export default function Example() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container min-h-screen pt-[65px] mx-auto px-4">
        <div className="w-full text-center max-w-screen-lg mx-auto">
          <h2 className="text-8xl font-bold font-display">About.</h2>
          <h2 className="text-xl mb-4">I'm a Product Designer based in London</h2>
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
          <p className="mt-2">
            In terms of collaboration, I actively contribute to both client projects and in-house
            campaigns throughout the entire system development process. My specialized knowledge
            spans across various sectors including FinTech, E-commerce, B2B, B2C, Corporate, and
            Research.
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
