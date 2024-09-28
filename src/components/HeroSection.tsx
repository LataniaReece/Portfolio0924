const HeroSection = () => {
  const nameLetterAnimationDelay = 0.05;

  const renderLetters = (name: string) => {
    if (!name) return;
    return name.split("").map((letter, index) => (
      <span
        key={index}
        className="inline-block fade-name-in opacity-0"
        style={{ animationDelay: `${index * nameLetterAnimationDelay}s` }}
      >
        {letter === " " ? "\u00A0" : letter}
      </span>
    ));
  };

  return (
    <section className="bg-defaultBg bg-cover bg-center min-h-screen lg:min-h-[500px] lg:h-auto text-slate-100 relative overflow-hidden">
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
          <p className="text-[5.5vw] md:text-[2rem] font-bold leading-[1] pt-2 mb-4 bg-gradient-to-tr from-secondaryColorLight via-secondaryColor to-secondaryColorDark bg-clip-text text-transparent uppercase opacity-0 fade-tag-in">
            Software Developer
          </p>
          <p className="text-[4vw] md:text-[1rem] lg:text-lg font-light text-slate-200 w-full lg:w-7/12 tracking-wider opacity-0 fade-tag-in">
            I bring digital designs to life with precision and creativity.
            Currently, I'm employed as a software developer at Nexamp, where I
            focus on building intuitive, customer-facing websites that enhance
            the user experience.
          </p>
          <button className="mt-8 text-md sm:text-lg uppercase tracking-wide lg:tracking-widest font-bold text-white bg-gradient-to-r from-primaryColor to-secondaryColor px-6 lg:px-8 py-3 lg:py-3 rounded-xl transition-all duration-500 bg-[length:150%_150%] bg-left hover:bg-right hover:shadow-xl transform hover:scale-105  active:scale-100 focus:outline-none focus:scale-100 shadow-white">
            Contact me
          </button>
        </div>
      </div>

      {/* Mobile bottom shapes */}
      <div className="absolute inset-0 justify-center items-center lg:hidden z-0">
        <div className="w-4/5 h-2/5 transform rotate-6 bg-gradient-to-r from-primaryColor via-primaryColorLight to-defaultBg opacity-5 border-2 border-slate-50 absolute -left-15 bottom-10" />
        <div className="w-3/5 h-1/3 transform -rotate-6 bg-gradient-to-r from-secondaryColorLight to-secondaryColorDark opacity-5 border-2 border-slate-100 absolute -left-5 bottom-5" />
      </div>

      {/* Desktop right shapes */}
      <div className="absolute top-0 right-0 h-full w-1/2 justify-end items-center hidden lg:flex">
        <div className="w-2/3 h-2/3 transform rotate-12 bg-gradient-to-r from-primaryColor via-primaryColorLight to-defaultBg opacity-50 border-2 border-slate-50" />
        <div className="w-1/3 h-1/3 transform -rotate-12 absolute bottom-16 right-0 bg-gradient-to-r from-secondaryColorLight to-secondaryColorDark opacity-60 border-2 border-slate-100" />
      </div>
    </section>
  );
};

export default HeroSection;
