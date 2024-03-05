import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project is created by{" "}
          <a
            href="https://github.com/SoniaCarrilloM"
            target="_blank"
            rel="noreferrer"
          >
            Sonia Carrillo{" "}
          </a>
          and is{" "}
          <a
            href="https://github.com/SoniaCarrilloM/weather-app-two-week-4"
            target="_blank"
            rel="noreferrer"
          >
            open sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
