import React from "react";
import { Outlet, Link } from "react-router-dom";

const Tutorials = () => {
  return (
    <div>
      <li>
        <Link to="regex">Regular Expression</Link>
      </li>
      <li>
        <Link to="js">JavaScript Tutorial Series</Link>
      </li>
      <li>
        <Link to="python">Mastering Python Tutorial Series</Link>
      </li>
      <li>
        <Link to="react">Mastering React Tutorial Series</Link>
      </li>

      <Outlet />
    </div>
  );
};

export default Tutorials;
