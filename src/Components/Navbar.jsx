import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav-container">
      <div className="logo">
        <img
          src="https://img.icons8.com/color/48/GeeksforGeeks.png"
          alt="logo"
        />
        <span>GeeksforGeeks</span>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="gallery">Gallery</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
