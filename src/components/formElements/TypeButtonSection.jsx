import React, { useState } from 'react'
import TypeButton from './TypeButton'



export default function TypeButtonSection({newType, setNewType}) {

  const types = [
    { name: 'cookie',
      title: 'Cookies / Cookie Cake',
      selected: false,
      price: '12 for $24 / $35' 
    },

    { name: 'cakesicle',
      title: 'Cakesicles',
      selected: false,
      price: '$3 per Cakesicle' },
      
    { name: 'cake',
      title: 'Cake',
      selected: false, 
      price: '$38 - $60' },

    { name: 'cupcake',
      title: 'Cupcakes',
      selected: false ,
      price: '$15 - $27'
    },

  ]

  const handleClick = (name) => {
    setNewType(name)
    console.log(newType)
  }

  const checkSelected = (name) => {
    if (name === newType) {
      console.log(true)
      return true
    }
    else {
      console.log(false)
      return false
    }
  }

  const TypeButtonElements = types.map((type, index) => {
    return (
      <TypeButton
        key={index}
        index={index}
        price={type.price}
        title={type.title}
        altText={type.altText}
        selected={checkSelected(type.name)}
        onClick={() => handleClick(type.name)}
        />
    )
  })

  return (
    <>
      <h1 className='Form-header'>What sweets are you looking for?</h1>
      <div className='TypeButton-container'>
        {TypeButtonElements}
      </div>
    </>
  )
}
