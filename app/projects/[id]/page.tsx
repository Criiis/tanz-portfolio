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
      <Hero />
      <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
        <div className="container min-h-screen pt-6 mx-auto px-4 animate-fade-in-fast">
          <div className="container mx-auto">
            <ColContent content1={content1} content2={content1} />
            <img src="/projects/new-look.png" className="w-full py-10" />
            <Carousel />
            <ColContent content1={content1} url="/projects/new-look.png" direction="reverse" />
            My Post: {params.id}
          </div>
        </div>
      </div>
    </>
  );
}

const content1 = `<p>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore culpa nihil architecto
repudiandae sequi? Ea voluptas et repudiandae suscipit. Facere labore sapiente enim nostrum
nisi et facilis voluptates perferendis sed!
</p>
<p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptatem quidem, aut
accusantium delectus sunt maiores adipisci nihil numquam, dignissimos obcaecati dicta
corrupti pariatur officiis at recusandae magnam corporis nesciunt.
</p>`;
