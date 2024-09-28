import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  FaHome,
  FaCode,
  FaEnvelope,
  FaLinkedin,
  FaGithubSquare,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinkClass =
    "cursor-pointer text-slate-100 px-2 py-1 rounded-lg flex items-center space-x-2 hover:bg-slate-100 hover:text-black hover:scale-110 transform transition duration-200";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 px-6 py-3 transition-all duration-300 ${
        isScrolled ? "bg-defaultBgDark shadow-white" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-slate-100 text-2xl font-bold flex items-center gap-2">
          <img src="/assets/logo.png" width={42} />
        </div>

        {/* Desktop nav */}
        <ul className="hidden lg:flex space-x-4 text-slate-100">
          <li>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className={navLinkClass}
            >
              <FaHome className="text-primaryColor" />
              <span>Home</span>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className={navLinkClass}
            >
              <FaCode className="text-primaryColor" />
              <span>Projects</span>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className={navLinkClass}
            >
              <FaEnvelope className="text-primaryColor" />
              <span>Contact</span>
            </ScrollLink>
          </li>
        </ul>

        <div className="flex gap-2 items-center">
          <a
            href="https://www.linkedin.com/in/latania-reece/"
            target="_blank"
            className="block text-secondaryColor hover:text-secondaryColorDark"
          >
            <FaLinkedin size="25" />
          </a>
          <a
            href="https://github.com/LataniaReece"
            target="_blank"
            className="block text-secondaryColor hover:text-secondaryColorDark"
          >
            <FaGithubSquare size="25" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-primaryColor">
            {!menuOpen && <FaBars size={25} />}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          onClick={closeMenu}
          className={`fixed inset-0 bg-black z-10 transition-opacity duration-500 ${
            menuOpen ? "opacity-50" : "opacity-0"
          }`}
        />
      )}

      {/* Mobile sliding drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-defaultBgDark text-slate-100 z-20 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out lg:hidden`}
      >
        <div className="flex flex-col p-6 space-y-6">
          <button
            onClick={toggleMenu}
            className="self-end text-primaryColor focus:outline-none"
          >
            <FaTimes size={25} />
          </button>

          <ul className="flex flex-col space-y-6 text-slate-100">
            <li>
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className={navLinkClass}
                onClick={toggleMenu}
              >
                <FaHome className="text-primaryColor" />
                <span>Home</span>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                className={navLinkClass}
                onClick={toggleMenu}
              >
                <FaCode className="text-primaryColor" />
                <span>Projects</span>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className={navLinkClass}
                onClick={toggleMenu}
              >
                <FaEnvelope className="text-primaryColor" />
                <span>Contact</span>
              </ScrollLink>
            </li>
          </ul>

          {/* Social Icons - mobile sliding drawer */}
          <div className="flex gap-2 items-center">
            <a
              href="https://www.linkedin.com/in/latania-reece/"
              target="_blank"
              className="block text-secondaryColor hover:text-secondaryColorDark"
            >
              <FaLinkedin size="25" />
            </a>
            <a
              href="https://github.com/LataniaReece"
              target="_blank"
              className="block text-secondaryColor hover:text-secondaryColorDark"
            >
              <FaGithubSquare size="25" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
