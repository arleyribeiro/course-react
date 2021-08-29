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
    author: "George Orwell (Author), Karla Lima (Translater)",
    title: "1984 (Clássicos da literatura mundial)",
    img: "https://m.media-amazon.com/images/I/51enL1+QZfL.jpg",
  },
  {
    id: 3,
    author: "George Orwell (Author), Karla Lima (Translater)",
    title: "A revolução dos bichos",
    img: "https://m.media-amazon.com/images/I/51vQYE2SWiL.jpg",
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
  const { img, title, author } = props;
  console.log(props);
  const clickHandler = () => {
    alert("hello word");
  };
  const complexExampleHandler = (author) => {
    console.log(author);
  };

  const eventHandler = (event) => {
    console.log(event);
  };

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4 className="author">{author}</h4>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      <button type="button" onClick={() => complexExampleHandler(author)}>
        more complex example
      </button>
      <button type="button" onClick={(event) => eventHandler(event)}>
        event handler
      </button>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
