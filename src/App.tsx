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

function DestinationsSection() {
  const destinations = [
    {
      title: "Bali, Indonesia",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      description:
        "Tropical paradise with stunning beaches and vibrant culture.",
    },
    {
      title: "Santorini, Greece",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
      description:
        "Famous for its whitewashed houses and breathtaking sunsets.",
    },
    {
      title: "Kyoto, Japan",
      image:
        "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80",
      description: "Historic temples, cherry blossoms, and tranquil gardens.",
    },
    {
      title: "Banff, Canada",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
      description:
        "Majestic mountains, turquoise lakes, and outdoor adventures.",
    },
    {
      title: "Cape Town, South Africa",
      image:
        "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80",
      description: "Iconic Table Mountain and beautiful coastal scenery.",
    },
    {
      title: "Rome, Italy",
      image:
        "https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=600&q=80",
      description: "Ancient ruins, world-class cuisine, and vibrant city life.",
    },
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-8 bg-white/90 flex flex-col items-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-indigo-900 mb-10 text-center tracking-tight">
        Destinations
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mb-10">
        {destinations.map((dest, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col h-full border border-gray-100 group"
          >
            <div className="relative h-48 sm:h-56 w-full overflow-hidden">
              <img
                src={dest.image}
                alt={dest.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-indigo-900 mb-2 group-hover:text-amber-500 transition-colors">
                {dest.title}
              </h3>
              <p className="text-gray-600 mb-4 flex-1">{dest.description}</p>
              <button className="mt-auto px-4 py-2 rounded-full bg-amber-400 text-indigo-900 font-bold shadow hover:bg-indigo-900 hover:text-white transition-all duration-200">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="px-8 py-3 rounded-full font-bold text-lg bg-gradient-to-r from-amber-400 via-pink-400 to-indigo-500 text-white shadow-lg transition-all duration-300 hover:from-white hover:to-white hover:text-indigo-600 hover:scale-105 border-none outline-none">
        Explore All Destinations
      </button>
    </section>
  );
}

function ActivitiesSection() {
  const activities = [
    {
      name: "Hiking",
      color: "from-green-400 to-green-700",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-6 0v-1m6 0V7a3 3 0 00-6 0v9"
          />
        </svg>
      ),
      description: "Explore scenic trails and breathtaking peaks.",
    },
    {
      name: "Desert",
      color: "from-yellow-400 to-yellow-700",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 21h18M4 17l4-4 4 4 4-4 4 4"
          />
        </svg>
      ),
      description: "Experience the magic of the dunes and starry nights.",
    },
    {
      name: "Mountains",
      color: "from-blue-400 to-blue-700",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 17l6-6 4 4 8-8"
          />
        </svg>
      ),
      description: "Conquer majestic summits and enjoy fresh air.",
    },
    {
      name: "Ocean",
      color: "from-cyan-400 to-cyan-700",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 20s1-2 5-2 5 2 9 2 5-2 5-2"
          />
        </svg>
      ),
      description: "Dive into crystal clear waters and marine life.",
    },
    {
      name: "Beach",
      color: "from-pink-400 to-pink-700",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 21h18M4 17l4-4 4 4 4-4 4 4"
          />
        </svg>
      ),
      description: "Relax on golden sands and soak up the sun.",
    },
    {
      name: "Relax",
      color: "from-purple-400 to-purple-700",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 15s1.5-2 4-2 4 2 4 2"
          />
        </svg>
      ),
      description: "Unwind and rejuvenate with peaceful escapes.",
    },
  ];

  // Infinite auto-scroll logic
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    let frame: number;
    const speed = 1; // px per frame
    let isHovered = false;

    const scrollStep = () => {
      if (!isHovered) {
        scrollContainer.scrollLeft += speed;
        // If reached end, reset to start for infinite loop
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      frame = requestAnimationFrame(scrollStep);
    };
    frame = requestAnimationFrame(scrollStep);

    // Pause on hover
    const onMouseEnter = () => (isHovered = true);
    const onMouseLeave = () => (isHovered = false);
    scrollContainer.addEventListener("mouseenter", onMouseEnter);
    scrollContainer.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(frame);
      scrollContainer.removeEventListener("mouseenter", onMouseEnter);
      scrollContainer.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  // Duplicate activities for seamless infinite scroll
  const activityList = [...activities, ...activities];

  return (
    <section className="relative w-full pt-20 pb-12 px-0 bg-gradient-to-b from-indigo-100 via-white to-indigo-950 overflow-hidden">
      {/* Decorative SVG backgrounds */}
      <svg
        className="absolute left-0 top-0 w-96 h-96 opacity-20 -z-10"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="200" fill="#a5b4fc" />
      </svg>
      <svg
        className="absolute right-0 bottom-0 w-96 h-96 opacity-10 -z-10"
        viewBox="0 0 400 400"
        fill="none"
      >
        <rect width="400" height="400" rx="200" fill="#fbbf24" />
      </svg>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-indigo-900 mb-12 text-center tracking-tight relative z-10">
        Activities
      </h2>
      <div
        ref={scrollRef}
        className="w-full overflow-x-scroll scrollbar-hide"
        style={{
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div
          className="flex gap-8 min-w-[1200px] py-2 px-8"
          style={{ width: "max-content" }}
        >
          {activityList.map((activity, idx) => (
            <div
              key={idx}
              className={`flex-shrink-0 w-64 sm:w-72 rounded-3xl shadow-xl bg-gradient-to-br ${activity.color} text-white relative group transition-transform duration-300 hover:scale-105`}
              style={{ minHeight: "320px" }}
            >
              <div className="absolute top-4 right-4 opacity-30 group-hover:opacity-50 transition-opacity">
                {activity.icon}
              </div>
              <div className="flex flex-col justify-end h-full p-8 z-10 relative">
                <div className="mb-6">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/20 mb-4 mx-auto">
                    {activity.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-center drop-shadow-lg">
                    {activity.name}
                  </h3>
                  <p className="text-white/90 text-center text-base">
                    {activity.description}
                  </p>
                </div>
                <button className="mt-auto px-5 py-2 rounded-full bg-white/90 text-indigo-900 font-bold shadow hover:bg-amber-400 hover:text-white transition-all duration-200 mx-auto">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Hide scrollbar for all browsers */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-indigo-950 text-white pt-12 pb-6 px-4 sm:px-8 mt-0 border-t border-indigo-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-0">
        {/* Branding and tagline */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <div className="flex items-center gap-2 mb-2">
            <img src="/vite.svg" alt="Wanderer Logo" className="h-8 w-8" />
            <span className="text-2xl font-bold tracking-wide">Wanderer</span>
          </div>
          <span className="text-sm text-indigo-200 max-w-xs text-center md:text-left">
            Explore the world with us. Your adventure starts here.
          </span>
        </div>
        {/* Navigation links */}
        <div className="flex flex-col sm:flex-row gap-6 md:gap-12 items-center md:items-start">
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-indigo-200 mb-1">
              Quick Links
            </span>
            <a href="#" className="hover:text-amber-400 transition">
              Home
            </a>
            <a href="#" className="hover:text-amber-400 transition">
              Destinations
            </a>
            <a href="#" className="hover:text-amber-400 transition">
              Activities
            </a>
            <a href="#" className="hover:text-amber-400 transition">
              About
            </a>
            <a href="#" className="hover:text-amber-400 transition">
              Contact
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-indigo-200 mb-1">
              Resources
            </span>
            <a href="#" className="hover:text-amber-400 transition">
              Blog
            </a>
            <a href="#" className="hover:text-amber-400 transition">
              Careers
            </a>
            <a href="#" className="hover:text-amber-400 transition">
              Support
            </a>
            <a href="#" className="hover:text-amber-400 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-amber-400 transition">
              Terms of Service
            </a>
          </div>
        </div>
        {/* Social icons */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <span className="font-semibold text-indigo-200 mb-1">Follow Us</span>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-amber-400 transition"
            >
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.46 5.92c-.8.36-1.66.6-2.56.71a4.48 4.48 0 0 0 1.97-2.48 8.93 8.93 0 0 1-2.83 1.08A4.48 4.48 0 0 0 16.11 4c-2.48 0-4.49 2.01-4.49 4.49 0 .35.04.7.11 1.03-3.73-.19-7.04-1.97-9.25-4.68a4.48 4.48 0 0 0-.61 2.26c0 1.56.8 2.94 2.01 3.75-.74-.02-1.44-.23-2.05-.57v.06c0 2.18 1.55 4 3.6 4.41-.38.1-.78.16-1.19.16-.29 0-.57-.03-.85-.08.57 1.77 2.23 3.06 4.2 3.1A8.98 8.98 0 0 1 2 19.54c-.29 0-.57-.02-.85-.05A12.7 12.7 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54.8-.58 1.5-1.3 2.05-2.12z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-amber-400 transition"
            >
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-amber-400 transition"
            >
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.13 4.602.388 3.635 1.355 2.668 2.322 2.41 3.495 2.352 4.772.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.058 1.277.316 2.45 1.283 3.417.967.967 2.14 1.225 3.417 1.283C8.332 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.277-.058 2.45-.316 3.417-1.283.967-.967 1.225-2.14 1.283-3.417.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.058-1.277-.316-2.45-1.283-3.417-.967-.967-2.14-1.225-3.417-1.283C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm7.2-11.406a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-amber-400 transition"
            >
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.845-1.563 3.043 0 3.604 2.004 3.604 4.609v5.587z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-indigo-900 pt-6 text-center text-sm text-indigo-300">
        &copy; {new Date().getFullYear()} Wanderer. All rights reserved.
      </div>
    </footer>
  );
}

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
      {/* Destinations Section */}
      <DestinationsSection />
      <ActivitiesSection />
      <Footer />
    </>
  );
}

export default App;
