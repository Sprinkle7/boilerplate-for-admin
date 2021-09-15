import { combineReducers } from 'redux'
import users from './users'
import projects from './projects'
import city from './city'
import area from './area'
import sidebarToggle from './sidebarToggle'
import { connectRouter } from 'connected-react-router'
import { reducer as formReducer } from 'redux-form'

export default (history) => combineReducers({
  users,
  sidebarToggle,
  projects,
  city,
  area,
  form: formReducer,
  router: connectRouter(history),
});

