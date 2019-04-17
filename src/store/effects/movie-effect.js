
import { 
    getAllStart, getAllSuccess, getAllFailure,
    fetchCoversStart, fetchCoversSuccess, fetchCoversFailure,
    addToWatchStart, addToWatchSuccess, addToWatchFailure,
} from '../actions/movie-actions'

export function getAllMovies() {
    const token = localStorage.getItem('login-token')
    const url = `https://nameless-tundra-74426.herokuapp.com/api/v1/movies`;
    const opt = { 
        method: 'GET', 
        headers:{ 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    };
    return async dispatch => {
        dispatch(getAllStart());
        return fetch(url, opt)
            .then((r) => {
                if(r.ok) { 
                    return r.json(); 
                } 
                else {
                    const serverError = 'Server not responding. Try later.';
                    return r.json().then(r => {
                        let unified = {};
                        if (r.errors) r.errors.forEach( item => { unified = { ...unified, ...item } });
                        throw r.errors ? Object.keys(unified).map( i => `${i} ${unified[i]}.`).join(`\n`) : serverError
                    })
                }
            })
            .then(r => r.data)
            .then(m => { 
                dispatch(getAllSuccess(m));
                fetchCovers(dispatch, m);
            })
            .catch(err => { dispatch(getAllFailure(err)) });
    };
}

async function fetchCovers(dispatch, movies) {
    const apiKey = '5b22a10bb7349a0914d536d28d20547a';
    dispatch(fetchCoversStart(movies))
    const url = `https://api.themoviedb.org/3/movie/`;
    const opt = { 
        method: 'GET', 
        headers:{ 'Content-Type': 'application/json' }
    }
    Promise.all(
        movies.map( m => {
            return fetch(`${url}${m.movie_id}?api_key=${apiKey}`, opt) 
                .then( r  => r.ok ? r.json() : { id: m.movie_id } ) 
        })
    ).then( movies => {
        movies = movies.map( movie => ({ 
            id: movie.id, 
            cover: movie.poster_path ? `http://image.tmdb.org/t/p/w342/${movie.poster_path}` : './img/not_available.jpeg'
        }))
        dispatch(fetchCoversSuccess(movies))
    })
    .catch( err => { 
        //TODOS should provide list of movies with cover linking to the img/not_available
        dispatch(fetchCoversFailure(err))
    })
}

export function addToLibrary(movie) {
    const token = localStorage.getItem('login-token')
    const url = `https://nameless-tundra-74426.herokuapp.com/api/v1/movies`;
    const opt = { 
        method: 'POST', 
        headers:{ 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(movie)
    };
    return async dispatch => {
        dispatch(addToWatchStart( {...movie, isFetchinCover: true }));
        return fetch(url, opt)
            .then((r) => {
                if(r.ok) { 
                    return r.json(); 
                } 
                else {
                    const serverError = 'Server not responding. Try later.';
                    return r.json().then(r => {
                        let unified = {};
                        if (r.errors) r.errors.forEach( item => { unified = { ...unified, ...item } });
                        throw r.errors ? Object.keys(unified).map( i => `${i} ${unified[i]}.`).join(`\n`) : serverError
                    })
                }
            })
            .then(r => r.data )
            .then( (data) => { 
                dispatch(addToWatchSuccess());
                fetchCovers(dispatch, [data]);
            })
            .catch(err => { dispatch(addToWatchFailure({ ...err, movie_id: movie.movie_id })) });
    };

}