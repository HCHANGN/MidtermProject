import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

let elem = React.createElement("h3",{},"Hello React");



ReactDOM.render(<App/>, document.querySelector("#root"));