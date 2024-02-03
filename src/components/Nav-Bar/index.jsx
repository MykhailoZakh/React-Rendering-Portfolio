import {Link} from "react-router-dom";
import "./nav.css";

function NavBar() {
  return (
    <nav className="navbar h-100 px-3 py-3">
      <h2>Mykhailo Zakharkiv Portfolio</h2>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link to="/" className="nav-link active">
            About Me
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Portfolio" className="nav-link active">
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Resume" className="nav-link active">
            Resume
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Contact" className="nav-link ">
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
