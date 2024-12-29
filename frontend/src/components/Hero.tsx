const Hero = () => {
    return (
      <div className="starry-night-bg pb-16 flex flex-col items-center text-white">
        <div className="container mx-auto text-center py-12">
          <h2 className="text-4xl font-bold tracking-wide">
            Where Every Night is an Adventure!
          </h2>
          <p className="text-2xl mt-4 text-gray-300">
            Find Your Next Stay...
          </p>

        </div>
  
        {/* Optional Asteroids or Other Elements */}
        <div className="asteroid absolute top-1/4 left-1/3"></div>
        <div className="asteroid absolute top-2/3 right-1/3"></div>
      </div>
    );
  };
  
  export default Hero;
  