import { combineReducers } from 'redux'
import * as types from '../types'

const loading = (state = false, action) => {
  switch(action.type) {
    case types.API_LOADING:
      return true
    case types.API_LOADED:
      return false
    default:
      return state
  }
}

export default combineReducers({
  loading,
})

