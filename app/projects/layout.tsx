import { Navigation } from "../components/nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container min-h-screen pt-[80px] mx-auto px-4 animate-fade-in-fast">
        <div className="container flex items-center justify-center px-4 mx-auto">
          <div className="grid w-full grid-cols-1 gap-8 mx-auto sm:grid-cols-3">{children}</div>
        </div>
      </div>
    </div>
  );
}
