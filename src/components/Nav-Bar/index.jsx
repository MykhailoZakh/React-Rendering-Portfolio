import {Link} from "react-router-dom";
import "./nav.css";

function NavBar() {
  return (
    <nav className="navbar px-3 py-3 fixed-top">
      <h2>Mykhailo Zakharkiv Portfolio</h2>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link to="/" className="nav-link nav-a">
            About Me
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/portfolio" className="nav-link nav-a">
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/resume" className="nav-link nav-a">
            Resume
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link nav-a">
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
