import config from "../config";
import axios from "axios";

export const FETCH_ALL_CITIES_LOADING = 'FETCH_ALL_CITIES_LOADING'
export const FETCH_ALL_CITIES_SUCCESS = 'FETCH_ALL_CITIES_SUCCESS'
export const FETCH_ALL_CITIES_FAILED = 'FETCH_ALL_CITIES_FAILED'

export const FetchAllCities = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_ALL_CITIES_LOADING, data: true })
        axios.get(`${config.apiPath}/city`)
            .then((res) => {
                dispatch({ type: FETCH_ALL_CITIES_LOADING, data: false })
                return dispatch({ type: FETCH_ALL_CITIES_SUCCESS, data: res.data })
            })
            .catch((error) => {
                dispatch({ type: FETCH_ALL_CITIES_LOADING, data: false })
                dispatch({ type: FETCH_ALL_CITIES_FAILED, data: true })
            })
    }
}