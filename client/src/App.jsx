import "./App.css";
import HomePage from "./pages/HomePage";
import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
