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

  const categoryName = props.status.name;
  const isSeen = categoryName !== 'da vedere';
  const header = (
    <header className={`${style.header} ${isSeen ? style.seenHeader : ''}`}>
      <span className={`${style.headerSpan} ${isSeen ? style.seenSpan : ''}`} />
      {categoryName}
    </header>
  );

  const movies = props.status.list.map((movie, idx) => {
    return (  
      <div className={style.movieContainer} key={idx} onClick={()=> props.actions.movieSelection({movie, categoryName} )} >
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

  let about;


  if (props.status.selection && categoryName === props.status.selection.category) {
    about = <div className={style.about}>
        <About movie={props.status.selection} />
      </div>;
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
