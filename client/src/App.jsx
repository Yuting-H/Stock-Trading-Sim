import "./App.css";
import HomePage from "./pages/HomePage";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <nav>
        <Link to="/home">Home Page</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
