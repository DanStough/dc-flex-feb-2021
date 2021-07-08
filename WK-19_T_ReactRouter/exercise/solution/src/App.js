
import Contact from './components/Contact'
import Header from './components/Header'
import Homepage from './components/Homepage'
import Products from './components/Products'

import Container from 'react-bootstrap/Container'

import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch

} from 'react-router-dom'

function App() {
  return (
    <div>
        <Router>
            <Header/>
            <Container fluid="md">
                <Switch>
                    <Route path="/home"><Homepage /></Route>
                    <Route path="/contact"><Contact /></Route>
                    <Route path="/products"><Products /></Route>
                    <Route path="*"><Redirect to="/home" /></Route>
                </Switch>
            </Container>
        </Router>
    </div>
  );
}

export default App;
