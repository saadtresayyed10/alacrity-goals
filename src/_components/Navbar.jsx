import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="w-full bg-gradient-to-b from-black to-blue-950 text-white flex justify-center items-center flex-col lg:gap-y-14 gap-y-10 text-center lg:p-10 p-7">
      <Link to="/">
        <motion.h1
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
          className="font-bold lg:text-6xl text-4xl uppercase tracking-wide font-wildworld"
        >
          Alacrity.
        </motion.h1>
      </Link>
      <div className="flex items-center lg:gap-x-24 gap-x-8 font-metana">
        <Link to="/features">
          <motion.h4
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "backOut", delay: 0.6 }}
            className="font-semibold lg:text-lg text-sm uppercase hover:underline hover:underline-offset-4"
          >
            Features
          </motion.h4>
        </Link>
        <Link to="/about">
          <motion.h4
            initial={{ y: 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "backOut", delay: 0.6 }}
            className="font-semibold lg:text-lg text-sm uppercase hover:underline hover:underline-offset-4"
          >
            About
          </motion.h4>
        </Link>
        <Link to="/portfolio">
          <motion.h4
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "backOut", delay: 0.6 }}
            className="font-semibold lg:text-lg text-sm uppercase hover:underline hover:underline-offset-4"
          >
            Portfolio
          </motion.h4>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
