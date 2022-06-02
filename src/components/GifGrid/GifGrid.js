import React, { useState, useEffect, Fragment } from "react";
import { GifGridItem } from "../GifGridItem/GifGridItem";

export const GifGrid = ({ gif }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const api_key = "UrP5hDmObdNF2rmtqFqZGqy8SXEi7Ogb";
    const url =
      "https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=" +
      api_key;
    const answer = await fetch(url);
    const { data } = await answer.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    console.log(gifs);
    setImages(gifs);
  };

  return (
    <Fragment>
      <h3>{gif}</h3>
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </Fragment>
  );
};
