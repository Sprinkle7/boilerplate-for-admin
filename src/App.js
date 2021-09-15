import React, { Component, Suspense } from "react";
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './configureStore';
import axios from 'axios'
// Styles
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

const Login = React.lazy(() => import('./containers/Authentication/Login'));
const Dashboard = React.lazy(() => import('./containers/Pages/Dashboard'));

class App extends Component {

  componentDidMount() {
    let token = localStorage.getItem('token')
    if (token && token !== '') {
      axios.interceptors.request.use(
        config => {
          config.headers.token = `${token}`
          return config
        }
      )
    }
  }
  
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/*" component={Dashboard} />
            </Switch>
          </Suspense>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
