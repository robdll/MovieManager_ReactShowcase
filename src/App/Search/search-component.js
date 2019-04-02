/* React imports */
import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

/* Reusable components */

/* Children components */
import Suggestion from "./Suggestion/suggestion-component";

/* Style */
import style from "./search.module.scss";

/* Component implementation */
const Search = function(props) {
  const [title, setSearchingTitle] = useState("");
  const placeholder = "Search movie...";
  const name = "title";

  // TODO use state to populate suggestions
  const suggestions = (props.suggestions || []).map((movie, idx) => (
    <Suggestion key={idx} movie={movie} />
  ));
  const suggestionContainer =
    suggestions.length === 0 ? (
      ""
    ) : (
      <div className={style.suggestionContainer}> {suggestions} </div>
    );

  return (
    <section className={style.formSection}>
      <form>
        <input
          className={style.formInput}
          placeholder={placeholder}
          onChange={e => setSearchingTitle(e.target.value)}
          name={name}
          value={title}
        />
      </form>

      {suggestionContainer}
    </section>
  );
};

Search.propTypes = {
  suggestions: PropTypes.array
};

export default Search;
