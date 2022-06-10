import React, { Fragment } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <Fragment>
      {/* TODO - Try to check if the category is null, show a text instead */}
      {/* <h3 className="animate__animated animate__fadeIn"> {category} </h3> */}
      {loading && (
        <p className="animate__animated animate__flash">
          ⌛⌛Loading gifs...⌛⌛
        </p>
      )}

      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </Fragment>
  );
};
