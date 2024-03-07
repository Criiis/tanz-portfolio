import { ReactNode } from "react";

interface IColContentProps {
  content1: ReactNode;
  content2?: ReactNode;
  url?: string;
  direction?: "straight" | "reverse";
}

const ColContent = ({ content1, content2, url, direction = "straight" }: IColContentProps) => {
  const directionClass = direction === "straight" ? "md:flex-row" : "md:flex-row-reverse";

  // i need the space between the columns to be the same as the space between the columns in the hero

  return (
    <div
      className={`md:flex md:items-center md:justify-between w-full py-5 gap-8 ${directionClass}`}
    >
      <div className="md:w-2/5">{content1}</div>
      <div className="pt-5 md:w-2/5 md:pt-0">
        {/* Second column content */}
        {url && <img src={url} alt="Image" className="w-full" />}
        {content2 && content2}
      </div>
    </div>
  );
};

export default ColContent;
