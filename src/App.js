import React, { useState } from "react";
import Login from "./Components/Login";
import Timer from "./Components/Timer";
import Header from "./Components/Header";
import Footer from "./Components/Footer";


function App() {
  const [login, setLogin] = useState(false);

  const handleLoginSuccess = () => {
    setLogin(true);
  };

  return (
    <>
      <Header />

      <div className="container mx-auto flex flex-col items-center justify-center h-screen">
        {login ? <Timer /> : <Login onLoginSuccess={handleLoginSuccess} />}
      </div>
      <Footer/>
    </>


  );
}

export default App;
