import { element } from "prop-types";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";

// function Greeting() {
//   return <h1>Greeting</h1>;
// }

// const Greeting = () => {
//   return React.createElement("h1", {}, "Hello world");
// };

// JSX Rules
// return single element
// div / section /article or Fragment
// user camelCase for html attribute
// classeName instead of class
// close every element
// formatting
function Greeting() {
  return (
    <div className="greeting">
      <h3>Hello people</h3>
      <ul>
        <li>
          <h1>Greeting</h1>
        </li>
      </ul>
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
