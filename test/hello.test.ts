import { greet } from "../src/index";

/**
 * A simple test to make sure that the output of the `greet` command is what 
 * we expect when we pass "Bob" as an argument.
 */
test("should say Hello, Bob!", () => {
    expect(greet("Bob")).toBe("Hello, Bob!");
});