import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const books = [
  {
    id: 1,
    author: "Old Farmer’s Almanac",
    title:
      "The Old Farmer's Almanac 2022 Trade EdiThe Old Farmer's Almanac 2022 Trade",
    img: "https://images-na.ssl-images-amazon.com/images/I/51tpY0oLw3L._AC_SX184_.jpg",
  },
  {
    id: 2,
    author: "1984 (Clássicos da literatura mundial)",
    title: "George Orwell (Author), Karla Lima (Translater)",
    img: "https://m.media-amazon.com/images/I/51enL1+QZfL.jpg",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4 className="author">{props.author}</h4>
      {props.children}
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
