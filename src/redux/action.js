import * as constant from './constant';

export const fetchProductsBegin = () => ({
    type: constant.FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
    type: constant.FETCH_PRODUCTS_SUCCESS,
    payload: { products }
});

export const fetchProductsFailure = error => ({
    type: constant.FETCH_PRODUCTS_FAILURE,
    payload: { error }
});


export const fetchMovieBegin = () => ({
    type: constant.FETCH_MOVIE_BEGIN
});

export const fetchMovieSuccess = movie => ({
    type: constant.FETCH_MOVIE_SUCCESS,
    payload: { movie }
});

export const fetchMovieFailure = error => ({
    type: constant.FETCH_MOVIE_FAILURE,
    payload: { error }
});