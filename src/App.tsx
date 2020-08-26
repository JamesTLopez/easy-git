import React,{useReducer} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/layouts/navbar";
import Footer from "./components/layouts/footerNav";
import Search from "./components/pages/Search";
import Profile from "./components/pages/Profile";

import "./App.css";

import UserProvider,{initState,reducer} from "./context";



const App: React.FC = () => {

  const [state,dispatch] = useReducer(reducer,initState);

  return (
    <UserProvider.Provider value={{state,dispatch}}>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path={`/`}>
              <Search/>
            </Route>
            <Route path={`/profile`}>
              <Profile />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </UserProvider.Provider>
  );
}

export default App;
