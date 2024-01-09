"use client";
import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { navigation, projects } from "@/public/variables";
import { Card } from "./components/card";
import scrollToHash from "@/util/scroll";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-[95vh] overflow-hidden from-black via-zinc-600/20 to-black">
        <nav className="mb-8 animate-fade-in">
          <ul className="flex items-center justify-center gap-4">
            <button
              className="text-base duration-500 font-display tracking-wider hover:text-zinc-500 "
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                scrollToHash("projects-sections");
              }}
            >
              Projects
            </button>
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base duration-500 font-display tracking-wider hover:text-zinc-500 "
                target={item.external ? "_blank" : undefined}
                scroll={false}
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <Particles className="fixed  bg-gradient-to-tl inset-0 -z-10 " quantity={500} />
        <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
          Tanjila Namaji
        </h1>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <p className="z-10 font-display text-zinc-400 tracking-wider animate-fade-in mt-0 sm:text-2xl md:text-3xl md:mt-4 ">
          Product Designer from London
        </p>
      </div>

      <div
        id="projects-sections"
        className="from-zinc-900/0 via-zinc-900 to-zinc-900/0 pb-6 animate-fade-in"
      >
        <div className="container flex items-center justify-center px-4 mx-auto">
          <div className="grid w-full grid-cols-1 gap-8 mx-auto sm:grid-cols-3">
            {projects.map(({ company, description, image }) => (
              <Card key={company}>
                <Link
                  href={`/`}
                  className={`group/edit w-full justify-end grayscale bg-cover bg-no-repeat bg-center p-4 pb-9 relative flex flex-col items-center gap-4 duration-500 min-h-72 group md:gap-8 hover:grayscale-0`}
                  style={{ backgroundImage: `url('/projects/${image}')` }}
                >
                  <div>
                    <p className="text-xl font-medium text-center tracking-wider">
                      {company.toUpperCase()}
                    </p>
                    <p className="text-m text-center font-normal opacity-0 group-hover/edit:opacity-100 duration-500">
                      {description}
                    </p>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
