import React, { useState } from "react";
import Login from "./Components/Login";
import Timer from "./Components/Timer";


function App() {
  const [login, setLogin] = useState(false);

  const handleLoginSuccess = () => {
    setLogin(true);
  };

  return (
    <div className="container mx-auto">
      {login ? <Timer /> : <Login onLoginSuccess={handleLoginSuccess} />}
    </div>
  );
}

export default App;
