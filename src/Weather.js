import Axios from "axios";
import React from "react";
import App from "./App";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.main} is ${response.data.main.temp} C`
    );
  }

  let apiKey = "3a94f3778290bfeee61278505dbbe51d";
  let apiUrl = `https://api.openwathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  Axios.get(apiUrl).then(handleResponse);
  return <h2> Hello from Weather</h2>;
}
