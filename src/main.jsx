import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// 1. Iegūt elementu no index.html
const elementNoHTML = document.getElementById("root");

// 2. Parasto elementu pārvērš par React sakni
const sakne = ReactDOM.createRoot(elementNoHTML);

// 3. Uz ekrāna parāda pirmo React komponenti!
sakne.render(<App />);
