import { createBrowserHistory } from 'history'
import { applyMiddleware, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension';
import createRootReducer from '../src/reducers'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk';
import logger from 'redux-logger'

// create history
export const history = createBrowserHistory();

// define on your own as per requirment
const preloadedState = {};

const store = createStore(
  createRootReducer(history), // root reducer with router state
  preloadedState,
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
      thunk,
      logger
     ),
  )
)
export default store;