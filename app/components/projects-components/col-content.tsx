interface IColContentProps {
  content1: string;
  content2?: string;
  url?: string;
  direction?: "straight" | "reverse";
}

const ColContent = ({ content1, content2, url, direction = "straight" }: IColContentProps) => {
  const directionClass = direction === "straight" ? "md:flex-row" : "md:flex-row-reverse";

  // i need the space between the columns to be the same as the space between the columns in the hero

  return (
    <div className={`md:flex md:items-center w-full py-5 gap-8 ${directionClass}`}>
      <div className="md:w-2/5" dangerouslySetInnerHTML={{ __html: content1 }} />
      <div className="pt-5 md:w-3/5 md:pt-0">
        {/* Second column content */}
        {url && <img src={url} alt="Image" className="w-full" />}
        {content2 && <div dangerouslySetInnerHTML={{ __html: content2 }} />}
      </div>
    </div>
  );
};

export default ColContent;
