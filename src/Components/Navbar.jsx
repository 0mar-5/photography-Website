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
          <a>Home</a>
        </li>
        <li>
          <a>Gallery</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
