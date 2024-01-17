"use client";
import { useEffect, useState } from "react";
import { Navigation } from "@/app/components/nav";
import Hero from "@/app/components/projects-components/hero";

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
      <Hero />
      <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
        {showNavigation && <Navigation />}
        <div className="container min-h-screen pt-[80px] mx-auto px-4 animate-fade-in-fast">
          <div className="container flex items-center justify-center px-4 mx-auto">
            <div className="grid w-full grid-cols-1 gap-8 mx-auto sm:grid-cols-3">
              My Post: {params.id}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
