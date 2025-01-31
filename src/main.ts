import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Import App.tsx
import "./index.css"; // Optional: Import global styles

// Using React.createElement instead of JSX
const rootElement = document.getElementById("root") as HTMLElement;
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    React.createElement(React.StrictMode, {}, React.createElement(App))
  );
} else {
  console.error("Root element not found");
}
