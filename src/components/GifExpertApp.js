import React, { Fragment, useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";
import DarkMode from "./DarkMode";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([""]);

  return (
    <Fragment>
      <h2>GifExpertApp</h2>
      <DarkMode />
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </Fragment>
  );
};
