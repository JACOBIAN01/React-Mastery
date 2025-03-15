import React from "react";

const LogOut = ({ setLogIn }) => {
  return (
    <div>
      <button onClick={() => setLogIn(false)}>LogOut</button>
    </div>
  );
};

export default LogOut;
