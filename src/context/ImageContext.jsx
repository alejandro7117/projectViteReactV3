import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query) {
      const fetchImages = async () => {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=${query}&client_id=DvvqIcSsA6ROWiUGakgrBiGttxqn8BQKEYsw5zgFJfY`
        );
        setImages(response.data.results);
      };

      fetchImages();
    }
  }, [query]);

  return (
    <ImageContext.Provider value={{ images, setQuery }}>
      {children}
    </ImageContext.Provider>
  );
};
