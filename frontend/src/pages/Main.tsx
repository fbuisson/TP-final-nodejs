import React from "react";
import { useNavigate } from "react-router-dom";

const Main: React.FC = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/books");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Book App</h1>
      <button
        onClick={handleRedirect}
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all"
      >
        View Book List
      </button>
    </div>
  );
};

export default Main;
