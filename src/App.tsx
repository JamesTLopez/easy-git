import React from 'react';
import { BrowserRouter as Router, Route,Switch} from "react-router-dom"

import Nav from './components/layouts/navbar'
import Footer from './components/layouts/footerNav'
import Search from './components/pages/Search'
import Profile from './components/pages/Profile'

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
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
