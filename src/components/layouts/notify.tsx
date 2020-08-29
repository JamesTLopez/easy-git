import React from "react";

export interface notify{
    isFound:boolean;
  }


function Notify() {
  return (
    <div className="notify">
      <div className="notify-container">
        <p>User does not exist</p>
      </div>
    </div>
  );
}

export default Notify;
