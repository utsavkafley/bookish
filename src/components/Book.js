import React from "react";

function Book({ book }) {
  return (
    <div>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Publication year: {book.publication_year}</p>
      <p>ISBN: {book.ISBN}</p>
      <p>Price: ${book.price}</p>
      <p>Number of pages: {book.num_pages}</p>
    </div>
  );
}

export default Book;
