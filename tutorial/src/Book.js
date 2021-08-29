import React from "react";

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
      <div className="buttons">
        <button type="button" onClick={clickHandler}>
          reference example
        </button>
        <button type="button" onClick={() => complexExampleHandler(author)}>
          more complex example
        </button>
        <button type="button" onClick={(event) => eventHandler(event)}>
          event handler
        </button>
      </div>
    </article>
  );
};
export default Book;
