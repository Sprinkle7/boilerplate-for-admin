import { combineReducers } from 'redux'
import * as ActionTypes from '../actions/projects'

const Projects = (state = [], action) => {
    switch (action.type) {

        case ActionTypes.PROJECT_LOADING:
            return { ...state, loading: action.data, data: [] }

        case ActionTypes.PROJECT_DATA:
            return { ...state, loading: false, data: action.data }

        default:
            return { ...state, data: [], loading: false, }
    }
}

export default combineReducers({
    Projects,
})
