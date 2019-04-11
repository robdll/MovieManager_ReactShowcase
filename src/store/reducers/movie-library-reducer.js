import { SEARCH, SEARCH_SUCCESS, SEARCH_FAILURE, SEARCH_CLEAR } from "../actions/search-actions";
import { 
  MOVIE_ADD_TO_SEEN, 
  MOVIE_ADD_TO_WATCH, 
  MOVIE_REMOVE_TO_WATCH, 
  MOVIE_REMOVE_TO_SEEN,
  MOVIE_SELECTION,
  MOVIE_SELECTION_CLEAR,
} from "../actions/movie-actions";

const initialState = {
    search: {
      isSearching: false,
      fetched: []
    },
    userMovies: [],
    movieSelected: undefined
};


export default function reducer(state = initialState, action = {}) {

    console.log('Action: ', action.type);
    if( action.payload) console.log('Payload: ', action.payload);

    const newState = { ...state };

    switch (action.type) {
      case SEARCH: {
        newState.search.isSearching = true;
        return newState;
      }
      case SEARCH_SUCCESS: {
        newState.search.isSearching = false;
        newState.search.fetched = action.payload
        return newState;
      }
      case SEARCH_CLEAR:
      case SEARCH_FAILURE: {
        newState.search.isSearching = false;
        newState.search.fetched = [];
        return newState;
      }
      case MOVIE_ADD_TO_SEEN: {
        const newState = { ...state };
        const alreadyInList = newState.userMovies.find( movie => {
          return movie.id === action.payload.id
        });
        if(alreadyInList) {
          alreadyInList.seen = true;
        } else {
          action.payload.seen = true;
          newState.userMovies.push(action.payload)
        }
        return newState;
      }
      case MOVIE_REMOVE_TO_SEEN: {
        const newState = { ...state };
        newState.userMovies.forEach( movie => {
          if(movie.title === action.payload.title) {
            movie.toWatch = false;
          }
        });
        return newState;
      }
      case MOVIE_ADD_TO_WATCH: {
        const newState = { ...state };
        const alreadyInList = newState.userMovies.find( movie => {
          return movie.id === action.payload.id
        });
        if(alreadyInList) {
          alreadyInList.toWatch = true;
        } else {
          action.payload.toWatch = true;
          newState.userMovies.push(action.payload)
        }
        return newState;
      }
      case MOVIE_REMOVE_TO_WATCH: {
        const newState = { ...state };
        newState.userMovies.forEach( movie => {
          if(movie.title === action.payload.title) {
            movie.toWatch = false;
          }
        });
        return newState;
      }
      case MOVIE_SELECTION: {
        const newState = { ...state };
        newState.movieSelected = action.payload.movie;
        newState.movieSelected.category = action.payload.categoryName;
        return newState;
      }
      case MOVIE_SELECTION_CLEAR: {
        const newState = { ...state };
        newState.movieSelected = undefined;
        return newState;
      }
      default:
        return state;
    }
}