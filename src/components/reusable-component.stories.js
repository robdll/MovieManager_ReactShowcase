/* React imports */
import React from "react";
import { storiesOf } from "@storybook/react";

/* Reusable components */
import MovieCard from "./MovieCard/movie-card-component";
import Logo from "./Logo/logo-component";
import Eye from "./Eye/eye-component";

/* Simple components */
import Search from "../App/Search/search-component";
import Suggestion from "../App/Search/Suggestion/suggestion-component";
import Category from "./Category/category-component";
import About from "./About/about-component";

const movie = {
  title: "Wonderful Life",
  url: "/img/movie.jpg",
  description: `Lorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's standard 
    dummy text ever since the 1500s, when an unknown printer took a galley 
    of type and scrambled it to make a type specimen book. It has survived 
    not only five centuries, but also the leap into electronic typesetting`,
  actors: ["Hello World", "Happy Birthday", "Good Luck"],
  director: "Rob.dll",
  year: 2007
};

storiesOf("Basic Elements", module)
  .add("Logo ", () => <Logo />)
  .add("Moviecard", () => (
    <div style={{ width: "120px" }}>
      <MovieCard movie={movie} />
    </div>
  ))
  .add("Search Input", () => <Search />)
  .add("About", () => <About movie={movie} />)
  .add("Category", () => {
    const movies = [movie, movie, movie, movie, movie];
    return <Category movies={movies} categoryName={"da vedere"} />;
  })
  .add("Suggestion", () => <Suggestion movie={movie} />)
  .add("Eye green", () => (
    <div style={{ width: "120px" }}>
      <Eye seen />
    </div>
  ))
  .add("Eye gray", () => (
    <div style={{ width: "120px" }}>
      <Eye />
    </div>
  ));
