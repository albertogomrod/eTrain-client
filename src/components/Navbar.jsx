import React from 'react'
import {NavLink} from "react-router-dom"

function Navbar() {
  return (
    <div>
    <img src="" alt="logo-etrain" />
    <NavLink to="/">Home</NavLink>
    <NavLink to="/que-es-etrain">¿Qué es eTrain?</NavLink>
    <NavLink to="/servicios">Servicios</NavLink>
    <NavLink to="/blog">Blog</NavLink>
    <NavLink to="/contactos">Contactos</NavLink>

    </div>
  )
}

export default Navbar