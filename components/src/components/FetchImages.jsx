import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const FetchImages = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const api = await fetch("https://jsonplaceholder.typicode.com/photos");
      const data = await api.json();
      console.log(data);
      setImages(data);
    };
    fetchImages();
  }, []);

  return (
    <div>
      <h1>Images</h1>
      {images.map((image) => (
        <div key={image.id}>
          <img src={image.url} alt={image.title} />
          <p>{image.title}</p>
        </div>
      ))}
    </div>
  );
};

export default FetchImages;
