import MyNavbar from './MyNavbar'
import Home from './Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PersonalTraining from './PersonalTraining';
import GroupClasses from './GroupClasses';
import Memberships from './Memberships';

function App() {
const title = "Welcome to the new Gym";
const likes = 50;

  return ( 
    <Router>
      <div className="App">
        <MyNavbar />
        <div className="content">
          <Switch>
            <Route exact path="/"> 
              <Home />
            </Route>
            <Route path="/personal">
              <PersonalTraining/>
            </Route>
            <Route path="/group">
              <GroupClasses/>
            </Route>
            <Route path="/memberships">
              <Memberships/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
