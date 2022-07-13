import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
  return (
    <> 
      <p className='item-list__container'>
        {greeting}
      </p>
    </>

  )
}

export default ItemListContainer