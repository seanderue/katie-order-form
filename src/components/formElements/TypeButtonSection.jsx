import React, { useState } from 'react'
import TypeButton from './TypeButton'
import cupcakeImage from './cupcake.jpeg'
import cakesiclesImage from './cakesicles.jpeg'
import cakeImage from './cake.jpeg'
import cookieImage from './cookie.jpeg'


export default function TypeButtonSection({newType, setNewType}) {

  const types = [
    { name: 'cookie',
      photo: cookieImage, 
      altText: 'Cookie',
      selected: false 
    },

    { name: 'cakesicle',
      photo: cakesiclesImage,
      altText: 'Cakesicle',
      selected: false },
      
    { name: 'cake',
      photo: cakeImage,
      altText: 'Cake',
      selected: false },

    { name: 'cupcake', 
      photo: cupcakeImage, 
      altText: 'Cupcake',
      selected: false 
    },

  ]

  const handleClick = (name) => {
    setNewType(name)
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
        name={type.name}
        photo={type.photo}
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
