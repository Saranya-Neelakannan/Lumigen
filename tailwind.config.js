// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        softWhite: "#F9FAFC",
        panel: "#FFFFFF",
        textDark: "#0b1526",
        accentFrom: "#6366F1", // violet-blue
        accentTo: "#06B6D4", // teal/cyan
        softMuted: "#E6EEF6",
      },
      boxShadow: {
        neu: "6px 6px 16px rgba(209,213,219,0.8), -6px -6px 16px rgba(255,255,255,0.9)",
        "neu-sm":
          "4px 4px 10px rgba(224,228,236,0.7), -4px -4px 10px rgba(255,255,255,0.9)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Space Grotesk", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "ping-slow": "ping 3s linear infinite",
      },
    },
  },
  plugins: [],
};
