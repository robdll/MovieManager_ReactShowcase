/* React imports */
import React from "react";
import { storiesOf } from "@storybook/react";

/* Simple imports */
import Search from "./search-component";

storiesOf("Search", module)
  .add("Empty search", () => <Search />)
  .add("Typing search", () => {
    const movies = [
      {
        title: "Wonderful Life",
        url: "/img/movie.jpg",
        actors: ["Hello World", "Happy Birthday", "Good Luck"]
      },
      {
        title: "Wonderful Life",
        url: "/img/movie.jpg",
        actors: ["Hello World", "Happy Birthday", "Good Luck"]
      },
      {
        title: "Wonderful Life",
        url: "/img/movie.jpg",
        actors: ["Hello World", "Happy Birthday", "Good Luck"]
      }
    ];
    return <Search suggestions={movies} />;
  });
