import { motion } from "framer-motion";
import { Link } from "react-scroll";

const HeroSection = () => {
  const nameLetterAnimationDelay = 0.04;

  const renderLetters = (name: string) => {
    if (!name) return null;
    return name.split("").map((letter, index) => (
      <motion.span
        key={index}
        className="inline-block"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * nameLetterAnimationDelay, duration: 0.3 }}
      >
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ));
  };

  return (
    <section
      id="home"
      className="bg-defaultBg bg-cover bg-center min-h-screen lg:min-h-[500px] lg:h-auto text-slate-100 relative overflow-hidden"
    >
      <div className="container flex items-center min-h-screen lg:pt-16 h-auto relative z-10">
        <div>
          <h1
            className="text-[10vw] sm:text-[4rem] lg:text-[5rem] text-primaryColor font-bold leading-[1] tracking-wider"
            aria-label="Latania Reece"
            style={{ textShadow: "1px 1px 2px white" }}
          >
            <p className="text-primaryColor">
              <span>{renderLetters("Latania Reece")}</span>
            </p>
          </h1>
          <motion.p
            className="text-[5.5vw] md:text-[2rem] font-bold leading-[1] pt-2 mb-4 bg-gradient-to-tr from-secondaryColorLight via-secondaryColor to-secondaryColorDark bg-clip-text text-transparent uppercase"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Software Developer
          </motion.p>
          <motion.p
            className="text-[4vw] md:text-[1rem] lg:text-lg font-light text-slate-200 w-full lg:w-7/12 tracking-wider"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7 }}
          >
            I bring digital designs to life with precision and creativity.
            Currently, I'm employed as a software developer at Nexamp, where I
            focus on building intuitive, customer-facing websites that enhance
            the user experience.
          </motion.p>
          <Link to="contact" smooth={true} duration={500}>
            <motion.button
              className="mt-8 text-md sm:text-lg uppercase tracking-wide lg:tracking-widest font-bold text-white bg-gradient-to-r from-primaryColor to-secondaryColor px-6 lg:px-8 py-3 lg:py-3 rounded-xl duration-500 bg-[length:150%_150%] bg-left hover:!bg-right transform hover:!scale-110 active:!scale-100 focus:!outline-none focus:!scale-100 shadow-white"
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, duration: 0.4 }}
            >
              Contact me
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Mobile bottom shapes */}
      <motion.div
        className="absolute inset-0 justify-center items-center lg:hidden z-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <div className="w-4/5 h-2/5 transform rotate-6 bg-gradient-to-r from-primaryColor to-defaultBg opacity-5 border-2 border-slate-50 absolute -left-15 bottom-10" />
        <div className="w-3/5 h-1/3 transform -rotate-6 bg-gradient-to-r from-secondaryColorLight to-secondaryColorDark opacity-5 border-2 border-slate-100 absolute -left-5 bottom-5" />
      </motion.div>

      {/* Desktop right shapes */}
      <div className="absolute top-0 right-0 h-full w-1/2 justify-end items-center hidden lg:flex">
        <div className="w-2/3 h-2/3 transform rotate-12 bg-gradient-to-r from-primaryColor to-defaultBg opacity-50 border-2 border-slate-50" />
        <div className="w-1/3 h-1/3 transform -rotate-12 absolute bottom-16 right-0 bg-gradient-to-r from-secondaryColorLight to-secondaryColorDark opacity-60 border-2 border-slate-100" />
      </div>
    </section>
  );
};

export default HeroSection;
