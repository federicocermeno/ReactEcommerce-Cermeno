import React from 'react'
import { CartWidget } from './CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div>
        <a href='#' className='navbar__item'>MARCA </a>
        <a href="#" className='navbar__item'>inicio</a>
        <a href="#" className='navbar__item'>contacto</a>
        <a href="#" className='navbar__item'>nosotros</a>
      </div>
      <CartWidget />
    </nav>
    
  )
}

export default NavBar