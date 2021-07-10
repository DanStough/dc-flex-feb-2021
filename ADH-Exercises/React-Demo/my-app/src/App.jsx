import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Product from "./components/Product";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/ContactUs">
            <ContactUs />
          </Route>
          <Route path="/Footer">
            <Footer />
          </Route>
          <Route path="/Header">
            <Header />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Product">
            <Product />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
