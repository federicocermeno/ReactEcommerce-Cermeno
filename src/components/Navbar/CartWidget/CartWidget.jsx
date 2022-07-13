import React from 'react'
import carrito from '../../../bag.svg'
import './CartWidget.css'

export const CartWidget = () => {
  return (
    <div>
      
      <a href='https://facebook.com' target={'_blank'} className='cart__container'>
        <img src={carrito} alt="Shopping Cart" className='cart__img' />
      </a>
    </div>
  )
}

