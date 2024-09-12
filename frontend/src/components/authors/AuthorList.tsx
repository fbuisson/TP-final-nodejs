import React from "react";
import { IAuthor } from "../../types/IAuthor";

interface AuthorListPage {
  authors: IAuthor[];
}

const AuthorList: React.FC<AuthorListPage> = ({ authors }) => {
  return (
    <div className="overflow-x-auto shadow-md rounded-lg">
      <table className="min-w-full bg-white border-b border-gray-200 rounded-lg">
        <thead className="bg-gray-50 dark:bg-gray-700 text-xs uppercase tracking-wider">
          <tr>
            <th className="text-center p-3">Auteur</th>
            <th className="text-center p-3">Age</th>
            <th className="text-center p-3">Nationalité</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {authors.map((author) => (
            <tr key={author._id?.toString()}>
              <td className="text-center p-3">{author.name}</td>
              <td className="text-center p-3">{author.age}</td>
              <td className="text-center p-3">{author.nationality}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuthorList;
