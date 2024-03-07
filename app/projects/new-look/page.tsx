"use client";
import { useEffect, useState } from "react";
import { Navigation } from "@/app/components/nav";
import Hero from "@/app/components/projects-components/hero";
import ColContent from "@/app/components/projects-components/col-content";
import Carousel from "@/app/components/projects-components/carousel";

export default function Page({ params }: { params: { id: string } }) {
  const [showNavigation, setShowNavigation] = useState(false);

  // TODO: in future this should be a hook
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const threshold = 50; // Adjust this value to control when the navigation should appear
      setShowNavigation(scrollTop > threshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showNavigation && <Navigation />}
      <Hero title="New Look" subtitle="Fashion Retailer" />
      <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
        <div className="container min-h-screen pt-6 mx-auto px-4 animate-fade-in-fast">
          <div className="container mx-auto">
            <ColContent
              content1={
                <>
                  <h1 className="text-4xl font-bold">New Look</h1>
                  <p className="text-lg my-4">2021 - 2023 • Product Designer</p>
                  <p className="text-base text-gray-400">
                    Owning and delivering: optimised checkout, PDP and my account content hierarchy,
                    building corporate site, maintaining a consistent mobile app-web journey,
                    streamlining the returns portal and creating reusable design components within
                    design system.
                  </p>
                  <p className="text-base text-gray-400 my-4">
                    Tools: Content Square, Figma, Google Analytics, UserZoom, Monetate, Miro
                  </p>
                  <a href="newlook.com" target="_blank" className="underline">
                    newlook.com
                  </a>{" "}
                  •{" "}
                  <a href="https://www.newlookgroup.com/" target="_blank" className="underline">
                    newlookgroup.com
                  </a>{" "}
                  •{" "}
                  <a
                    href="https://apps.apple.com/gb/app/new-look-fashion-online/id466391488"
                    target="_blank"
                    className="underline"
                  >
                    App Store
                  </a>
                </>
              }
              content2={
                <>
                  <p className="mb-4">
                    A leading destination for feel-good fashion with a global presence of over 900
                    stores and 11 million website visitors, is dedicated to strategically delivering
                    seamless shopping journeys. With 85% of our loyal customer base in the UK and
                    the remaining 15% spanning the globe (Rest of the World, French, and German).
                  </p>
                  <p>
                    As a key contributor in a dynamic agile scrum environment in two squads, played
                    a pivotal role from sprint planning to sprint retros. Collaborated with users,
                    cross-functional teams and third parties to address and solve users and business
                    challenges; consistently iterating on design concepts guided by Double Diamond
                    process and created documentation for development handover.
                  </p>
                </>
              }
            />
            <img src="/projects/new-look.png" className="w-full py-10" />
            <Carousel />
            {/* <ColContent content1={content1} url="/projects/new-look.png" direction="reverse" /> */}
            My Post: {params.id}
          </div>
        </div>
      </div>
    </>
  );
}
