import React from "react";
import { AddGif } from "../AddGif/AddGif";

export const GifExpertApp = () => {
  const [gifs, setGifs] = React.useState(["One Punch"]);

  return (
    <div>
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
