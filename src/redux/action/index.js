import * as action from '../action';
import axios from 'axios';

export function fetchProducts(search) {
    return dispatch => {
        dispatch(action.fetchProductsBegin());
        return axios({
            method:'get',
            url:   `https://www.omdbapi.com/?s=${search}&apikey=a2453d65`
          }).then(json => { 
                dispatch(action.fetchProductsSuccess(json.data));
                return json;
            }).catch(error => {
                dispatch(action.fetchProductsFailure(error))
                return error;
            });
    };
}

export function fetchMovie(id) {
    return dispatch => {
        dispatch(action.fetchMovieBegin());
        return axios({
            method:'get',
            url:   `https://www.omdbapi.com/?i=${id}&plot=full&apikey=a2453d65`
          }).then(json => {
                dispatch(action.fetchMovieSuccess(json.data));
                return json;
            })
            .catch(error => {
                dispatch(action.fetchMovieFailure(error))
                return error
            });
    };
}
