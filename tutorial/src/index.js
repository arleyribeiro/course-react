import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//Nested components, react tools
function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const author = "Old Farmer’s Almanac";
const Book = () => {
  const title =
    "The Old Farmer's Almanac 2022 Trade EdiThe Old Farmer's Almanac 2022 Trade";
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/51tpY0oLw3L._AC_SX184_.jpg"
        alt=""
      />
      <h1>{title}</h1>
      <h4 className="author">{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
