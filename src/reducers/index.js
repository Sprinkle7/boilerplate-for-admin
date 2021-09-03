import { combineReducers } from 'redux'
import users from './users'
import { connectRouter } from 'connected-react-router'
import { reducer as formReducer } from 'redux-form'

export default (history) => combineReducers({
  users,
  form: formReducer,
  router: connectRouter(history),
});

