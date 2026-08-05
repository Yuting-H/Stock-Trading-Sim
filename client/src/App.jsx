import "./App.css";
import HomePage from "./pages/HomePage";
import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div>
      <main>
        <Navbar onLogin={handleLogin} />
        <div>{loggedIn ? "Yep" : "Not Logged in"}</div>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
