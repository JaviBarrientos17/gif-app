export const getGifs = async (gif) => {
  const api_key = "UrP5hDmObdNF2rmtqFqZGqy8SXEi7Ogb";
  const url =
    `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
      gif
    )}&limit=10&api_key=` + api_key;
  const answer = await fetch(url);
  const { data } = await answer.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
