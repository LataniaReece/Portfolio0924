import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { SCROLL_DURATION } from "../utils/constants";
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
    "cursor-pointer rounded-full px-4 py-2 flex items-center space-x-2 text-sm font-medium text-slate-200 transition duration-200 hover:bg-white/10 hover:text-white";

  return (
    <nav className="fixed top-0 left-0 w-full z-40 px-4 md:px-6 py-4 transition-all duration-300">
      <div
        className={`nav-container rounded-full px-4 md:px-6 py-3 flex justify-between items-center transition-all duration-300 ${
          isScrolled
            ? "soft-panel"
            : "bg-[rgba(24,21,22,0.45)] border border-white/5 backdrop-blur-md"
        }`}
      >
        {/* Logo */}
        <ScrollLink
          to="home"
          smooth={true}
          duration={SCROLL_DURATION}
          className="text-slate-100 text-2xl font-bold flex items-center gap-3 hover:cursor-pointer"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/8 ring-1 ring-white/10">
            <img src="/assets/logo.png" width={36} alt="Latania Reece logo" />
          </span>
        </ScrollLink>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center space-x-2 text-slate-100">
          <li>
            <ScrollLink
              to="home"
              smooth={true}
              duration={SCROLL_DURATION}
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
              duration={SCROLL_DURATION}
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
              duration={SCROLL_DURATION}
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
            rel="noopener noreferrer"
            className="block rounded-full border border-white/10 bg-white/5 p-2 text-primaryColorLight transition hover:border-primaryColor/40 hover:bg-primaryColor/10 hover:text-white"
          >
            <FaLinkedin size="20" />
          </a>
          <a
            href="https://github.com/LataniaReece"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-full border border-white/10 bg-white/5 p-2 text-primaryColorLight transition hover:border-primaryColor/40 hover:bg-primaryColor/10 hover:text-white"
          >
            <FaGithubSquare size="20" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="rounded-full border border-white/10 bg-white/5 p-2 text-primaryColor"
          >
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
        className={`fixed top-0 left-0 h-full w-64 bg-[#1f1b1d] text-slate-100 z-20 transform ${
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
                duration={SCROLL_DURATION}
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
                duration={SCROLL_DURATION}
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
                duration={SCROLL_DURATION}
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
              rel="noopener noreferrer"
              className="block text-primaryColorLight hover:text-white"
            >
              <FaLinkedin size="25" />
            </a>
            <a
              href="https://github.com/LataniaReece"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-primaryColorLight hover:text-white"
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
