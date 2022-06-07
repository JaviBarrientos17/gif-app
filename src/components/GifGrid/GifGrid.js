import React, { useState, useEffect, Fragment } from "react";
import { getGifs } from "../../helpers/getGifs";
import { GifGridItem } from "../GifGridItem/GifGridItem";

export const GifGrid = ({ gif }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getGifs(gif).then((gifs) => setImages(gifs));
  }, [gif]);

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
