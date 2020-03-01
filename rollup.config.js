import babel from "rollup-plugin-babel";
import nodeResolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import { dependencies, peerDependencies } from "./package.json";

// Get all packages we are using
const deps = Object.keys({
  ...dependencies,
  ...peerDependencies
});

// ES Module config
 const moduleConfig = {
  input: "src/index.js",
  external: id => deps.some(d => d === id || d.startsWith(d + "/")),
  plugins: [babel()],
  output: [
    {
      file: "lib/index.es.js",
      format: "esm",
      sourcemap: true
    },
    {
      file: "lib/index.js",
      format: "cjs",
      sourcemap: true
    }
  ]
};

// UMD config
const umdConfig = {
  input: "src/index.js",
  plugins: [nodeResolve(), babel()],
  output: {
    file: "dist/random.js",
    name: "random",
    globals: [],
    format: "umd",
    sourcemap: true
  },
  external: []
}

const umdMinConfig =   {
  ...umdConfig,
  plugins: [...umdConfig.plugins, terser()],
  output: {
    ...umdConfig.output,
    file: "dist/random.min.js"
  }
}

export default [
  moduleConfig,
  umdConfig,
  umdMinConfig
];
