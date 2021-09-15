import { combineReducers } from 'redux'
import * as ActionTypes from '../actions/area'

const area = (state, action) => {
    switch (action.type) {

        case ActionTypes.FETCH_ALL_AREA_LOADING:
            return { ...state, loading: action.data, data: [], failed: false }

        case ActionTypes.FETCH_ALL_AREA_SUCCESS:
            return { ...state, loading: false, data: action.data, failed: false }

        case ActionTypes.FETCH_ALL_AREA_FAILED:
            return { ...state, loading: false, data: [], failed: true }

        default:
            return { ...state, data: [], loading: false,  failed: false }
    }
}

export default combineReducers({
    area,
})
