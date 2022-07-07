import React from 'react'
import TypeButton from './TypeButton'



export default function TypeButtonSection({newType, setNewType}) {

  const types = [
    { name: 'Cookie',
      title: 'Cookies / Cookie Cake',
      selected: false,
      price: '12 for $24 / $35' 
    },

    { name: 'Cakesicle',
      title: 'Cakesicles',
      selected: false,
      price: '$3 per Cakesicle' },
      
    { name: 'Cake',
      title: 'Cake',
      selected: false, 
      price: '$45 - $65' },

    { name: 'Cupcake',
      title: 'Cupcakes',
      selected: false ,
      price: '$15 - $27'
    },

  ]

  const handleClick = (name) => {
    if (newType === name) {
      setNewType('')
    } else {
      setNewType(name)
    }
  }

  const checkSelected = (name) => {
    if (name === newType) {
      return true
    }
    else {
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
