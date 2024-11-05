import { Github, Instagram, LinkedinIcon, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col lg:gap-y-3 lg:pt-20 lg:pb-2 bg-gradient-to-b from-black to-blue-950 text-white text-center">
      <div className="flex items-center lg:gap-x-6">
        <Link to="/">
          <Github className="w-4 h-4" />
        </Link>
        <Link to="/">
          <LinkedinIcon className="w-4 h-4" />
        </Link>
        <Link to="/">
          <Instagram className="w-4 h-4" />
        </Link>
        <Link to="/">
          <Twitter className="w-4 h-4" />
        </Link>
      </div>
      <h4 className="text-[10px] font-metana uppercase">
        Saad Sayyed ~ Developer
      </h4>
    </div>
  );
};

export default Footer;
