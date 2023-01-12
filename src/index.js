import "./App.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Weather from "./weather";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="WeatherApp">
      <h1> Weather App </h1>
      <Weather />
      
    </div>
  </StrictMode>
);


