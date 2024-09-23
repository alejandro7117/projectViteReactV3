import React, { useState, useContext } from "react";
import { ImageContext } from "../context/ImageContext";

const SearchForm = () => {
  const [input, setInput] = useState("");
  const { setQuery } = useContext(ImageContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(input);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 flex justify-center">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Buscar imagen..."
        className="border rounded-l px-4 py-2 w-80 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 transition-colors"
      >
        Buscar
      </button>
    </form>
  );
};

export default SearchForm;
