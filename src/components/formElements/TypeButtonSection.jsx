import React, {useEffect, useRef} from 'react'
import TypeButton from './TypeButton'

export default function TypeButtonSection({newType, setNewType, handleNextPage}) {

  const isMounted = useRef(false)

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
      setNewType(name)
      setTimeout(()=>handleNextPage(), 150)
  }

  const checkSelected = (name) => {
    if (name === newType) {
      return true
    }
    else {
      return false
    }
  }

  useEffect(()=> {
    if(isMounted.current) { 
        console.log(newType)
        handleNextPage()
        console.log(isMounted.current)
     }
    else isMounted.current = true
}, [newType])

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
