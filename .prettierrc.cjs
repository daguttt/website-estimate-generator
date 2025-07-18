/** @type {import("prettier").Config} */
module.exports = {
  semi: true,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: "es5",
  tailwindStylesheet: "./src/styles.css",
  tailwindFunctions: ["cx", "tw"],
  plugins: ["prettier-plugin-tailwindcss"],
};
