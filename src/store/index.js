import { connect } from "react-redux";

import { searchMovies } from "./effects/search-effect";
import { 
  addToWatch, 
  addToSeen, 
  movieSelection,
  movieSelectionClear
} from "./actions/movie-actions";
import { searchClear } from "./actions/search-actions";

import { getFetched, getIsSearching } from "./selectors/search-selectors";
import { 
  getWatchList, 
  getSeenList, 
  getMovieSelected
} from "./selectors/movie-selectors";

import App from "../App/app-component";

const mapDispatchToProps = {
  searchMovies,
  addToWatch,
  addToSeen,
  searchClear,
  movieSelection,
  movieSelectionClear
};

const mapStateToProps = state => {
  return {
    search: {
      fetched: getFetched(state),
      isSearching: getIsSearching(state),
    },
    category: {
      seenList: getSeenList(state),
      watchList: getWatchList(state),
      selection: getMovieSelected(state)
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);