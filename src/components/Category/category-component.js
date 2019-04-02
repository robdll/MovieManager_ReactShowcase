/* React imports */
import React from "react";
import PropTypes from "prop-types";

/* Reusable components */
import MovieCard from "../MovieCard/movie-card-component";
import About from "../About/about-component";

/* Children components */

/* Style */
import style from "./category.module.scss";

/* Component implementation */
const Category = function(props) {
  const header = (
    <header className={style.header}>
      <span className={style.headerSpan} />
      {props.categoryName}
    </header>
  );

  // TODO mock > localStorage > state
  const movies = props.movies.map((movie, idx) => {
    return (
      <div className={style.movieContainer} key={idx}>
        <MovieCard movie={movie} />
      </div>
    );
  });

  const arrows = {
    left: {
      url: "/svg/arrow_left.svg",
      class: style.leftArrow,
      alt: "mostra precedenti"
    },
    right: {
      url: "/svg/arrow_right.svg",
      class: style.rightArrow,
      alt: "mostra successivi"
    }
  };

  let about = "";
  if (props.selected) {
    about = (
      <div className={style.about}>
        <About movie={props.selected} />
      </div>
    );
  }
  const leftArrow = (
    <img
      className={arrows.left.class}
      alt={arrows.left.alt}
      src={arrows.left.url}
    />
  );
  const rightArrow = (
    <img
      className={arrows.right.class}
      alt={arrows.right.alt}
      src={arrows.right.url}
    />
  );

  const moviesContainer = (
    <article className={style.moviesContainer}>{movies}</article>
  );

  return (
    <section className={style.section}>
      {header}
      {leftArrow} {moviesContainer} {rightArrow}
      {about}
    </section>
  );
};

Category.propTypes = {
  movies: PropTypes.array,
  selected: PropTypes.bool,
  categoryName: PropTypes.string
};

export default Category;
