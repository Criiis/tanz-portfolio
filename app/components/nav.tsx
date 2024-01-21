"use client";
import { navigation } from "@/public/variables";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";

export const Navigation: React.FC = () => {
  const pathname = usePathname();
  const nav = useMemo(() => navigation.filter((item) => item.href !== pathname), [pathname]);
  const backNav = useMemo(() => {
    if (pathname?.startsWith("/projects/")) {
      return "/projects";
    }
    return "/";
  }, [pathname]);

  return (
    <header>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur opacity-0 duration-200 border-transparent animate-fade-in-super-fast`}
      >
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex justify-between gap-4">
            {nav.map(({ name, href, external }) => (
              <Link
                key={href}
                href={href}
                target={external ? "_blank" : undefined}
                className="duration-200 text-white hover:text-zinc-300"
              >
                {name}
              </Link>
            ))}
          </div>

          <Link href={backNav} className="duration-200 text-white hover:text-zinc-300">
            <ArrowLeft className="w-6 h-6 " />
          </Link>
        </div>
      </div>
    </header>
  );
};
