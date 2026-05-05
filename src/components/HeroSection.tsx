import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { SCROLL_DURATION } from "../utils/constants";

const HeroSection = () => {
  const nameLetterAnimationDelay = 0.04;
  const quickHighlights = [
    "4+ years building production systems",
    "Serving 150k+ users",
    "React, JavaScript, Python",
  ];

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
      className="section-shell min-h-screen lg:min-h-[780px] text-slate-100 relative overflow-hidden pt-28"
    >
      <div className="container relative z-10 flex min-h-[calc(100vh-7rem)] items-center py-12 lg:py-20">
        <div className="grid w-full gap-12 xl:grid-cols-[minmax(0,1.1fr)_380px] xl:items-center">
          <div>
            <motion.p
              className="warm-pill mb-6 inline-flex max-w-full rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] sm:text-[0.78rem]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Software engineer crafting high-quality, user-facing products
            </motion.p>
            <h1
              className="font-display text-[3.8rem] leading-[0.95] text-primaryColorLight sm:text-[5rem] lg:text-[6rem] xl:text-[6.8rem]"
              aria-label="Latania Reece"
            >
              <span>{renderLetters("Latania Reece")}</span>
            </h1>
            <motion.p
              className="mt-4 text-sm font-semibold uppercase tracking-[0.35em] text-primaryColor sm:text-base"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Software Engineer
            </motion.p>
            <motion.p
              className="mt-6 max-w-3xl text-lg leading-8 text-slate-200/90 md:text-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7 }}
            >
              Focused on building high-quality, user-facing products. At Nexamp,
              I build customer-facing systems with a focus on performance,
              usability, and reliability. My personal projects reflect that same
              commitment to quality and craft, driven by curiosity and a desire
              to keep growing as an engineer.
            </motion.p>
            <motion.div
              className="mt-6 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.15, duration: 0.5 }}
            >
              {quickHighlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                >
                  {highlight}
                </span>
              ))}
            </motion.div>
            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -120 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3, duration: 0.4 }}
              >
                <Link
                  to="contact"
                  smooth={true}
                  duration={SCROLL_DURATION}
                  className="inline-flex rounded-full bg-primaryColor px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#241e20] transition hover:bg-primaryColorLight"
                >
                  Contact me
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.38, duration: 0.4 }}
              >
                <Link
                  to="projects"
                  smooth={true}
                  duration={SCROLL_DURATION}
                  className="inline-flex rounded-full border border-white/12 bg-white/5 px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-100 transition hover:bg-white/10"
                >
                  View projects
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <motion.aside
            aria-hidden="true"
            className="relative hidden min-h-[520px] overflow-hidden rounded-[36px] xl:block"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <div className="soft-panel absolute inset-0 rounded-[36px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_16%,rgba(255,183,173,0.11),transparent_24%),radial-gradient(circle_at_86%_76%,rgba(106,181,154,0.07),transparent_22%),linear-gradient(145deg,rgba(255,255,255,0.032),rgba(255,255,255,0.01))]" />
            <div className="absolute inset-y-10 left-10 w-px bg-gradient-to-b from-transparent via-white/12 to-transparent" />
            <div className="absolute left-16 top-40 h-2.5 w-2.5 rounded-full bg-primaryColor/75 shadow-[0_0_18px_rgba(245,144,132,0.35)]" />
            <div className="absolute left-[4.5rem] top-[10.9rem] h-px w-16 bg-gradient-to-r from-primaryColor/40 to-transparent" />
            <div className="absolute bottom-20 left-24 h-[70px] w-[56px] rounded-[20px] border border-white/12 bg-white/[0.012]" />
            <svg
              className="absolute inset-0 h-full w-full opacity-20"
              viewBox="0 0 380 520"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 118C58 98 108 102 142 132C168 156 176 194 164 226"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <path
                d="M8 356C50 324 112 322 156 350C186 370 202 400 202 432"
                stroke="rgba(255,255,255,0.14)"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <path
                d="M250 62C298 74 336 106 352 146C360 166 362 190 356 212"
                stroke="rgba(255,255,255,0.14)"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <path
                d="M272 392C316 388 348 410 366 448"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
            <svg
              className="absolute inset-0 h-full w-full opacity-65"
              viewBox="0 0 380 520"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="laptopGlow"
                  x1="110"
                  y1="120"
                  x2="316"
                  y2="342"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#ffffff" stopOpacity="0.42" />
                  <stop offset="1" stopColor="#ffffff" stopOpacity="0.11" />
                </linearGradient>
                <linearGradient
                  id="screenGlow"
                  x1="128"
                  y1="150"
                  x2="282"
                  y2="276"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#f59084" stopOpacity="0.16" />
                  <stop offset="1" stopColor="#6ab59a" stopOpacity="0.08" />
                </linearGradient>
              </defs>
              <circle
                cx="144"
                cy="245"
                r="11"
                fill="#f59084"
                fillOpacity="0.2"
              />
              <circle
                cx="248"
                cy="288"
                r="11"
                fill="#6ab59a"
                fillOpacity="0.16"
              />
              <g transform="translate(-30 18)">
                <rect
                  x="126"
                  y="110"
                  width="194"
                  height="142"
                  rx="22"
                  stroke="url(#laptopGlow)"
                  strokeWidth="1.6"
                />
                <rect
                  x="139"
                  y="124"
                  width="168"
                  height="114"
                  rx="12"
                  fill="url(#screenGlow)"
                  stroke="#ffffff"
                  strokeOpacity="0.15"
                  strokeWidth="1"
                />
                <path
                  d="M114 266H326C335 266 342 272 344 280L349 295C352 304 345 312 335 312H105C95 312 88 304 91 295L96 280C98 272 105 266 114 266Z"
                  stroke="#ffffff"
                  strokeOpacity="0.28"
                  strokeWidth="1.6"
                />
                <path
                  d="M171 292H271"
                  stroke="#ffffff"
                  strokeOpacity="0.2"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
                <path
                  d="M149 157H231"
                  stroke="#ffffff"
                  strokeOpacity="0.19"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                <path
                  d="M149 177H263"
                  stroke="#ffffff"
                  strokeOpacity="0.13"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                <path
                  d="M149 197H213"
                  stroke="#ffffff"
                  strokeOpacity="0.13"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                <path
                  d="M149 209H225"
                  stroke="#ffffff"
                  strokeOpacity="0.13"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                <path
                  d="M149 221H202"
                  stroke="#ffffff"
                  strokeOpacity="0.13"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                <path
                  d="M172 145V222"
                  stroke="#ffffff"
                  strokeOpacity="0.14"
                  strokeWidth="1"
                />
                <path
                  d="M126 248C112 261 102 282 98 304"
                  stroke="#f59084"
                  strokeOpacity="0.34"
                  strokeWidth="1.2"
                />
                <path
                  d="M307 250C320 264 328 281 335 302"
                  stroke="#6ab59a"
                  strokeOpacity="0.3"
                  strokeWidth="1.2"
                />
                <circle cx="126" cy="248" r="4.5" fill="#f59084" />
                <circle cx="307" cy="250" r="4.5" fill="#6ab59a" />
                <rect
                  x="148"
                  y="276"
                  width="14"
                  height="6"
                  rx="2"
                  stroke="#ffffff"
                  strokeOpacity="0.32"
                  strokeWidth="1"
                />
                <rect
                  x="166"
                  y="276"
                  width="14"
                  height="6"
                  rx="2"
                  stroke="#ffffff"
                  strokeOpacity="0.32"
                  strokeWidth="1"
                />
                <rect
                  x="184"
                  y="276"
                  width="14"
                  height="6"
                  rx="2"
                  stroke="#ffffff"
                  strokeOpacity="0.32"
                  strokeWidth="1"
                />
                <rect
                  x="202"
                  y="276"
                  width="14"
                  height="6"
                  rx="2"
                  stroke="#ffffff"
                  strokeOpacity="0.32"
                  strokeWidth="1"
                />
                <rect
                  x="220"
                  y="276"
                  width="14"
                  height="6"
                  rx="2"
                  stroke="#ffffff"
                  strokeOpacity="0.32"
                  strokeWidth="1"
                />
                <rect
                  x="238"
                  y="276"
                  width="14"
                  height="6"
                  rx="2"
                  stroke="#ffffff"
                  strokeOpacity="0.32"
                  strokeWidth="1"
                />
                <rect
                  x="256"
                  y="276"
                  width="14"
                  height="6"
                  rx="2"
                  stroke="#ffffff"
                  strokeOpacity="0.32"
                  strokeWidth="1"
                />
                <rect
                  x="274"
                  y="276"
                  width="14"
                  height="6"
                  rx="2"
                  stroke="#ffffff"
                  strokeOpacity="0.32"
                  strokeWidth="1"
                />
                <rect
                  x="148"
                  y="286"
                  width="14"
                  height="6"
                  rx="2"
                  stroke="#ffffff"
                  strokeOpacity="0.32"
                  strokeWidth="1"
                />
                <rect
                  x="166"
                  y="286"
                  width="14"
                  height="6"
                  rx="2"
                  stroke="#ffffff"
                  strokeOpacity="0.32"
                  strokeWidth="1"
                />
                <rect
                  x="184"
                  y="286"
                  width="14"
                  height="6"
                  rx="2"
                  stroke="#ffffff"
                  strokeOpacity="0.32"
                  strokeWidth="1"
                />
                <rect
                  x="202"
                  y="286"
                  width="14"
                  height="6"
                  rx="2"
                  stroke="#ffffff"
                  strokeOpacity="0.32"
                  strokeWidth="1"
                />
                <rect
                  x="220"
                  y="286"
                  width="14"
                  height="6"
                  rx="2"
                  stroke="#ffffff"
                  strokeOpacity="0.32"
                  strokeWidth="1"
                />
                <rect
                  x="238"
                  y="286"
                  width="14"
                  height="6"
                  rx="2"
                  stroke="#ffffff"
                  strokeOpacity="0.32"
                  strokeWidth="1"
                />
                <rect
                  x="256"
                  y="286"
                  width="14"
                  height="6"
                  rx="2"
                  stroke="#ffffff"
                  strokeOpacity="0.32"
                  strokeWidth="1"
                />
                <rect
                  x="274"
                  y="286"
                  width="14"
                  height="6"
                  rx="2"
                  stroke="#ffffff"
                  strokeOpacity="0.32"
                  strokeWidth="1"
                />
                <rect
                  x="192"
                  y="298"
                  width="60"
                  height="16"
                  rx="3"
                  stroke="#ffffff"
                  strokeOpacity="0.32"
                  strokeWidth="1"
                />
              </g>
              <g
                transform="translate(58 112)"
                stroke="#ffffff"
                strokeOpacity="0.22"
                strokeWidth="1"
              >
                <rect x="0" y="0" width="36" height="12" rx="3" />
                <rect x="0" y="16" width="36" height="12" rx="3" />
                <rect x="0" y="32" width="36" height="12" rx="3" />
                <circle
                  cx="8"
                  cy="6"
                  r="1.5"
                  fill="#ffffff"
                  fillOpacity="0.45"
                  stroke="none"
                />
                <circle
                  cx="8"
                  cy="22"
                  r="1.5"
                  fill="#ffffff"
                  fillOpacity="0.45"
                  stroke="none"
                />
                <circle
                  cx="8"
                  cy="38"
                  r="1.5"
                  fill="#ffffff"
                  fillOpacity="0.45"
                  stroke="none"
                />
              </g>
              <g
                transform="translate(246 362)"
                stroke="#ffffff"
                strokeOpacity="0.18"
                strokeWidth="1"
              >
                <rect x="18" y="16" width="24" height="24" rx="3" />
                <path d="M30 0V16M0 28H18M42 28H62M30 40V56M8 8L18 16M52 8L42 16M8 48L18 40M52 48L42 40" />
                <circle cx="30" cy="0" r="3" fill="#171618" />
                <circle cx="0" cy="28" r="3" fill="#171618" />
                <circle cx="62" cy="28" r="3" fill="#171618" />
                <circle cx="30" cy="56" r="3" fill="#171618" />
                <circle cx="8" cy="8" r="3" fill="#171618" />
                <circle cx="52" cy="8" r="3" fill="#171618" />
                <circle cx="8" cy="48" r="3" fill="#171618" />
                <circle cx="52" cy="48" r="3" fill="#171618" />
              </g>
            </svg>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
