import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './styles.css';

const Home = React.lazy(() => import("home/App"));

const App = () => {
  return (
    <Router>
      <div className="app">
        <nav className="app__menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/my-profile">My profile</Link>
            </li>
          </ul>
        </nav>
        <Suspense fallback={null}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/my-profile">
              My Profile
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
