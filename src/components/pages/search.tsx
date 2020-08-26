import React,{useContext} from "react";
import UserProvider from '../../context'


const Search: React.FC= (props) => {

const {state, dispatch} = useContext(UserProvider);



  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);

  }

  const updateState = () =>{
    console.log(state);

  }

  const updateNewState = () =>{

    dispatch({type:'FETCH',payload:'News'});

  }

  return (
    <div className="search-container">
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
              <form >
                <input type="text"  onChange={handleChange} placeholder="Search.."/>
              </form>
                <button onClick={updateState}>State Changer Test</button>
                <button onClick={updateNewState}>State New Test</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
