
import { 
    signUpStart, signUpSuccess, signUpFailure,
    signInStart, signInSuccess, signInFailure,
    signOutStart, signOutSuccess, signOutFailure,
} from '../actions/auth-actions'


export function signUp(payload) {
    const url = `https://nameless-tundra-74426.herokuapp.com/api/session/sign_up`;
    const opt = { 
        method: 'POST', 
        body: JSON.stringify(payload), 
        headers:{ 
            'Content-Type': 'application/json',
        }
    };
    return async dispatch => {
        dispatch(signUpStart());
        return fetch(url, opt)
            .then((r) => {
                if(r.ok) { 
                    return r.json(); 
                } 
                else {
                    const serverError = 'Server not responding. Try later.';
                    // Backend return an object in the followig format:
                    // {"errors":[{"somefield":"someError"}]}
                    // the following simply return lines of joint key - value, or default server error string
                    return r.json().then(r => {
                        let unified = {};
                        if (r.errors) r.errors.forEach( item => { unified = { ...unified, ...item } });
                        throw r.errors ? Object.keys(unified).map( i => `${i} ${unified[i]}.`).join(`\n`) : serverError
                    })
                }
            })
            .then(r => r.data)
            .then(t => {
                localStorage.setItem('login-token', t.token)
                dispatch(signUpSuccess()) 
            })
            .catch(err => dispatch(signUpFailure(err)));
    };

}

export function signIn(payload) {
    const url = `https://nameless-tundra-74426.herokuapp.com/api/session/sign_in`;
    const opt = { 
        method: 'POST',
        body: JSON.stringify(payload), 
        headers:{ 'Content-Type': 'application/json' }
    };
    return async dispatch => {
        dispatch(signInStart());
        return fetch( url, opt)
            .then((r) => {
                if(r.ok) { 
                    return r.json(); 
                } 
                else if(r.status === 422) {
                    return r.json().then(r => { throw r.errors.detail }) 
                }
                else {
                    const serverError = 'Server not responding. Try later.';
                    return r.json().then(r => { throw r.errors && r.errors.detail ? r.errors.detail : serverError }) 
                }
            })
            .then(r => r.data )
            .then(t => {
                localStorage.setItem('login-token', t.token)
                dispatch(signInSuccess()) 
            })
            .catch(err => { 
                dispatch(signInFailure(err)) 
            });
    };

}

export function signOut() {
    const token = localStorage.getItem('login-token')
    const url = `https://nameless-tundra-74426.herokuapp.com/api/session/sign_out`;
    const opt = { 
        method: 'DELETE', 
        headers:{ 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    };
    return async dispatch => {
        dispatch(signOutStart());
        return fetch( url, opt)
            .then( r => {
                if(r.ok) {
                    localStorage.clear();
                    dispatch(signOutSuccess());
                } else {
                    const err = 'Server Error';
                    throw err;
                }
            })
            .catch(err => { dispatch(signOutFailure(err)) });
    };

}