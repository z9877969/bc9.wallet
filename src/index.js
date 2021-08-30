import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";

ReactDOM.render(<App />, document.getElementById("root"));

const fn = (a) => {
  console.log("A");
  const aN = a * 5;
  return (b) => {
    const bN = b + aN;
    return (c) => console.log(bN + c);
  };
};

fn(1)(2)()
