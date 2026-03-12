import React, { useState } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <Home />
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;