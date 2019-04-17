import { connect } from "react-redux";

import { searchMovies } from "../effects/search-effect";
import { getAllMovies, addToLibrary } from "../effects/movie-effect";

import { 
  movieSelection,
  movieSelectionClear
} from "../actions/movie-actions";
import { searchClear } from "../actions/search-actions";

import { getFetched, getIsSearching } from "../selectors/search-selectors";
import { isLoggedIn } from "../selectors/auth-selectors";

import { 
  getMovieList,
  getMovieSelected
} from "../selectors/movie-selectors";

import App from "../../App/app-component";

const mapDispatchToProps = {
  getAllMovies,
  searchMovies,
  searchClear,
  addToLibrary,
  movieSelection,
  movieSelectionClear,
};

const mapStateToProps = ({movieLibrary: state, auth }) => {

  return {
    search: {
      fetched: getFetched(state),
      isSearching: getIsSearching(state),
    },
    category: {
      userMovies: getMovieList(state),
      selection: getMovieSelected(state)
    },
    auth: isLoggedIn(auth)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);