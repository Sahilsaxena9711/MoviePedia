import * as constant from '../constant';

const initialState = {
    products: {
        data: [],
        success: false,
        loading: false,
        error: false,
        message: ""
    },
    movie: {
        data: [],
        success: false,
        loading: false,
        error: false,
        message: ""
    }
};

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case constant.FETCH_PRODUCTS_BEGIN:
            return {
                ...state,
                products: {
                    data: [],
                    loading: true,
                    success: false,
                    error: false,
                    message: ""
                }
            };

        case constant.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: {
                    data: action.payload,
                    loading: false,
                    success: true,
                    error: false,
                    message: ""
                }
            };

        case constant.FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                products: {
                    data: [],
                    loading: false,
                    success: false,
                    error: true,
                    message: action.payload.error
                }
            };

        case constant.FETCH_MOVIE_BEGIN:
            return {
                ...state,
                movie: {
                    data: [],
                    loading: true,
                    success: false,
                    error: false,
                    message: ""
                }
            };

        case constant.FETCH_MOVIE_SUCCESS:
            return {
                ...state,
                movie: {
                    data: action.payload,
                    loading: false,
                    success: true,
                    error: false,
                    message: ""
                }
            };

        case constant.FETCH_MOVIE_FAILURE:
            return {
                ...state,
                movie: {
                    data: [],
                    loading: false,
                    success: false,
                    error: true,
                    message: action.payload.error
                }
            };

        default:
            return state;
    }
}
