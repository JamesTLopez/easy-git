import React from 'react';
import { BrowserRouter as Router, Route,Switch} from "react-router-dom"
import Search from './components/pages/search'
import Profile from './components/pages/profile'
import Nav from './components/layouts/navbar'
import './App.css';

function App() {
  return (

    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route exact path={`/`} component={Search}></Route>
          <Route path={`/profile`} component={Profile}></Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
