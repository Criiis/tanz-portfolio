interface IColContentProps {
  content1: string;
  content2?: string;
  url?: string;
}

const ColContent = ({ content1, content2, url }: IColContentProps) => (
  <div className="flex items-center w-full py-10">
    <div className="w-2/5 pr-6" dangerouslySetInnerHTML={{ __html: content1 }} />
    <div className="w-3/5 pl-6">
      {/* Second column content */}
      {url && <img src={url} alt="Image" className="w-full" />}
      {content2 && <div dangerouslySetInnerHTML={{ __html: content2 }} />}
    </div>
  </div>
);

export default ColContent;
