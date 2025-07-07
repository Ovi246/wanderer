module.exports = {
  theme: {
    extend: {
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "loop-slide": "slide 9s linear infinite",
      },
    },
  },
};
