import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

// import Posts from './containers/Posts';  // WIll be loaded lazily
import User from './containers/User';
import Welcome from './containers/Welcome';

// Only use default imports, named imports are not supported by import() method.
// here return import() means, whatever will come in this import() parenthesis will
// only imported when this function executed.
const Posts = React.lazy(() => import('./containers/Posts'));  

class App extends Component {
  render() {
    return (
      // <BrowserRouter basename="my-app">
      <BrowserRouter>
        {/* React-Fragment (added form v16.6) is same like Auxiliary Component, which 
        is used to wrap component. It doesn't render a real dom element. */}
        <React.Fragment>
          <nav>
            <NavLink to="/user">User Page</NavLink> |&nbsp;
            <NavLink to="/posts">Posts Page</NavLink>
          </nav>
          <Route path="/" component={Welcome} exact />
          <Route path="/user" component={User} />
          {/* <Route path="/posts" component={Posts} /> */}
          <Route path="/posts" render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <Posts />
            </Suspense>
          )} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
