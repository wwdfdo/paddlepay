module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroImage: "url('/src/images/cta-bg.jpg')",
        slidebg: "url('/src/images/slide-image-bg.png')",
        roadmapbg: "url('/src/images/roadmapbg1.png')",
      },
      animation: {
        // Bounces for a total of 5 seconds
        "bounce-short": "bounce 1s ease-in-out 2",
      },
    },
  },
  plugins: [],
};
