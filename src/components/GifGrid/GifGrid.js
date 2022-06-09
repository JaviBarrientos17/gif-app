import React, { Fragment } from "react";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { GifGridItem } from "../GifGridItem/GifGridItem";

export const GifGrid = ({ gif }) => {
  const { data: images, loading } = useFetchGifs();

  return (
    <Fragment>
      <h3>{gif}</h3>
      {loading && <p>⌛⌛Loading gifs...⌛⌛</p>}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </Fragment>
  );
};
