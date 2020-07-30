import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
}
from 'react-router-dom';
import PopularBattle from './components/PopularBattle';
import Popular from './components/Popular';
import MyList from './components/MyList';
import Battle from './components/Battle';
import Discover from './components/Discover';
class App extends React.Component{
render(){
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/thisweek">This Week</Link></li>
            <li><Link to="/battle/">Battle</Link></li>
            <li><Link to="/popular/">Popular</Link></li>
            <li><Link to="/popular-battle">Popular battle</Link></li>
            <li><Link to="/my-list/">My list</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/thisweek/">
            <Discover />
          </Route>
          <Route path="/battle/">
            <Battle />
          </Route>
          <Route path="/popular-battle/">
            <PopularBattle />
          </Route>
          <Route path="/my-list/">
            <MyList />
          </Route>
          <Router path="/popular/">
            <Popular />
          </Router>
         

        </Switch>
      </div>
    </Router>
  );
}
}
export default App;