/* React imports */
import React from "react";
import { storiesOf } from "@storybook/react";

/* Simple imports */
import Category from "./category-component";

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

storiesOf("Carousel", module)
  .add("Default", () => {
    const movies = [movie, movie, movie, movie, movie];
    return <Category movies={movies} categoryName={"da vedere"} />;
  })
  .add("Movie Selected", () => {
    const movies = [movie, movie, movie, movie, movie];
    return (
      <Category movies={movies} selected={movie} categoryName={"da vedere"} />
    );
  });
