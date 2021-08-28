import { element } from "prop-types";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";

// JSX Rules
// return single element
// div / section /article or Fragment
// user camelCase for html attribute
// classeName instead of class
// close every element
// formatting

// function Greeting() {
//   return <h1>Greeting</h1>;
// }

// const Greeting = () => {
//   return React.createElement("h1", {}, "Hello world");
// };

function Greeting() {
  return (
    <div>
      <h1>Greeting</h1>
    </div>
  );
}

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "hello world")
//   );
// };

ReactDOM.render(<Greeting />, document.getElementById("root"));
