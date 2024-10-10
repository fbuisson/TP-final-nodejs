import React from "react";
import { IGenre } from "../../types/IGenre";

interface BookListProps {
  genres: IGenre[];
}

const GenreList: React.FC<BookListProps> = ({ genres }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border-b border-gray-200 shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-50 dark:bg-gray-700 text-xs uppercase tracking-wider">
          <tr className="hover:bg-gray-100 dark:hover:bg-gray-600">
            <th className="text-center p-4">Genre</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {genres.map((genre) => (
            <tr
              className="hover:bg-gray-100 dark:hover:bg-gray-600"
              key={genre._id?.toString()}
            >
              <td className="text-center p-4 whitespace-normal">
                {genre.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GenreList;
