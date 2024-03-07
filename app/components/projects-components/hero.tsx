interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero = ({ title, subtitle }: HeroProps) => {
  return (
    <div
      className="w-full bg-cover bg-top h-screen flex justify-center items-center flex-col bg-fixed"
      style={{ backgroundImage: "url(/projects/new-look.png)" }}
    >
      <h1 className="text-3xl text-center text-edge-outline md:text-7xl">{title}</h1>
      <h2 className="text-l text-center text-edge-outline md:text-2xl">{subtitle}</h2>
    </div>
  );
};

export default Hero;
