import React,{useContext, useState} from "react";
import UserProvider from '../../context'

export interface Isearch { 
  login?:string;
}

const Search: React.FC= (props) => {
const [login,setLogin] = useState<Isearch>({login:''});
const {dispatch} = useContext(UserProvider);

const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
  setLogin({login:e.target.value});

}

const sumbitForm = (e:any) =>{

  dispatch({type:'UPDATE',payload:login.login});
  e.preventDefault();

}

const updateNewState = () =>{
  // dispatch({type:'UPDATE',payload:login.login});
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
              <form onSubmit={(e) => sumbitForm(e)}>
                <input type="text"  onChange={handleChange} placeholder="Search.."/>
                <button type="submit">Submit</button>
              </form>
      
                <button onClick={updateNewState}>State New Test</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
