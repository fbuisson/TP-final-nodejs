import { useEffect, useState } from "react";
import { IBook } from "../types/IBook";
import BookList from "../components/books/BookList";

import { useNavigate } from "react-router-dom";

const BookPage = () => {
  const [books, setBooks] = useState<IBook[]>([]);

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/");
  };

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBooks(data.data);
      })
      .catch((err) => {
        console.error("Error fetching books:", err);
      });
  }, []);

  return (
    <div>
      <h1>Book List</h1>
      {books ? <BookList books={books} /> : <p>Loading...</p>}
      <div className="flex items-center justify-center min-h-screen">
        <button
          onClick={handleRedirect}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Back to main page
        </button>
      </div>
    </div>
  );
};

export default BookPage;
