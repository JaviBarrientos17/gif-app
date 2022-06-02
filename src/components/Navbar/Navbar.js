import React from "react";
import { GifExpertApp } from "../GifExpertApp/GifExpertApp";
import "./Navbar.css";

export const Navbar = () => {
  const body = document.querySelector("body");
  const initialTheme = "light";

  const setTheme = (theme) => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  };

  // TODO - Add a 🌙 or a 🌞 icon in the navbar btn to toggle the theme
  const toggleTheme = () => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const setThemeOnInit = () => {
    const savedTheme = localStorage.getItem("theme");
    savedTheme
      ? body.setAttribute("data-theme", savedTheme)
      : setTheme(initialTheme);
  };

  setThemeOnInit();

  return (
    <>
      <h2>GifExpertApp</h2>
      <button onClick={toggleTheme}></button>
      <GifExpertApp />
    </>
  );
};
