import { API_METHODS, END_POINT, ApiHandler, MOVIE } from '../config';

export const getMovieList = () => {
    return async (dispatch, getState) => {
        dispatch({ type: MOVIE.GET_MOVIE_REQUEST });
        const endPoint = END_POINT.getmovie
        const method = API_METHODS.GET
        console.log('endPointendPoint  MOVIE',endPoint)
        try {
            const response = await ApiHandler({ endPoint,method});
            console.log("responseresponse",response);
            if (response?.status === 200) {
                if (response.data && response.data.errMsg == null) {
                    dispatch({
                        type: MOVIE.GET_MOVIE_SUCCESS,
                        payload: response.data,
                    });
                } else {
                    dispatch({ type: MOVIE.GET_MOVIE_FAIL, payload: response.data });
                }
            } else {
                dispatch({ type: MOVIE.GET_MOVIE_FAIL, payload: response.data });
            }
        } catch (err) {
            if (err.response?.status === 401) {
                dispatch({ type: MOVIE.GET_MOVIE_FAIL, payload: err.response.data });
            } else {
                dispatch({ type: MOVIE.GET_MOVIE_FAIL, payload: err });
            }
        }
    };

};

