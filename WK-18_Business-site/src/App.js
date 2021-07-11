import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./components/header";
import Home from "./components/home";
import Services from "./components/services";
import Contact_Us from "./components/contact_Us";
import Footer from "./components/footer";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/contactus">Contact_Us</Link>
          <Link to="/services">Services</Link>
        </nav>
      </div>
      <Header />
      <Switch>
        <Route path="/contactus">
          <Contact_Us />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <h2> Page not Found</h2>/>
          <Link to="/">Click here to go to the home page.</Link>
          {/* or <Redirect to='/'/> */}
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
