import React, { useContext, useMemo } from "react";
import { ImageContext } from "../context/ImageContext";

const ImageList = () => {
  const { images } = useContext(ImageContext);

  // Memorize the rendered images to optimize performance
  const renderedImages = useMemo(() => {
    return images.map((image) => (
      <div key={image.id} className="p-2">
        <img
          src={image.urls.small}
          alt={image.description || "Unsplash Image"}
          className="w-full h-auto rounded-lg shadow-md object-cover"
        />
      </div>
    ));
  }, [images]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {renderedImages.length > 0 ? renderedImages : <p>No images found.</p>}
    </div>
  );
};

export default ImageList;
