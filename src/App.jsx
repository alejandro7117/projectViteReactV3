import React, { useContext } from "react";
import { ImageProvider } from "./context/ImageContext";
import SearchForm from "./components/SearchForm.jsx";
import ImageList from "./components/ImageList.jsx";

const App = () => {
  return (
    <ImageProvider>
      <div className="container mx-auto p-5">
        <h1 className="text-4xl font-bold mb-6 text-center">Buscador de imagen - Unsplash </h1>
        <SearchForm />
        <ImageList />
      </div>
    </ImageProvider>
  );
};

export default App;
