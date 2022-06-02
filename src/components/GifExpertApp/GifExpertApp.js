import React from "react";
import { AddGif } from "../AddGif/AddGif";

export const GifExpertApp = () => {
  const [gifs, setGifs] = React.useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball",
  ]);
  // const handleAddGif = () => {
  //   setGifs([...gifs, 'Prueba GIF']);
  // }

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddGif setGifs={setGifs} />
      <hr />
      <ol>
        {gifs.map(
          (gif, idx) => (
            <li key={idx}>{gif}</li>
          ),
          this
        )}
      </ol>
    </div>
  );
};
