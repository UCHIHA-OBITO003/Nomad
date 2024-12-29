const Footer = () => {
  return (
    <div className="starry-night-bg py-6 relative overflow-hidden">
      {/* Starry background effect */}
      <div className="absolute inset-0 starry-night-bg"></div>

      {/* Footer Content */}
      <div className="container mx-auto relative flex flex-col md:flex-row justify-between items-center gap-4 z-10">
        {/* Branding */}
        <span className="text-3xl text-white font-bold tracking-tight cursor-pointer hover:underline text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:animate-pulse">
          NomadNights.com
        </span>

        {/* Links */}
        <span className="text-white font-bold tracking-tight flex flex-col md:flex-row gap-4">
          <p className="cursor-pointer hover:underline text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:animate-pulse">
            Privacy Policy
          </p>
          <p className="cursor-pointer hover:underline text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:animate-pulse">
            Terms of Service
          </p>
        </span>
      </div>

      {/* Asteroids */}
      <div className="asteroid absolute bottom-16 left-10"></div>
    </div>
  );
};

export default Footer;
