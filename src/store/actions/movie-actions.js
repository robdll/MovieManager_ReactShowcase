
export const MOVIE_ADD_TO_WATCH = "movie/ADD_TO_WATCH";
export const MOVIE_ADD_TO_SEEN = "movie/ADD_TO_SEEN";
export const MOVIE_REMOVE_TO_WATCH = "movie/REMOVE_TO_WATCH";
export const MOVIE_REMOVE_TO_SEEN = "movie/REMOVE_TO_SEEN";
export const MOVIE_SELECTION = "movie/SELECTION";
export const MOVIE_SELECTION_CLEAR = "movie/SELECTION_CLEAR";

export function addToWatch(movie) {
  return {
      type: MOVIE_ADD_TO_WATCH,
      payload: movie
  };
}

export function addToSeen(movie) {
  return {
      type: MOVIE_ADD_TO_SEEN,
      payload: movie
  };
}

export function removeToWatch(movie) {
  return {
      type: MOVIE_REMOVE_TO_WATCH,
      payload: movie
  };
}

export function removeToSeen(movie) {
  return {
      type: MOVIE_REMOVE_TO_SEEN,
      payload: movie
  };
}

export function movieSelection(movie) {
  return {
      type: MOVIE_SELECTION,
      payload: movie
  };
}

export function movieSelectionClear() {
  return {
      type: MOVIE_SELECTION_CLEAR,
  };
}
