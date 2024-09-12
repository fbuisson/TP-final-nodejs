import React from "react";
import { Types } from "mongoose";
import { IBook } from "../../types/IBook";
import { IAuthor } from "../../types/IAuthor";

interface BookListProps {
  books: IBook[];
  authors: IAuthor[];
}

const BookList: React.FC<BookListProps> = ({ books, authors }) => {
  const getAuthorName = (authorId: Types.ObjectId) => {
    const author = authors.find(
      (author) => author.id.toString() === authorId.toString()
    );
    return author ? author.name : "Unknown Author";
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border-b border-gray-200 shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-50 dark:bg-gray-700 text-xs uppercase tracking-wider">
          <tr className="hover:bg-gray-100 dark:hover:bg-gray-600">
            <th className="text-center p-4">Titre</th>
            <th className="text-center p-4">Auteur</th>
            <th className="text-center p-4">Résumé</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {books.map((book) => (
            <tr
              className="hover:bg-gray-100 dark:hover:bg-gray-600"
              key={book._id?.toString()}
            >
              <td className="text-center p-4 whitespace-normal">
                {book.title}
              </td>
              <td className="text-center p-4 whitespace-normal">
                {getAuthorName(book.author_id)}
              </td>
              <td className="text-center p-4 whitespace-normal">
                {book.summary}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
