import { projects } from "@/public/variables";
import { Navigation } from "../components/nav";
import Particles from "../components/particles";
import { Card } from "../components/card";
import { Link } from "lucide-react";

export default function Page() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container min-h-screen pt-[80px] mx-auto px-4 animate-fade-in-fast">
        <div className="container flex items-center justify-center px-4 mx-auto">
          <div className="grid w-full grid-cols-1 gap-8 mx-auto sm:grid-cols-3">
            {projects.map(({ company, description, image }) => (
              <Card key={company}>
                <div
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
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Particles className="absolute inset-0 -z-10" quantity={100} />
    </div>
  );
}
