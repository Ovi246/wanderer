import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AnimatePresence, motion } from "framer-motion";

const data = [
  {
    title: "Indonesia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, itaque consequuntur! Ad amet dicta reprehenderit quaerat, recusandae similique, nobis reiciendis error quasi repudiandae temporibus nesciunt natus nemo alias quae quidem?",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    background:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80",
    rating: 3,
  },
  {
    title: "Kerala",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque maiores hic ea sapiente, quisquam tempora nemo consequatur exercitationem facere tenetur deleniti blanditiis minus assumenda quis numquam sint eius dolorum quo!",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    background:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1500&q=80",
    rating: 2,
  },
  {
    title: "Las Vegas",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque maiores hic ea sapiente, quisquam tempora nemo consequatur exercitationem facere tenetur deleniti blanditiis minus assumenda quis numquam sint eius dolorum quo!",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80",
    background:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1500&q=80",
    rating: 2,
  },
  {
    title: "Malaysia",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque maiores hic ea sapiente, quisquam tempora nemo consequatur exercitationem facere tenetur deleniti blanditiis minus assumenda quis numquam sint eius dolorum quo!",
    image:
      "https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=600&q=80",
    background:
      "https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=1500&q=80",
    rating: 2,
  },
  {
    title: "Thailand",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque maiores hic ea sapiente, quisquam tempora nemo consequatur exercitationem facere tenetur deleniti blanditiis minus assumenda quis numquam sint eius dolorum quo!",
    image:
      "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80",
    background:
      "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1500&q=80",
    rating: 2,
  },
  {
    title: "Canada",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque maiores hic ea sapiente, quisquam tempora nemo consequatur exercitationem facere tenetur deleniti blanditiis minus assumenda quis numquam sint eius dolorum quo!",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
    background:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1500&q=80",
    rating: 2,
  },
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const adjustedIndex = (currentSlide - 1 + data.length) % data.length;
  const [currentBg, setCurrentBg] = useState(data[adjustedIndex].background);
  const [prevBg, setPrevBg] = useState<string | null>(null);
  const [isFading, setIsFading] = useState(false);
  const sliderRef = useRef<Slider | null>(null);
  const [navOpen, setNavOpen] = useState(false); // for hamburger menu

  useEffect(() => {
    const newBg = data[adjustedIndex].background;
    if (newBg !== currentBg) {
      // Preload the new background image
      const img = new window.Image();
      img.src = newBg;
      img.onload = () => {
        setPrevBg(currentBg); // set previous to current
        setCurrentBg(newBg); // set new as current
        setIsFading(true);
      };
    }
    // eslint-disable-next-line
  }, [currentSlide]);

  const handleFadeComplete = () => {
    setPrevBg(null); // remove previous after fade
    setIsFading(false);
  };

  // Helper to render stars
  const renderStars = (count: number) => {
    return (
      <span className="ml-2 text-amber-400 align-middle">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="text-base">
            {i < count ? "★" : "☆"}
          </span>
        ))}
      </span>
    );
  };

  const sliderSettings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    className: "custom-slick-slider",
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    arrows: false,
    appendDots: (dots: React.ReactNode) => (
      <div className="absolute right-4 bottom-2 flex flex-col items-end">
        <ul className="flex gap-2 mb-1">{dots}</ul>
        <span className="text-white/80 text-xs font-semibold">
          {String(currentSlide + 1).padStart(2, "0")} /{" "}
          {String(data.length).padStart(2, "0")}
        </span>
      </div>
    ),
    customPaging: () => <div className="w-2 h-2 rounded-full bg-white/60" />,
    responsive: [
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* Header with logo, nav, and auth */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur flex justify-between items-center px-4 sm:px-8 py-3 sm:py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/vite.svg" alt="Wanderer Logo" className="h-8 w-8" />
          <span className="text-xl sm:text-2xl font-bold text-white tracking-wide">
            Wanderer
          </span>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 lg:gap-8">
          <a
            href="#"
            className="text-white/90 hover:text-amber-400 font-semibold transition"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white/90 hover:text-amber-400 font-semibold transition"
          >
            Destinations
          </a>
          <a
            href="#"
            className="text-white/90 hover:text-amber-400 font-semibold transition"
          >
            Activities
          </a>
          <a
            href="#"
            className="text-white/90 hover:text-amber-400 font-semibold transition"
          >
            About
          </a>
          <a
            href="#"
            className="text-white/90 hover:text-amber-400 font-semibold transition"
          >
            Contact
          </a>
        </nav>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
          onClick={() => setNavOpen((v) => !v)}
          aria-label="Open navigation menu"
        >
          <span className="block w-6 h-0.5 bg-white mb-1" />
          <span className="block w-6 h-0.5 bg-white mb-1" />
          <span className="block w-6 h-0.5 bg-white" />
        </button>
        {/* Auth */}
        <div className="hidden sm:flex gap-2 sm:gap-4">
          <button className="px-3 sm:px-4 py-1 rounded bg-amber-400 text-indigo-900 font-bold hover:bg-white transition text-sm sm:text-base">
            Login
          </button>
          <button className="px-3 sm:px-4 py-1 rounded bg-white/20 text-white font-bold border border-white/30 hover:bg-white/40 transition text-sm sm:text-base">
            Sign Up
          </button>
        </div>
      </header>
      {/* Mobile nav drawer */}
      {navOpen && (
        <div className="fixed inset-0 z-40 bg-black/70 flex flex-col items-end md:hidden">
          <div className="w-2/3 max-w-xs bg-white shadow-lg h-full p-6 flex flex-col gap-6 animate-slideInRight">
            <button
              className="self-end mb-4 text-2xl text-indigo-900"
              onClick={() => setNavOpen(false)}
              aria-label="Close navigation menu"
            >
              ×
            </button>
            <a
              href="#"
              className="text-indigo-900 font-bold text-lg"
              onClick={() => setNavOpen(false)}
            >
              Home
            </a>
            <a
              href="#"
              className="text-indigo-900 font-bold text-lg"
              onClick={() => setNavOpen(false)}
            >
              Destinations
            </a>
            <a
              href="#"
              className="text-indigo-900 font-bold text-lg"
              onClick={() => setNavOpen(false)}
            >
              Activities
            </a>
            <a
              href="#"
              className="text-indigo-900 font-bold text-lg"
              onClick={() => setNavOpen(false)}
            >
              About
            </a>
            <a
              href="#"
              className="text-indigo-900 font-bold text-lg"
              onClick={() => setNavOpen(false)}
            >
              Contact
            </a>
            <div className="flex gap-2 mt-4">
              <button className="px-4 py-1 rounded bg-amber-400 text-indigo-900 font-bold hover:bg-white transition text-base">
                Login
              </button>
              <button className="px-4 py-1 rounded bg-white/20 text-indigo-900 font-bold border border-indigo-200 hover:bg-indigo-100 transition text-base">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="relative h-screen w-screen overflow-hidden pt-16 sm:pt-20">
        {/* Robust crossfade: always render both backgrounds during transition */}
        {prevBg && isFading && (
          <motion.div
            key={prevBg}
            className="absolute inset-0"
            style={{
              backgroundImage: `url('${prevBg}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: -4,
            }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            onAnimationComplete={handleFadeComplete}
          />
        )}
        {/* Current background always rendered, fades in if transitioning */}
        <motion.div
          key={currentBg}
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${currentBg}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -3,
          }}
          initial={{ opacity: isFading ? 0 : 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
        {/* Vignette overlay for cinematic effect */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0) 60%, rgba(0,0,0,0.7) 100%)",
          }}
        />
        {/* Persistent overlay for readability, always above both images */}
        <div className="absolute inset-0 bg-black/40 z-[-1] pointer-events-none" />
        {/* Main content starts here */}
        <div className="flex flex-col md:flex-row w-full gap-y-2 md:gap-y-8 md:gap-x-12 items-center md:justify-between md:h-full overflow-hidden px-2 sm:px-8 mx-auto">
          {/* vertical index numbers with animated SVG circles and fixed line - hide on mobile */}
          <div className="hidden md:flex ml-2 sm:ml-4 w-8 sm:w-10 relative h-1/2 flex-col items-center justify-center mx-auto">
            {/* Fixed vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-400 -translate-x-1/2 z-0" />

            {/* Dots (fixed, evenly spaced) */}
            <div className="flex flex-col justify-between h-full w-full z-10 ">
              {data.map((_, idx) => (
                <div
                  key={idx}
                  className="flex justify-center items-center"
                  style={{ height: `calc(100% / ${data.length})` }}
                >
                  <svg width="16" height="16">
                    <circle cx="8" cy="8" r="6" fill="#fff" opacity="0.6" />
                  </svg>
                </div>
              ))}
            </div>

            {/* Animated active indicator (absolutely positioned, overlays the correct dot) */}
            <div
              className="absolute left-1/2 transition-all duration-300"
              style={{
                top: `calc(${currentSlide} * (100% / ${data.length}) + (100% / ${data.length}) / 2 - 20px)`,
                transform: "translateX(-50%)",
                zIndex: 20,
              }}
            >
              <svg width="40" height="40">
                <circle
                  cx="20"
                  cy="20"
                  r="18"
                  fill="#fbbf24"
                  className="drop-shadow-lg"
                />
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="20"
                  fontWeight="bold"
                  fill="#fff"
                >
                  {currentSlide + 1}
                </text>
              </svg>
            </div>
          </div>
          {/* informations (titles, description, cta buttons) // image containers */}
          <div className="flex-1 w-full transition-all ease-in-out duration-100 flex flex-col items-center md:items-start">
            {/* Slot machine effect for title */}
            <div className="relative h-[4.5rem] sm:h-[8rem] md:h-[10rem] lg:h-[12rem] overflow-hidden flex items-center w-full">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentSlide}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute w-full text-3xl sm:text-6xl md:text-7xl lg:text-9xl uppercase text-white font-bold mb-2 text-center md:text-left"
                >
                  {data[adjustedIndex]?.title}
                </motion.h1>
              </AnimatePresence>
            </div>
            {/* Slot machine effect for description */}
            <div className="relative h-[4.5rem] sm:h-[5.5rem] md:h-[6.5rem] lg:h-[7.5rem] overflow-hidden flex items-center w-full">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentSlide + "-desc"}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
                  className="absolute w-full my-4 sm:my-6 text-white/90 text-base sm:text-lg leading-relaxed drop-shadow-md text-center md:text-left"
                >
                  {data[adjustedIndex]?.description}
                </motion.p>
              </AnimatePresence>
            </div>
            <button className="mt-2 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-bold text-base sm:text-lg bg-gradient-to-r from-amber-400 via-pink-400 to-indigo-500 text-white shadow-lg transition-all duration-300 hover:from-white hover:to-white hover:text-indigo-600 hover:scale-105 border-none outline-none">
              Explore
            </button>
          </div>
          <div className="relative w-full md:w-[50%] max-w-full flex items-center justify-center z-50 mt-2 md:mt-0">
            <div className="overflow-visible w-full relative">
              <Slider ref={sliderRef} {...sliderSettings}>
                {data.map((item, idx) => {
                  const isCurrent = idx === currentSlide;
                  return (
                    <div
                      key={idx}
                      className="flex flex-col items-center justify-start h-full"
                    >
                      {/* Title and rating inside each card, above the image */}
                      <div className="w-full sm:w-72 flex flex-col items-center mb-2">
                        <span className="text-white text-base sm:text-lg font-bold text-center drop-shadow-md">
                          {item.title}
                          {renderStars(item.rating)}
                        </span>
                      </div>
                      <div className="flex items-center justify-center w-full">
                        <img
                          src={item.image}
                          alt={item.title}
                          className={
                            (isCurrent
                              ? "w-full sm:w-72 h-60 sm:h-100 scale-100 z-10 object-cover flex-shrink-0 rounded-lg shadow-2xl border-4 border-amber-400"
                              : "w-full sm:w-72 h-60 sm:h-100 scale-90 object-cover flex-shrink-0 rounded-lg shadow-lg opacity-80") +
                            " transition-transform duration-300 "
                          }
                        />
                      </div>
                    </div>
                  );
                })}
              </Slider>
              {/* Custom arrows absolutely positioned below the current (center) image */}
              <div className="absolute left-1/2 -bottom-16 sm:left-5 sm:-bottom-20 mt-2 flex justify-center sm:justify-start gap-4 -translate-x-1/2 sm:translate-x-0 w-full sm:w-auto">
                <button
                  onClick={() => sliderRef.current?.slickPrev()}
                  className="bg-white/80 hover:bg-amber-400 text-black font-bold py-2 px-3 rounded-full shadow text-lg sm:text-base"
                  aria-label="Previous"
                >
                  {"<"}
                </button>
                <button
                  onClick={() => sliderRef.current?.slickNext()}
                  className="bg-white/80 hover:bg-amber-400 text-black font-bold py-2 px-3 rounded-full shadow text-lg sm:text-base"
                  aria-label="Next"
                >
                  {">"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
