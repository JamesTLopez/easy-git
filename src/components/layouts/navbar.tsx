import React, { useState, useContext } from "react";
import { Link ,useHistory} from "react-router-dom";
import { Isearch } from "../pages/Search"
import UserProvider from "../../context"


const Navbar: React.FC = () => {
  const [login, setLogin] = useState<Isearch>({ login: '' });
  const { dispatch } = useContext(UserProvider);
  const history = useHistory();


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({ login: e.target.value });

  }

  const submitForm = (e: any) => {
    
    fetch(`https://api.github.com/users/${login.login}`)
      .then(res => {
        if (res.ok) {
          dispatch({ type: 'UPDATE_NAME', payload: login.login });
          return res.json()
        } else {
          throw new Error('Not Found');
        }
      })
      .then(data => {
        dispatch({ type: 'UPDATE_INFO', payload: data });
        fetch(data.repos_url)
          .then(res => {return res.json()})
          .then(repos =>{
            dispatch({ type: 'UPDATE_REPOS', payload: repos });
          })
        history.push("/profile")
      }).then(
        
      ).catch((error) => {

        console.log(error)
      })
    e.preventDefault();

  }

  return (
    <header className="navbar-container">
      <div className="navbar-content">
        <div className="logo">
          <Link to="/"><h1>Easy-Git</h1></Link>
        </div>
        <div className="nav-area">
          <nav>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <div className="search-form">
                  <form onSubmit={(e) => submitForm(e)}>
                    <input type="text" onChange={handleChange} placeholder="Search.." />
                    <button type="submit">Search</button>
                  </form>
                </div>
              </li>       
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
