import { greet } from "../../src/index";

// Create a paragraph tag with our greeting and attach it to the document.
const greeting = document.createElement("p");
greeting.textContent = greet("Bob");
document.body.appendChild(greeting);
