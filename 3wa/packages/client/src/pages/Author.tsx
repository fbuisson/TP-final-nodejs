import { useEffect, useState } from "react";
import AuthorList from "../components/authors/AuthorList";
import BackMainBtn from "../components/BackMainBtn";
import { IAuthor } from "../types/IAuthor";

const AuthorPage = () => {
  const [authors, setAuthors] = useState<IAuthor[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/authors")
      .then((response) => response.json())
      .then((data) => {
        setAuthors(data.data);
      })
      .catch((err) => {
        console.error("Erreur : pas d'auteur trouvé", err);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-start py-10 bg-gray-100 min-h-screen">
      <h1 className="text-center text-2xl font-bold mb-6">Book List</h1>
      {authors && authors.length > 0 ? (
        <div className="w-full max-w-4xl">
          <AuthorList authors={authors} />
        </div>
      ) : (
        <p>📚 Sorry, no authors found 📚</p>
      )}
      <BackMainBtn />
    </div>
  );
};

export default AuthorPage;
