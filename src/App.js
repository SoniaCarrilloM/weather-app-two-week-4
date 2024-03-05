import logo from "./logo.svg";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This project was coded by
          <a
            className="linkGit"
            href="https://github.com/SoniaCarrilloM"
            target="_blank"
            rel="noreferrer"
          >
            Sonia Carrillo
          </a>
          , open-sourced on
          <a
            className="linkRep"
            href="https://github.com/SoniaCarrilloM/weather-app-two-week-4"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          and website hosted
          <a
            className="linkNetlify"
            href="https:https://jocular-kringle-228367.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            on Netlify
          </a>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
<footer>
  This project was coded by
  <a
    className="linkGit"
    href="https://github.com/SoniaCarrilloM"
    target="_blank"
    rel="noreferrer"
  >
    Sonia Carrillo
  </a>
  , open-sourced on
  <a
    className="linkRep"
    href="https://github.com/SoniaCarrilloM/weather-app-two-week-4"
    target="_blank"
    rel="noreferrer"
  >
    GitHub
  </a>
  and website hosted
  <a
    className="linkNetlify"
    href="https:https://jocular-kringle-228367.netlify.app/"
    target="_blank"
    rel="noreferrer"
  >
    on Netlify
  </a>
</footer>;

export default App;
