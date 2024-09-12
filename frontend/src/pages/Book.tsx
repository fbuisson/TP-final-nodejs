import { useEffect, useState } from "react";
import { IBook } from "../types/IBook";
import BookList from "../components/books/BookList";
import BackMainBtn from "../components/BackMainBtn";
import { IAuthor } from "../types/IAuthor";

const BookPage = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [authors, setAuthors] = useState<IAuthor[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBooks(data.data);
      })
      .catch((err) => {
        console.error("Erreur : pas de livre trouvé", err);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/authors")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAuthors(data.data);
      })
      .catch((err) => {
        console.error("Erreur : pas d'auteur trouvé", err);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-start py-10 bg-gray-100 min-h-screen">
      <h1 className="text-center text-2xl font-bold mb-6">Book List</h1>
      {books.length > 0 && authors.length > 0 ? (
        <div className="w-full max-w-4xl">
          <BookList books={books} authors={authors} />
        </div>
      ) : (
        <p>📚 Sorry, no books or authors found 📚</p>
      )}
      <BackMainBtn />
    </div>
  );
};

export default BookPage;
