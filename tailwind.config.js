module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        title: ["Syne Mono", "monospace"],
        body: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
