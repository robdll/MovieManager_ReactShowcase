export const getWatchList = state => state.userMovies.filter( movie => movie.toWatch);
export const getSeenList = state => state.userMovies.filter( movie => movie.seen);
export const getMovieSelected = state => state.movieSelected;

