/* React imports */
import React from "react";
import PropTypes from "prop-types";

/* Reusable components */
import MovieCard from "../MovieCard/movie-card-component";
import Eye from "../Eye/eye-component";

/* Children components */

/* Style */
import style from "./about.module.scss";

/* Component implementation */
const About = function(props) {
  const card = <MovieCard movie={props.movie} />;

  const titleYear = (
    <h2>
      {props.movie.title}
      {` (${props.movie.year})`}
    </h2>
  );
  const movieDescription = <p>{props.movie.description}</p>;
  const castTitle = <h3 className={style.h3}>Cast</h3>;
  const actors = (
    <div className={style.actorsContainer}>
      {props.movie.actors.map((i, idx) => (
        <div key={idx}>
          <img
            className={style.actorImage}
            alt="actor image"
            src={i.url || "/img/actor.jpg"}
          />
          <p className={style.actorName}>actor name</p>
        </div>
      ))}
    </div>
  );
  const director = (
    <h3 className={style.h3}>
      {" "}
      Director:
      <span className={style.span}> {props.movie.director} </span>
    </h3>
  );

  const thumbs = {
    up: { url: "./svg/thumb_up.svg", alt: "Thumbs down" },
    down: { url: "./svg/thumb_down.svg", alt: "Thumbs up" }
  };

  const eyes = (
    <div className={style.eyeContainer}>
      <Eye seen />
      <Eye />
    </div>
  );

  return (
    <section className={style.article}>
      <article>{card}</article>

      <article className={style.movieInfoContainer}>
        {titleYear}
        {movieDescription}
        {castTitle}
        {actors}
        {director}
      </article>

      <article className={style.actionsContainer}>
        <div className={style.ratingContainer}>
          <p className={style.ratingItem1}>Rating</p>
          <p className={style.ratingItem2}>4</p>
          <p className={style.ratingItem3}>/5</p>
          <img
            className={style.thumbsIcon}
            alt={thumbs.up.alt}
            src={thumbs.up.url}
          />
          <img
            className={style.thumbsIcon}
            alt={thumbs.down.alt}
            src={thumbs.down.url}
          />
        </div>

        {eyes}
      </article>
    </section>
  );
};

About.propTypes = {
  movie: PropTypes.object
};

export default About;
