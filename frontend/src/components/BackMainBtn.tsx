import { useNavigate } from "react-router-dom";

const BackMainBtn = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <button
      onClick={handleRedirect}
      className="mt-8 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5"
    >
      Back to main page
    </button>
  );
};

export default BackMainBtn;
