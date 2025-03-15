import React, { useState } from "react";
import LogIN from "./components/LogIN";
import LogOut from "./components/LogOut";

function App2() {
  const [isLogIn, setLogIn] = useState(false);

  return (
    <div>
      {isLogIn ? <LogOut setLogIn={setLogIn} /> : <LogIN setLogIn={setLogIn} />}
    </div>
  );
}

export default App2;
