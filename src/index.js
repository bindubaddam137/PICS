import React from "react";
import ReactDOm from "react-dom/client";
import App from "./App";

const el = document.getElementById("root");
const root = ReactDOm.createRoot(el);

root.render(<App />);
