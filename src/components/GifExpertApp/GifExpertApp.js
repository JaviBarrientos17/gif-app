import React from "react";
import { AddGif } from "../AddGif/AddGif";
import { GifGrid } from "../GifGrid/GifGrid";

export const GifExpertApp = () => {
  const [gifs, setGifs] = React.useState([""]);

  return (
    <div>
      <AddGif setGifs={setGifs} />
      <hr />
      <ol>
        {gifs.map((gif) => (
          <GifGrid key={gif} gif={gif} />
        ))}
      </ol>
    </div>
  );
};
