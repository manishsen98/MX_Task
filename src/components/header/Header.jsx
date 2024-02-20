import "./Header.css";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
const Header = () => {
  return (
    <nav className="navbar">
      <h1 className="heading-primary">Restaurant Landing Page</h1>
      <ul className="navbar-items">
        <li className="navbar-item">
          <NavLink to="landing"> Landing</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/"> home</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="gallery"> gallery</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="shop"> shop</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="blog"> blog</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="about"> about</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="team"> team</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="contact"> contact</NavLink>
        </li>
        <li className="navbar-item">
          <FaShoppingCart />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
