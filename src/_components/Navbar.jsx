import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full bg-gradient-to-b from-black to-blue-950 text-white flex justify-center items-center flex-col lg:gap-y-14 text-center lg:p-10">
      <Link to="/">
        <h1 className="font-bold text-6xl uppercase tracking-wide font-wildworld">
          Alacrity.
        </h1>
      </Link>
      <div className="flex items-center lg:gap-x-24 font-metana">
        <Link to="/features">
          <h4 className="font-semibold text-lg uppercase hover:underline hover:underline-offset-4">
            Features
          </h4>
        </Link>
        <Link to="/about">
          <h4 className="font-semibold text-lg uppercase hover:underline hover:underline-offset-4">
            About
          </h4>
        </Link>
        <Link to="/portfolio">
          <h4 className="font-semibold text-lg uppercase hover:underline hover:underline-offset-4">
            Portfolio
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
