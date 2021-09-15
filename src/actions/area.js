import config from "../config";
import axios from "axios";

export const FETCH_ALL_AREA_LOADING = 'FETCH_ALL_AREA_LOADING'
export const FETCH_ALL_AREA_SUCCESS = 'FETCH_ALL_AREA_SUCCESS'
export const FETCH_ALL_AREA_FAILED = 'FETCH_ALL_AREA_FAILED'

export const AreaByCity = (id) => {
    return (dispatch) => {
        dispatch({ type: FETCH_ALL_AREA_LOADING, data: true })
        axios.get(`${config.apiPath}/city?cityId=${id}`)
            .then((res) => {
                dispatch({ type: FETCH_ALL_AREA_LOADING, data: false })
                return dispatch({ type: FETCH_ALL_AREA_SUCCESS, data: res.data })
            })
            .catch((error) => {
                dispatch({ type: FETCH_ALL_AREA_LOADING, data: false })
                dispatch({ type: FETCH_ALL_AREA_FAILED, data: true })
            })
    }
}