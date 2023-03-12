import React, { useState } from "react";

function Search({ onSearch, onSelect }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSearch = async () => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`
    );
    const data = await response.json();
    setBooks(data.items);
  };

  const handleSelect = (book) => {
    console.log("selected a book");
    console.log(book.volumeInfo);
  };

  const handleAddBook = () => {
    onSearch("");
    setBooks([]);
    setSelectedBook(null);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for a book"
      />
      <button onClick={handleSearch}>Search</button>
      {books.length > 0 && (
        <select
          value={selectedBook}
          onChange={(e) => handleSelect(JSON.parse(e.target.value))}
        >
          <option value={null}>Select a book</option>
          {books.map((book) => (
            <option key={book.id} value={JSON.stringify(book)}>
              {book.volumeInfo.title} - {book.volumeInfo.authors[0]}
            </option>
          ))}
        </select>
      )}
      {selectedBook && <button onClick={handleAddBook}>Add to List</button>}
    </div>
  );
}

export default Search;
