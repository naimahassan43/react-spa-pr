import { Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Tutorials from "./components/Tutorials";
import TDetails from "./components/TDetails";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="tutorials">Tutorials</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="tutorials" element={<Tutorials />} />
        <Route path="tutorials/:title" element={<TDetails />} />
      </Routes>
    </div>
  );
}

export default App;
