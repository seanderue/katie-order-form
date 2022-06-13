import React from 'react'
import FormRadio from './FormRadio'

export default function FormRadioContainer({radioArray, setState, state, prompt}) {

    const handleClick = (label) => {
        if (state === label) {
            setState('')
        } else {
            setState(label)
        }
      }
    
      const checkSelected = (label) => {
        if (label === state) {
          return true
        }
        else {
          return false
        }
      }

    const RadioElements = radioArray.map((radio, index) => {
        return (
            <FormRadio
                key={index}
                thumbnail={radio.thumbnail}
                label={radio.label}
                selected={checkSelected(radio.label)}
                onClick={() => handleClick(radio.label)}
                />
            )
    })

    return (
    <>
    <h3 className='radio__prompt'>{prompt}</h3>
    <div className='radio__container'>
        {RadioElements}
    </div>
    </>
  )
}
