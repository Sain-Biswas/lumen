import type { Config } from "prettier";

const config: Config = {
  trailingComma: "none",
  quoteProps: "as-needed",
  experimentalTernaries: true,
  singleAttributePerLine: true,
  htmlWhitespaceSensitivity: "css",
  experimentalOperatorPosition: "start",

  plugins: ["prettier-plugin-tailwindcss"],
  tailwindStylesheet: "src/styles.css",
  tailwindFunctions: ["cn", "cva"]
};

export default config;
