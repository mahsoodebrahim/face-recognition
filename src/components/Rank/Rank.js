import React from "react";

function Rank({ userName, userEntries }) {
  return (
    <div>
      <div className="white f3">{userName}, your entry total is...</div>
      <div className="white f1">{userEntries}</div>
    </div>
  );
}

export default Rank;
