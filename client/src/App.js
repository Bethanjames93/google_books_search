import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/Home"]}>
            <Home />
          </Route>
          <Route component={NoMatch}>
            <NoMatch />
          </Route>
          <Route exact path={["/Saved"]}>
            <Saved />
          </Route>
          <Footer />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
