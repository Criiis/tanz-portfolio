"use client";
import { navigation } from "@/public/variables";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useMemo, useRef, useState } from "react";

export const Navigation: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);
  const pathname = usePathname();
  const nav = useMemo(() => navigation.filter((item) => item.href !== pathname), [pathname]);
  const backNav = useMemo(() => {
    if (pathname?.startsWith("/projects/")) {
      return "/projects";
    }
    return "/";
  }, [pathname]);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
          isIntersecting ? "bg-zinc-900/0 border-transparent" : "bg-zinc-900/500  border-zinc-800 "
        }`}
      >
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex justify-between gap-8">
            {nav.map(({ name, href, external }) => (
              <Link
                key={href}
                href={href}
                target={external ? "_blank" : undefined}
                className="duration-200 text-zinc-400 hover:text-zinc-100"
              >
                {name}
              </Link>
            ))}
          </div>

          <Link href={backNav} className="duration-200 text-zinc-300 hover:text-zinc-100">
            <ArrowLeft className="w-6 h-6 " />
          </Link>
        </div>
      </div>
    </header>
  );
};
