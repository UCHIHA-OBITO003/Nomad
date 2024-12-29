import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="starry-night-bg py-6 relative">
      <div className="container mx-auto flex justify-between items-center relative z-10">
        <span className="text-4xl text-white font-bold tracking-tight">
          <Link to="/">NomadNights.com</Link>
        </span>
        <span className="flex space-x-6">
          <Link
            to="/sign-in"
            className="text-yellow-400 px-3 font-bold hover:bg-transparent hover:text-yellow-500 transition duration-300 ease-in-out"
          >
            Sign in
          </Link>
        </span>
      </div>

      {/* Moon */}
      <div className="moon absolute top-10 right-10"></div>

      {/* Asteroids */}
      <div className="asteroid absolute top-20 left-15"></div>
    </div>
  );
};

export default Header;
