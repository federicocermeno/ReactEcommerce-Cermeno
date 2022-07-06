import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className='navbar'>
        <a href='#' className='navbar__item'>NOMBRE </a>
        <a href="#" className='navbar__item'>inicio</a>
        <a href="#" className='navbar__item'>contacto</a>
        <a href="#" className='navbar__item'>nosotros</a>
    </nav>
  )
}

export default NavBar