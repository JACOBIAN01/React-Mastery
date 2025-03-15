import React from "react";

const LogIN = ({ setLogIn }) => {
  return (
    <div>
      <button onClick={() => setLogIn(true)}>LogIn</button>
    </div>
  );
};

export default LogIN;
