import { combineReducers } from 'redux'
import * as ActionTypes from '../actions/city'

const city = (state, action) => {
    switch (action.type) {

        case ActionTypes.FETCH_ALL_CITIES_LOADING:
            return { ...state, loading: action.data, data: [], failed: false }

        case ActionTypes.FETCH_ALL_CITIES_SUCCESS:
            return { ...state, loading: false, data: action.data, failed: false }

        case ActionTypes.FETCH_ALL_CITIES_FAILED:
            return { ...state, loading: false, data: [], failed: true }

        default:
            return { ...state, data: [], loading: false,  failed: false }
    }
}

export default combineReducers({
    city,
})
