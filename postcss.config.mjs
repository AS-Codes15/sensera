export default {
  plugins: {
    "@tailwindcss/postcss": {},   // ✅ use this instead of "tailwindcss"
    autoprefixer: {},
    "postcss-preset-env": {
      stage: 1,
      features: {
        "color-oklab": true
      }
    }
  },
};


