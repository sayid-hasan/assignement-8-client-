import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <h2 className="md:mt-24 my-12 md:mb-16  text-center text-4xl font-bold">
        Books
      </h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
        {books.map((book, idx) => (
          <Book key={idx} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
