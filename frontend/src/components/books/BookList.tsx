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
    <div className="overflow-x-auto shadow-md rounded-lg">
      <table className="min-w-full bg-white border-b border-gray-200 rounded-lg">
        <thead className="bg-gray-50 dark:bg-gray-700 text-xs uppercase tracking-wider">
          <tr>
            <th className="text-center p-3">Title</th>
            <th className="text-center p-3">Author</th>
            <th className="text-center p-3">Summary</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {books.map((book) => (
            <tr key={book._id?.toString()}>
              <td className="text-center p-3">{book.title}</td>
              <td className="text-center p-3">
                {getAuthorName(book.author_id)}
              </td>
              <td className="text-center p-3">{book.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
