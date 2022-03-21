import typescript from "@rollup/plugin-typescript";

/**
 * The configuration file used by Rollup to determine how to bundle our
 * library.
 * 
 * Note: This is used to bundle the library but not the `examples`. Since the 
 * examples are examples of applications the consume the library, they are 
 * built with Webpack.
 * 
 * https://rollupjs.org/guide/en/#big-list-of-options
 */
export default {
    // The bundle's entrypoint.
    // https://rollupjs.org/guide/en/#input
    input: "src/index.ts",
    // Options for the built output files.
    output: {
        // The directory to output the built files.
        // https://rollupjs.org/guide/en/#outputdir
        dir: "dist",
        // Specifies the format of the generated bundle.
        // https://rollupjs.org/guide/en/#outputformat
        format: "esm",
        // Generates a sourcemap.
        // https://rollupjs.org/guide/en/#outputsourcemap
        sourcemap: true,
    },
    // Plugins change the behavior of Rollup at key points in the bundling
    // process.
    // https://rollupjs.org/guide/en/#using-plugins
    plugins: [
        // Bundles our TypeScript.
        // https://www.npmjs.com/package/@rollup/plugin-typescript
        typescript(),
    ],
};
