import { combineReducers } from 'redux'
import * as ActionTypes from '../actions/sidebarToggle'
const toggle = localStorage.getItem('toggleSidebar')
const sidebarToggle = (state = { active: Boolean(toggle) }, action) => {
    switch (action.type) {
        case ActionTypes.SIDEBAR_CLOSE:
            return {
                ...state,
                active: false
            }

        case ActionTypes.SIDEBAR_OPEN:
            return {
                ...state,
                active: true
            }

        default:
            return {
                ...state
            }
    }
}


export default combineReducers({
    sidebarToggle,
})