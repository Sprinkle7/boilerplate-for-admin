import React, {Suspense} from 'react';
import { Route, Switch } from 'react-router-dom';

// Configure routes
const ProjectList = React.lazy(() => import('./containers/Pages/Projects/ProjectsList'));
const AddProject = React.lazy(() => import('./containers/Pages/Projects/AddProject'));
const PageNotFound = React.lazy(() => import('./containers/PageNotFound'));

export default (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route exact path="/projects" component={ProjectList} />
      <Route exact path="/addProject" component={AddProject} />
      <Route exact path='*' component={PageNotFound} />
    </Switch>
  </Suspense>
);