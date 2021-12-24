import { Routes, Route, NavLink } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Tutorials from "./components/Tutorials";
import TDetails from "./components/TDetails";
import NoMatch from "./components/NoMatch";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ul>
        <li className="mainMenu">
          <NavLink
            className={({ isActive }) => (isActive ? "selected" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="mainMenu">
          <NavLink
            className={({ isActive }) => (isActive ? "selected" : "")}
            to="about"
          >
            About
          </NavLink>
        </li>
        <li className="mainMenu">
          <NavLink
            className={({ isActive }) => (isActive ? "selected" : "")}
            to="tutorials"
          >
            Tutorials
          </NavLink>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="tutorials" element={<Tutorials />}>
          <Route path=":title" element={<TDetails />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
