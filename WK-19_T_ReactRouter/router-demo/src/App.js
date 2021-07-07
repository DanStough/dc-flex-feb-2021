
import Alpha from './components/Alpha'
import Bravo from './components/Bravo'
import FourOhFour from './components/FourOhFour'
import Header from './components/Header'

import {
    BrowserRouter as Router,
    Route,
    Switch

} from 'react-router-dom'

function App() {
  return (
    <div>
        <Router>
            <Header/>
            <Switch>
                <Route path="/bravo"><Bravo /></Route>
                <Route exact path="/"><Alpha /></Route>
                <Route path="*"><FourOhFour /></Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
