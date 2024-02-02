import {Link} from "react-router-dom";
import "./nav.css";

function NavBar() {
  return (
    <nav className="navbar ">
      <h1>Mykhailo Portfolio</h1>
      <ul className="nav nav-tabs">
        <Link to="/">About Me</Link>
        <Link to="/Portfolio" className="nav-link active">
          Portfolio
        </Link>
        <Link to="/Resume" className="nav-link active">
          Resume
        </Link>
        <Link to="/Contact" className="nav-link ">
          Contact Me
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
