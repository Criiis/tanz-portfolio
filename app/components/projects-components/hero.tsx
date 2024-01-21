const Hero = () => {
  return (
    <div
      className="w-full bg-cover bg-top h-screen flex justify-center items-center flex-col bg-fixed"
      style={{ backgroundImage: "url(/projects/new-look.png)" }}
    >
      <h1 className="text-3xl text-center text-edge-outline md:text-7xl">Lorem Impson</h1>
      <h2 className="text-l text-center text-edge-outline md:text-2xl">Lorem ipsum dolor</h2>
    </div>
  );
};

export default Hero;
