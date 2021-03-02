import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Delivery = React.lazy(() => import("delivery/App"));

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/delivery">Delivery</Link>
            </li>
          </ul>
        </nav>
        <Suspense fallback={null}>
          <Switch>
            <Route path="/delivery">
              <Delivery />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
