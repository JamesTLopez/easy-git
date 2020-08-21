import React from "react";

const search: React.FC = () => {
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
              <form>
                <input type="text" placeholder="Search.."/>
              </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default search;
