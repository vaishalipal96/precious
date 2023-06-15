import { MOVIE } from "../config";
const initialState = {
    loading: null,
    errMsg: null,
    movieData:null,
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case MOVIE.GET_MOVIE_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                movieData: null
            });
        case MOVIE.GET_MOVIE_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                movieData: action.payload
            });
        case MOVIE.GET_MOVIE_FAIL:
            return Object.assign({}, state, {
                loading: false,
                errMsg: action.payload.message
            });
        default:
            return state;
    }
}
export default movieReducer