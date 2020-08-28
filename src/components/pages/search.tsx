import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import UserProvider from '../../context'


export interface Isearch {
  login?: string;
}

const Search: React.FC = () => {

  const history = useHistory();
  const [login, setLogin] = useState<Isearch>({ login: '' });
  const { dispatch } = useContext(UserProvider);



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
    <div className="search-container" >
      <div className="search-content">
        <div className="area">
          <div className="title">
            <div className="logo">
              <p>EASY-GIT</p>

            </div>
            <div className="description">
              <p>Displays users repository with easy visibility</p>
            </div>
          </div>
          <div className="search-form">
            <form onSubmit={(e) => submitForm(e)}>
              <input type="text" onChange={handleChange} placeholder="Search.." />
              <button type="submit">Search</button>
            </form>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
