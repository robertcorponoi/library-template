# Library Template 

An opinionated template for creating JavaScript libraries.

**Table of Contents**

- [Dependencies](#dependencies)
- [Visual Studio Code Extensions](#visual-studio-code-extensions)
- [Concepts](#concepts)
    - [Bundling](#bundling)
    - [Testing](#testing)
    - [Examples](#examples)
- [Scripts](#scripts)
- [GitHub Actions](#github-actions)
- [Keeping Up To Date With Template Changes](#keeping-up-to-date-with-template-changes)
- [License](#license)

## Dependencies 

The following dependencies are used to power the template and the developer experience.

**Dev Dependencies**

- [Rollup](https://rollupjs.org/guide/en/) to bundle the library.
- [TypeScript](https://www.typescriptlang.org/) for type safety and a more predictable development experience.
- [Prettier](https://prettier.io/) to enforce a consistent code style throughout the library.
- [ESLint](https://eslint.org/) to find problems in the code before deploying.
- [Jest](https://jestjs.io/) as the test runner.
- [Webpack](https://webpack.js.org/) to build and run our examples in the browser.

## Visual Studio Code Extensions

The follow extensions for code formatting and linting should be recommended to you if you open the project in Visual Studio Code:

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) to automatically format files according to the Prettier configuration.
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) to automatically highlight issues in the code according to the ESLint configuration.

## Concepts

The following concepts highlight the most important parts of the template.

### Bundling

At the core of the template is bundling. [Rollup](https://rollupjs.org/guide/en/) is used to compile the source code into a bundle that is then imported by applications using the library.

The commands to bundle the application are `npm run bundle` and `npm run bundle:watch`. Check out the [scripts](#scripts) section for more details about these scripts. When you run these commands to generate the bundle, the resulting bundle is output to the `dist` directory.

### Testing

All of the tests for the library are located in the `test` directory. All of the tests for the library are written in TypeScript and are run with [Jest](https://jestjs.io/).

To create a new test, either create a new file under the `test` directory or add to an existing file. See the Jest documentation for how to write tests.

### Examples

The examples are small samples of the library that run in the browser with the help of [Webpack](https://webpack.js.org/). Using Webpack for the examples enables us to write the examples in TypeScript, build them, and then run them using the [Webpack dev server](https://webpack.js.org/configuration/dev-server/).

Below is a step-by-step process of creating an example:

1. Create a directory within the `examples` directory for your example.

2. Create an `index.html` file for your example. Use the existing one in the `greeting` example as a template. What you want to note here is the `script` tag, you'll what to name this what you expect to name your script in the `webpack.config.js` output.

3. Create an `index.ts` file for your example. In this script you'll have the logic for importing and using your library to create the example.

4. In the `webpack.config.js` file, create an entry in the `entry` section. The name of this entry should be what you named the script in the second step.

5. Run `npm run examples:build` to build all of the examples and generate the JavaScript from the TypeScript source.

Now you can run `npm run examples:run` to run all of the examples. This will start the Webpack dev server at `localhost:3000` so you'll have to navigate to the example page. For example, for the `greeting` example, you would navigate to `localhost:3000/examples/greeting` to see that example run.

## Scripts

The following scripts are available and can be used in the form of `npm run [script_name]`:

- `bundle` - Creates a bundle of the library using [Rollup](https://rollupjs.org/guide/en/) and outputs it to the `dist` directory.

- `bundle:watch` - Like the `build` command, but it also watches for changes to the `src` directory and re-bundles automatically.

- `generate-types` - Uses [tsc](https://www.typescriptlang.org/docs/handbook/compiler-options.html) to generate the types and output them to the `dist` directory.

- `examples:build` - Uses [Webpack](https://webpack.js.org/) to build the TypeScript source for all of the examples and outputs the resulting JavaScript to the `./examples/dist` directory, which should then be used in the script tags of each individual example. See the [examples](#examples) section for more details about this.

- `examples:run` - Uses the [Webpack dev server](https://webpack.js.org/configuration/dev-server/) to run the examples in the browser. This dev server will be started at the root of the examples directory so you'll need to navigate to each individual example. See the [examples](#examples) section for more details about this.

- `format:check` - Runs [Prettier](https://prettier.io/) and checks for formatting issues but it doesn't fix anything.

- `format:write` - Runs [Prettier](https://prettier.io/) and fixes any formatting issues according to the `.prettierrc.js` file.

- `lint` - Runs [ESLint](https://eslint.org/) to check for issues with the code.

- `test` - Runs the [Jest](https://jestjs.io/) tests.

## GitHub Actions

The workflow at `.github/workflows/build.yml` will run whenever a pull request is made.

This action will install the dependencies and build the template.

More actions are planned to be added for deployment of the template.

## Keeping Up To Date With Template Changes

This template will be updated when dependencies need updating, new packages are added, and new or better concepts are found. To keep up with changes you might want from the template:

1. Add the template repository as a remote:

```sh
git remote add template git@github.com:robertcorponoi/rollup-template.git
```

2. Fetch the changes:

```sh
git fetch --all
```

3. Merge the changes from the main branch of the template repository:

```sh
git merge template/main
```

## License

[MIT](./LICENSE)
