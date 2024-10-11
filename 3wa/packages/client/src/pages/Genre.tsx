import React from "react";
import { useEffect, useState } from "react";
import { IGenre } from "../types/IGenre";
import GenreList from "../components/genres/GenreList";
import BackMainBtn from "../components/BackMainBtn";

const Genre: React.FC = () => {
  const [genres, setGenres] = useState<IGenre[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/genres")
      .then((response) => response.json())
      .then((data) => {
        setGenres(data.data);
      })
      .catch((err) => {
        console.error("Erreur : pas de genre trouvé", err);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-center">Genre List</h1>
      {genres && genres.length > 0 ? (
        <GenreList genres={genres} />
      ) : (
        <p> 📚 Sorry no genre available yet 📚 </p>
      )}
      <BackMainBtn />
    </div>
  );
};

export default Genre;
