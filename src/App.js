import React, { Component, Suspense } from "react";
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './configureStore';
// Styles
import 'bootstrap/dist/css/bootstrap.css';
// import 'font-awesome/css/font-awesome.css'
import './App.scss';

const Login = React.lazy(() => import('./containers/Authentication/Login'));
const Signup = React.lazy(() => import('./containers/Authentication/Signup'));
const Dashboard = React.lazy(() => import('./containers/Pages/Dashboard'));

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/*" component={Dashboard} />
            </Switch>
          </Suspense>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
