import { SEARCH, SEARCH_SUCCESS, SEARCH_FAILURE, SEARCH_CLEAR } from "../actions/search-actions";
import { 
  MOVIE_GET_ALL, MOVIE_GET_ALL_SUCCESS, MOVIE_GET_ALL_FAILURE, 
  MOVIE_ADD_TO_WATCH, MOVIE_ADD_TO_WATCH_SUCCESS, MOVIE_ADD_TO_WATCH_FAILURE,
  MOVIE_FETCH_COVERS_START, MOVIE_FETCH_COVERS_SUCCESS, MOVIE_FETCH_COVERS_FAILURE,
  MOVIE_REMOVE_TO_WATCH, 
  MOVIE_SELECTION,
  MOVIE_SELECTION_CLEAR,
} from "../actions/movie-actions";

const initialState = {
  search: {
    isSearching: false,
    fetched: []
  },
  movieSelected: undefined,
  isFetching: false,
  userMovies: [],
};

export default function reducer(state = initialState, action = {}) {

    console.log('Action: ', action.type);
    if( action.payload) console.log('Payload: ', action.payload);

    const newState = { ...state };

    switch (action.type) {
      case MOVIE_FETCH_COVERS_START: {
        newState.userMovies = newState.userMovies.map( movie => ({ ...movie, isFetchinCover: true}));
        return newState;
      }
      case MOVIE_FETCH_COVERS_SUCCESS: {
        newState.userMovies = newState.userMovies.map(movie => {
          movie.isFetchinCover = false;
          movie.url = movie.url || action.payload.find( payload => movie.movie_id === payload.id).cover;
          return movie;
        });
        return newState;
      }
      case MOVIE_FETCH_COVERS_FAILURE: {
        newState.userMovies = newState.userMovies.map( movie => {
          movie.isFetchinCover = false;
          movie.url = movie.url || './img/not_available.jpeg';
          return movie;
        });
        return newState;
      }
      case MOVIE_ADD_TO_WATCH: {
        newState.userMovies.push(action.payload);
        return newState;
      }
      case MOVIE_ADD_TO_WATCH_SUCCESS: {
        return newState;
      }
      case MOVIE_ADD_TO_WATCH_FAILURE: {
        newState.userMovies = newState.userMovies.filter( i => i.movie_id === action.payload.movie_id);
        return newState;
      }
      case MOVIE_GET_ALL: {
        newState.isFetching = true;
        return newState;
      }
      case MOVIE_GET_ALL_SUCCESS: {
        newState.isFetching = false;
        newState.userMovies = action.payload;
        return newState;
      }
      case MOVIE_GET_ALL_FAILURE: {
        newState.isFetching = false;
        newState.userMovies = [];
        return newState;
      }
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
      // case MOVIE_ADD_TO_WATCH: {
      //   const newState = { ...state };
      //   const alreadyInList = newState.userMovies.find( movie => {
      //     return movie.id === action.payload.id
      //   });
      //   if(alreadyInList) {
      //     alreadyInList.toWatch = true;
      //   } else {
      //     action.payload.toWatch = true;
      //     newState.userMovies.push(action.payload)
      //   }
      //   return newState;
      // }
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