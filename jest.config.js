/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    // Used as the base for Jest's configuration. A preset should point to a 
    // npm module that has a `jest-preset` file at the root. Since we write 
    // our tests in TypeScript, we use `ts-jest` as our preset.
    // https://jestjs.io/docs/configuration#preset-string
    preset: "ts-jest",
    // The test environment that will be used for testing. Since we're 
    // developing a web app, we use `jsdom` as our test environment.
    // https://jestjs.io/docs/configuration#testenvironment-string
    testEnvironment: "jsdom",
};