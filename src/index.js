import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const books = [
  {
    "id": 1,
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "publication_year": 1960,
    "ISBN": "978-0446310789",
    "price": 10.99,
    "num_pages": 281,
  },
  {
    "id": 2,
    "title": "1984",
    "author": "George Orwell",
    "publication_year": 1949,
    "ISBN": "978-0451524935",
    "price": 9.99,
    "num_pages": 328,
  },
];

root.render(
  <React.StrictMode>
    <App books={books} />
  </React.StrictMode>
);
