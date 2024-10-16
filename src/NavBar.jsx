import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div id="navDiv">
      <p>
        <NavLink to="/">Home</NavLink>
      </p>
      <p>
        <NavLink to="/Chips">Chips</NavLink>
      </p>
      <p>
        <NavLink to="/Candy">Candy</NavLink>
      </p>
      <p>
        <NavLink to="/Soda">Soda</NavLink>
      </p>
    </div>
  );
}

export default NavBar;
