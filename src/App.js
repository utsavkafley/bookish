import "./App.css";
import React from "react";
import { useState } from "react";
import Book from "./components/Book";
import Search from "./components/Search";

const App = (props) => {
  const [books, setBooks] = useState(props.books);
  const [newBook, setNewBook] = useState("New Book");

  const addBooks = (event) => {
    event.preventDefault();
    const bookObject = {
      title: newBook,
      id: books.length + 1,
    };

    setBooks(books.concat(bookObject));
    setNewBook("");
  };

  const handleBookChange = (event) => {
    console.log(event.target.value);
    setNewBook(event.target.value);
  };

  const handleSearch = async (query) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );
      const data = await response.json();
      setBooks(data.items);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelect = (book) => {
    console.log(book);
  };

  return (
    <div>
      <Search onSearch={handleSearch} onSelect={handleSelect} />
      <h1>Books</h1>
      <ul>
        {books.map((book) => {
          return (
            <li key={book.id}>
              <Book book={book} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
