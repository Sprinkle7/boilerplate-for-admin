import * as types from 'types'


export function apiLoading(state) {
  if(state) {
    return {
      type: types.API_LOADING,
      payload: true,
    }
  } 
  else {
    return {
      type: types.API_LOADED,
      payload: false,
    }
  }
}
