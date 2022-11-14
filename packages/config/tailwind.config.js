module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    "../../packages/ui/components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],

  theme: {
    fontFamily: {
      sans: [
        "Inter var, sans-serif",
        { fontFeatureSettings: '"cv11", "ss01"' },
      ],
    },
    fontWeight:{
      thin: "100",
    }
  },
  plugins: [],
};
