import React,{useContext} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/layouts/navbar";
import Footer from "./components/layouts/footerNav";
import Search from "./components/pages/Search";
import Profile from "./components/pages/Profile";

import "./App.css";

import StoreProvider from "./context/UserContext";
import {Store} from "./context/UserContext";

function App(): JSX.Element {

  return (

    <StoreProvider>

      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path={`/`} component={Search}></Route>
            <Route path={`/profile`} component={Profile}></Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </StoreProvider>
  );
}

export default App;
