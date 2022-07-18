import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
  return (
    <> 
      <p className='item-list__container'>
        {greeting}
      </p>
      
      <ItemCount stock="10" initial="1"/>
    </>

  )
}

export default ItemListContainer