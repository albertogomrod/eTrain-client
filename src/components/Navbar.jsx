import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import navLogo from "../assets/logoipsum-218.svg"
import navBurger from "../assets/burger-bar.png"

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
        <img
          src={navLogo}
          alt="navLogo"
        />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
        <img id="hamburguer"
          src={navBurger}
          alt="navBurger"
        />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar