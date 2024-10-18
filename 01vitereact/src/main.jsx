// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

const anotherUser = "chaiiii!";

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "__blank" },
  "click me to visit google",
  anotherUser
);

ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
