/* React import */
import React from "react";
import PropTypes from "prop-types";

/* Reausable components */
import Movie from "../../../components/MovieCard/movie-card-component";

/* Children components */
import style from "./suggestion.module.scss";
import Eye from "../../../components/Eye/eye-component";

/* Component implementation */
const Suggestion = function(props) {
  const card = (
    <div className={style.cardContainer}>
      <Movie movie={props.movie} />{" "}
    </div>
  );

  const year = props.movie.year ? `(${props.movie.year})` : "";
  const actors = props.movie.actors.join(", ");

  return (
    <article className={style.suggestion}>
      {card}
      <p className={style.title}>
        {props.movie.title} <span>{year}</span>
      </p>
      <p className={style.subtitle}>Actors: {actors}</p>
      <div className={style.iconsee}>
        <Eye seen />
      </div>
      <div className={style.icontosee}>
        <Eye />
      </div>
    </article>
  );
};

// TODO use shape see: https://reactjs.org/docs/typechecking-with-proptypes.html
Suggestion.propTypes = {
  movie: PropTypes.object.isRequired
};

export default Suggestion;
