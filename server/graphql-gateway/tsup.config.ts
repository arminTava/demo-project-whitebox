import { defineConfig } from "tsup";

const tsupConfig = defineConfig({
  entry: ["src/main.ts"],
  format: ["cjs"],
  dts: true,
  external: [],
  splitting: false,
  minify: false,
  clean: true,
  tsconfig: "tsconfig.json",
});

// eslint-disable-next-line import/no-default-export
export default tsupConfig;
