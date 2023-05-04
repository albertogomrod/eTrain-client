import { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import navLogo from "../assets/logoipsum-218.svg";
import navBurger from "../assets/burger-bar.png";

const Navbar = () => {
  const navigate = useNavigate();

  const { isLoggedIn, authenticateUser } = useContext(AuthContext);

  // LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    authenticateUser();
    navigate("/");
  };

  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  if (isLoggedIn === true) {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <img src={navLogo} alt="navLogo" />
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <img id="hamburguer" src={navBurger} alt="navBurger" />
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/que-es-etrain">¿Qué es eTrain?</NavLink>
              </li>
              <li>
                <NavLink to="/servicios">Servicios</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/contacto">Contacto</NavLink>
              </li>
              <li>
                <NavLink id="logout" onClick={handleLogout}>
                  Cerrar sesión
                </NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <img src={navLogo} alt="navLogo" />
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <img id="hamburguer" src={navBurger} alt="navBurger" />
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/que-es-etrain">¿Qué es eTrain?</NavLink>
              </li>
              <li>
                <NavLink to="/servicios">Servicios</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/contacto">Contacto</NavLink>
              </li>
              <li>
                <NavLink to="/login">Inicio sesión</NavLink>
              </li>
              <li>
                <NavLink to="/registro">Registro</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
