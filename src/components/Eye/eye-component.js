/* React imports */
import React from "react";
import PropTypes from "prop-types";

/* Reusable components */

/* Children components */

/* Style */
import style from "./eye.module.scss";

/* Component implementation */
const Eye = function(props) {
  const alt = props.eye ? "Aggiungi da vedere" : "Aggiungi visti";
  const type = props.seen ? "seen" : "wantToSee";
  const url = `./svg/${type}.svg`;
  return (
    <>
      <img className={style.img} src={url} alt={alt} />
    </>
  );
};

Eye.propTypes = {
  seen: PropTypes.bool,
  eye: PropTypes.object
};

export default Eye;
