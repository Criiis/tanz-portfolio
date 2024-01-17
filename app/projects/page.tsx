import { projects } from "@/public/variables";
import { Navigation } from "../components/nav";
import Particles from "../components/particles";
import { Card } from "../components/card";
import Link from "next/link";
import replaceSpaces from "@/util/replace-spaces";

export default function Page() {
  return (
    <>
      {projects.map(({ company, description, image }) => (
        <Card key={company}>
          <Link
            href={`/projects/${replaceSpaces(company)}`}
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
      <Particles className="absolute inset-0 -z-10" quantity={100} />
    </>
  );
}
