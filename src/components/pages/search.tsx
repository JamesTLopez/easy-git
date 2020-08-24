import React, {useState} from "react";




const Search: React.FC = () => {

  
  const [userUrl,setUrl] = useState("");
  const handleSubmit = () =>{
    
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
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
              <form onSubmit={handleSubmit}>
                <input type="text" value={userUrl} onChange={handleChange} placeholder="Search.."/>
              </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
