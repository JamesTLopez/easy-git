import React,{useState, useContext}  from "react";
import { Link } from "react-router-dom";
import {Isearch} from "../pages/Search"
import UserProvider from "../../context"


const Navbar: React.FC = () => {
  const [login,setLogin] = useState<Isearch>({login:''});
  const {state,dispatch} = useContext(UserProvider);

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setLogin({login:e.target.value});

  }


  const updateNewState = () =>{
    dispatch({type:'UPDATE',payload:login.login});
  }


  return (
    <header className="navbar-container">
      <div className="navbar-content">
        <div className="logo">
          <h1>Easy-Git</h1>
        </div>
        <div className="nav-area">
          <nav>
            <ul>
              <li>
                <div className="search-form">
                  <form>
                    <input type="text" onChange={handleChange} placeholder="Search.." />
                  </form>
                </div>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
