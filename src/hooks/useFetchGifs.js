import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (gif) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(gif).then((imgs) => {
      setTimeout(() => {
        // console.log(imgs);
        setState({
          data: imgs,
          loading: false,
        });
      }, 1000);
    });
  }, [gif]);

  return state;
};
// TODO