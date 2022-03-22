const path = require("path");

/**
 * Returns the configuration file that Webpack should use for building the 
 * examples.
 */
module.exports = {
    // The entry point of each example.
    // https://webpack.js.org/configuration/entry-context/#entry
    entry: {
        "greeting": "./examples/greeting/index.ts",
    },
    // Defines how our exported JavaScript modules are transformed according 
    // to the rules used.
    // https://webpack.js.org/configuration/module/
    module: {
        rules: [
            // Tells Webpack to transform our TypeScript with `ts-loader`, 
            // ignoring the `node_modules` directory.
            // https://webpack.js.org/guides/typescript/
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    // Specifies the extensions that Webpack should resolve. This allows us to 
    // import modules without needing to add their extensions.
    // https://webpack.js.org/configuration/resolve/#root
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    // Tells Webpack where to put the bundled code. We have Webpack place it 
    // in the `examples/dist` directory. Each entry will have its own output 
    // in that directory.
    // https://webpack.js.org/guides/output-management/
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "examples", "dist"),
        filename: "[name].js",
    },
    // Tells Webpack to serve everything from our examples directory to 
    // localhost:3000.
    // https://webpack.js.org/guides/development/#using-webpack-dev-server
    devServer: {
        port: 3000,
        static: "./examples",
    },
};