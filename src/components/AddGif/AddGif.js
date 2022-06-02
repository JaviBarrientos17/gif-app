import React, { useState } from "react";
import { PropTypes } from "prop-types";

export const AddGif = ({ setGifs }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
        setGifs(gifs => [...gifs, inputValue]);
        setInputValue("");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </form>
    </>
  );
};

AddGif.propTypes = {
    setGifs: PropTypes.func.isRequired,
};