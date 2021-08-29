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

const Book = () => {
  const title = "title";
  return (
    <article className="book">
      <Image></Image>
      <Title></Title>
      <Author></Author>
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/51tpY0oLw3L._AC_SX184_.jpg"
    alt=""
  />
);

const Author = () => <h4 className="author">Old Farmer’s Almanac</h4>;
const Title = () => (
  <h1>
    The Old Farmer's Almanac 2022 Trade EdiThe Old Farmer's Almanac 2022 Trade
  </h1>
);
ReactDOM.render(<BookList />, document.getElementById("root"));
